import React, { useCallback, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as S from './Camera.style';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { CompanyQuestionAtom, IntroduceAtom, QnaIdAtom } from '../../../recoil/interviewAtoms';

const Camera = forwardRef((props, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const videoChunks = useRef<Blob[]>([]);

    const introduceState = useRecoilValue(IntroduceAtom); // 자기소개 영상 상태
    const qnaId = useRecoilValue(QnaIdAtom);
    const qnaState = useRecoilValue(CompanyQuestionAtom);

    useEffect(() => {
        const initializeMedia = async () => {
            try {
                const constraints = { audio: true, video: true };
                const stream = await navigator.mediaDevices.getUserMedia(constraints);

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    //console.log("비디오 스트림 설정됨");
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
            mediaRecorder.current.start();
        }
    }, []);

    const stopRecording = useCallback(() => {
        if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
            mediaRecorder.current.stop();
            console.log(introduceState);
            console.log(qnaId);

            mediaRecorder.current.onstop = async () => {
                const blob = new Blob(videoChunks.current, { type: 'video/webm' });

                const formData = new FormData();
                formData.append('file', blob, 'recorded-video.webm'); // Blob을 직접 FormData에 추가
                // console.log(introduceState);
                // console.log(qnaId);

                if (introduceState) { // 자기소개 영상인 경우

                    axios({
                        url: `/interviewGroup/${1}/interviewer/${1}/introduce/create`,
                        method: 'post',
                        data: formData,
                      })
                      
                      .then((response) => {
                        console.log(response.data);
                        console.log("자기소개 영상 전송 성공");
                        
                      }) .catch((error) => {
                        console.log('실패');
                        console.error('AxiosError:', error);
                      });
                } else { // 질문 영상인 경우(완성)

                    // 기업 질문인 경우
                    if(qnaState){
                        axios({
                            url: `/interviewGroup/${1}/interviewer/${1}/file/companyQna/${qnaId}`,
                            method: 'post',
                            data: formData,
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: sessionStorage.getItem('isLogin'),
                            },
                          })
                          
                          .then((response) => {
                            console.log(response.data);
                            console.log("기업 질문 영상 전송 성공");
                            
                          }) .catch((error) => {
                            console.log('실패');
                            console.error('AxiosError:', error);
                        });
                    } else{
                        axios({
                            url: `/interviewGroup/${1}/interviewer/${1}/file/interviewerQna/${qnaId}`,
                            method: 'post',
                            data: formData,
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: sessionStorage.getItem('isLogin'),
                            },
                          })
                          
                          .then((response) => {
                            console.log(response.data);
                            console.log("자소서 질문 영상 전송 성공");
                            
                          }) .catch((error) => {
                            console.log('실패');
                            console.error('AxiosError:', error);
                        });
                    } 
                    
                }
            };
        }
    }, [introduceState, qnaId, qnaState]);

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
