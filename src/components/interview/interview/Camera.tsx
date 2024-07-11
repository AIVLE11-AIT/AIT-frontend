import React, { useCallback, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as S from './Camera.style';
import axios from 'axios';

const Camera = forwardRef((props, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const videoChunks = useRef<Blob[]>([]);

    const getMediaPermission = useCallback(async () => {
        try {
            const constraints = {
                audio: true,
                video: true,
            };

            const stream = await navigator.mediaDevices.getUserMedia(constraints);

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                console.log("비디오 스트림 설정됨");
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

            recorder.onstop = async () => {
                const blob = new Blob(videoChunks.current, { type: 'video/webm' });

                const formData = new FormData();
                formData.append('file', blob, 'recorded-video.webm'); // Blob을 직접 FormData에 추가

                //console.log(formData);

                // 백엔드로 전송
                axios({
                    url: `/interviewGroup/${1}/interviewer/${1}/file/companyQna/${1}`,
                    method: 'post',  // 파일 업로드는 post로 해야 합니다.
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: sessionStorage.getItem('isLogin'),
                    },
                    data: formData,
                })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log('실패');
                    console.error('AxiosError:', error);
                });
            };

            mediaRecorder.current = recorder;
        } catch (err) {
            console.error("미디어 장치 접근 중 오류 발생:", err);
        }
    }, []);

    useEffect(() => {
        getMediaPermission();
    }, [getMediaPermission]);

    useImperativeHandle(ref, () => ({
        startRecording: () => {
            if (mediaRecorder.current && mediaRecorder.current.state === 'inactive') {
                mediaRecorder.current.start();
            }
        },
        stopRecording: () => {
            if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
                mediaRecorder.current.stop();
            }
        }
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
