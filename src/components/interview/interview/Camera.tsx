import React, { useCallback, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as S from './Camera.style';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { CompanyQuestionAtom, IntroduceAtom, QnaIdAtom, QnaIndexAtom } from '../../../recoil/interviewAtoms';
import { useParams } from 'react-router-dom';

const Camera = forwardRef((props, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const videoChunks = useRef<Blob[]>([]);

    const introduceState = useRecoilValue(IntroduceAtom); // 자기소개 영상 상태
    const qnaState = useRecoilValue(CompanyQuestionAtom);
    const qnaId = useRecoilValue(QnaIdAtom);
    let { groupId, interviewerId } = useParams(); // 주소에서 면접 id가져오는 변수

    useEffect(() => {
        const initializeMedia = async () => {
            try {
                const constraints = { audio: true, video: true };
                const stream = await navigator.mediaDevices.getUserMedia(constraints);

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                } else {
                    console.error("videoRef.current가 null입니다.");
                }

                const recorder = new MediaRecorder(stream, {
                    mimeType: 'video/webm;codecs=vp9,opus',
                });

                recorder.ondataavailable = (e) => {
                    if (e.data.size > 0) {
                        videoChunks.current.push(e.data);
                    }
                };

                mediaRecorder.current = recorder;
            } catch (err) {
                console.error("미디어 장치 접근 중 오류 발생:", err);
            }
        };

        initializeMedia();
    }, []);

    const startRecording = useCallback(() => {
        if (mediaRecorder.current && mediaRecorder.current.state === 'inactive') {
            videoChunks.current = []; // 새로운 녹화가 시작될 때 videoChunks를 초기화
            mediaRecorder.current.start();
            console.log("재생");
        }
    }, []);

    const stopRecording = useCallback(() => {
        if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
            mediaRecorder.current.stop();
            mediaRecorder.current.onstop = async () => {
                console.log("재생 멈춤");
                const blob = new Blob(videoChunks.current, { type: 'video/webm' });

                const formData = new FormData();
                formData.append('file', blob, 'recorded-video.webm');

                try {
                    if (introduceState) { // 자기소개 영상인 경우
                        await axios.post(`/interviewGroup/${groupId}/interviewer/${interviewerId}/introduce/create`, formData);
                        console.log("자기소개 영상 전송 성공");
                    } else { // 질문 영상인 경우
                        const url = qnaState
                            ? `/interviewGroup/${groupId}/interviewer/${interviewerId}/file/companyQna/${qnaId}`
                            : `/interviewGroup/${groupId}/interviewer/${interviewerId}/file/interviewerQna/${qnaId}`;
                        
                        await axios.post(url, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        });
                        console.log(qnaState ? "기업 질문 영상 전송 성공" : "자소서 질문 영상 전송 성공");
                    }
                } catch (error) {
                    console.error('AxiosError:', error);
                } finally {
                    videoChunks.current = []; // 영상 전송 후 videoChunks 초기화
                }
            };
        }
    }, [introduceState, qnaId, qnaState, groupId, interviewerId]);

    useImperativeHandle(ref, () => ({
        startRecording,
        stopRecording
    }));

    return (
        <div>
            <S.StepMain>
                <S.CameraComponent>
                    <S.Camera ref={videoRef} autoPlay />
                </S.CameraComponent>
            </S.StepMain>
        </div>
    );
});

export default Camera;
