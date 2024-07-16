import React, { useEffect, useState, useRef } from 'react';
import * as Q from './Question.style';
import Camera from './Camera';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { CompanyQuestionAtom, IntroduceAtom, QnaIdAtom } from '../../../recoil/interviewAtoms';

function Question() {
    const [questions, setQuestions] = useState<string[]>([
        '안녕하세요? 만나서 반갑습니다.',
        '먼저, 자기소개를 말해주세요.'
    ]); // 면접 질문 리스트
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0); // 타이머 시간
    const [timerLabel, setTimerLabel] = useState('대기 중'); // 타이머 레이블
    const [timerStage, setTimerStage] = useState(''); // 타이머 단계
    const navigate = useNavigate();
    const cameraRef = useRef<{ startRecording: () => void; stopRecording: () => void } | null>(null); // 카메라 ref 추가
    
    let { groupId, interviewerId } = useParams(); // 주소에서 면접 id가져오는 변수

    // 공통질문 가져오는 API
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const [companyQnaResponse, interviewerQnaResponse] = await Promise.all([
                    axios.get(`/interviewGroup/${1}/companyQna/readAll`),
                    axios.get(`/interviewGroup/${1}/${1}/interviewerQna/readAll`),
                ]);

                const companyQnaQuestions = companyQnaResponse.data.map((item: any) => item.question);
                const interviewerQnaQuestions = interviewerQnaResponse.data.map((item: any) => item.question);

                setQuestions(prevQuestions => [
                    ...prevQuestions,
                    ...companyQnaQuestions,
                    ...interviewerQnaQuestions,
                ]);
            } catch (error) {
                console.error('AxiosError:', error);
                console.log('실패');
            }
        };

        fetchQuestions();
    }, [1]);

    const [qnaId, setQnaId] = useRecoilState(QnaIdAtom); // 질문 인덱스
    const [introduceState, setIntroduceState] = useRecoilState(IntroduceAtom); // 질문 인덱스
    const [qnaState, setQnaState] = useRecoilState(CompanyQuestionAtom);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (currentQuestionIndex === 0) {
            // 첫 번째 질문에서 4초 후에 다음 질문으로 넘어감
            timeout = setTimeout(() => {
                setCurrentQuestionIndex(1);
                setTimerLabel('준비 시간');
                setTimeLeft(20); // 20초 타이머
                setTimerStage('thinking');
            }, 4000);
        } else if (currentQuestionIndex >= 1 && currentQuestionIndex < questions.length) {

            if (timerStage === 'thinking') {
                // 생각 시간 20초 타이머
                timeout = setTimeout(() => {
                    setTimerLabel('답변 시간');
                    setTimeLeft(60); // 60초 타이머
                    setTimerStage('answering');
                    // 녹화 시작
                    if (cameraRef.current) {
                        cameraRef.current.startRecording();
                    }
                }, 20000);
            } else if (timerStage === 'answering') {
                // 답변 시간 60초 타이머
                timeout = setTimeout(() => {
                    // 녹화 중단
                    if (cameraRef.current) {
                        cameraRef.current.stopRecording();
                    }
                    setCurrentQuestionIndex(currentQuestionIndex + 1);                    
                    if(currentQuestionIndex === 1){ // 자기 소개 영상이 끝나면 상태 변경
                        setIntroduceState(false);
                        console.log(introduceState);
                    }

                    if(currentQuestionIndex === 4){ // 공통 질문이 끝난 경우
                        setQnaId(1);
                        setQnaState(false);
                    }
                    else{
                        setQnaId(qnaId + 1);
                    }
                    //console.log(qnaId);
                    if (currentQuestionIndex === questions.length - 1) {
                        console.log("면접 종료");
                        setTimerLabel('대기 중');
                        setTimerStage('');
                        setTimeout(() => {
                            navigate(`/interview-exit/${groupId}/${interviewerId}`); // 면접 종료시 종료 페이지로 이동
                        }, 1000);
                    } else {
                        setTimerLabel('준비 시간');
                        setTimeLeft(20); // 다음 질문에 대한 초기 타이머 설정 (20초)
                        setTimerStage('thinking');
                    }
                }, 60000);
            }
        }

        // Countdown timer 설정
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : prevTime));
        }, 1000);

        // 컴포넌트 언마운트 시 타이머 정리
        return () => {
            clearTimeout(timeout);
            clearInterval(timer);
        };

    }, [currentQuestionIndex, timerStage, questions.length, navigate]);

    // Format the timeLeft for display as "00"
    const formattedTimeLeft = timeLeft.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

    return (
        <div>
            <Q.QContainer>
                {/* 타이머 박스와 타이머 바 */}
                <Q.TimerTitle>{timerLabel}</Q.TimerTitle>
                <Q.Timer>00 : {formattedTimeLeft}</Q.Timer>
                <Q.TimerBar>
                    {timerLabel === '준비 시간' && (
                        <Q.Timer20Bar style={{ animationDuration: '20s' }} />
                    )}
                    {timerLabel === '답변 시간' && (
                        <Q.Timer60Bar style={{ animationDuration: '60s' }} />
                    )}
                </Q.TimerBar>

                {/* 카메라 컴포넌트 */}
                <Camera ref={cameraRef} />

                <Q.QBox>{questions[currentQuestionIndex]}</Q.QBox>
            </Q.QContainer>
        </div>
    );
}

export default Question;
