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
                videoRef.current.srcObject = stream; // 비디오 요소에 스트림 설정
                console.log("비디오 스트림 설정됨");
            } else {
                console.error("videoRef.current가 null입니다.");
            }

            const recorder = new MediaRecorder(stream, {
                mimeType: 'video/webm;codecs=vp9,opus', // 오디오 포함하는 MIME 타입 설정
            });

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    videoChunks.current.push(e.data); // 데이터가 유효한 경우, Blob 배열에 추가
                }
            };

            recorder.onstop = async () => {
                const blob = new Blob(videoChunks.current, { type: 'video/webm' });
                const url = URL.createObjectURL(blob);
                videoChunks.current = [];

                // 비디오 다운로드 폴더에 저장
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'recorded-video.webm';
                console.log(a.download);
                
                const formData = new FormData();
                formData.append('file',a.download)

                
                
                // Axios 백엔드 전송
                const response = await axios.post(`/interviewGroup/create`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: sessionStorage.getItem('isLogin'),
                    },   
                });

                console.log('Success:', response.data);    
                
                axios({
                    url:`/interviewGroup/{interviewGroup_id}/interviewer/${3}/introduce/create`
                })

                // 비디오 다운로드
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            };

            mediaRecorder.current = recorder; // 미디어 레코더 설정
        } catch (err) {
            console.error("미디어 장치 접근 중 오류 발생:", err);
        }
    }, []);

    useEffect(() => {
        getMediaPermission(); // 컴포넌트가 마운트될 때 미디어 접근 권한 요청
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
