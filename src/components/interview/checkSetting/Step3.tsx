import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './Step3.style';
import dayjs from 'dayjs';

function Step3() {
    const [recordState, setRecordState] = useState(false); // 녹화 상태(녹화중/중지)
    const [recordBtn, setRecordBtn] = useState(false); // 녹화 버튼 상태
    const [recordedMediaUrl, setRecordedMediaUrl] = useState<string | null>(null); // 녹화된 비디오의 URL
    const videoRef = useRef<HTMLVideoElement>(null);
    const previewRef = useRef<HTMLVideoElement>(null);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const videoChunks = useRef<Blob[]>([]);

    // 카메라, 마이크 접근 허용
    const getMediaPermission = useCallback(async () => {
        try {
            const constraints = {
                audio: true,
                video: true,
            };

            const stream = await navigator.mediaDevices.getUserMedia(constraints);

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                console.log("Video stream set");
            } else {
                console.error("videoRef.current is null");
            }

            const recorder = new MediaRecorder(stream, {
                mimeType: 'video/webm',
            });

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    videoChunks.current.push(e.data);
                }
            };

            mediaRecorder.current = recorder;
        } catch (err) {
            console.error("Error accessing media devices:", err);
        }
    }, []);

    useEffect(() => {
        getMediaPermission();
    }, [getMediaPermission]);

    // 녹화 중지 시 URL 설정
    const handleRecordingStop = () => {
        const videoBlob = new Blob(videoChunks.current, { type: 'video/webm' });
        const videoUrl = URL.createObjectURL(videoBlob);
        setRecordedMediaUrl(videoUrl);
        if (previewRef.current) {
            previewRef.current.src = videoUrl;
            previewRef.current.play(); // 녹화 중지 후 미리보기 비디오 재생
        }
    };

    return (
        <div>
            <S.StepHeader>카메라, 마이크 점검</S.StepHeader>
            <S.Step3Text>
                권한 요청 창에서 Google Chrome의 카메라, 마이크 접근 버튼을 클릭 후, <br />
                "넓은 하늘로의 비상을 꿈꾸며"를 소리내어 읽어주세요.
            </S.Step3Text>
            <S.StepMain>
                {!recordedMediaUrl && (
                    <S.CameraComponent>
                        <S.Record recordState={recordState}>☉ 녹화 중</S.Record>
                        <S.Camera ref={videoRef} autoPlay border={recordBtn ? 'green' : '#D0D2D7'} />
                        <S.RecordBtnBox>
                            <S.RecordBtn
                                btnState={recordBtn}
                                onClick={() => {
                                    if (mediaRecorder.current && recordBtn === false) {
                                        setRecordBtn(true); // 버튼 상태를 true로 변경
                                        setRecordState(true); // 녹화 중 상태를 true로 변경
                                        mediaRecorder.current.start(); // 녹화 시작
                                    } else if (mediaRecorder.current && recordBtn === true) {
                                        setRecordBtn(false); // 버튼 상태를 false로 변경
                                        setRecordState(false); // 녹화 중 상태 false로 변경
                                        mediaRecorder.current.stop(); // 녹화 중지
                                        handleRecordingStop(); // 녹화 중지 후 미리보기 설정
                                    }
                                }}
                            >
                                {recordBtn ? "녹화 중지" : "녹화 시작"}
                            </S.RecordBtn>
                        </S.RecordBtnBox>
                    </S.CameraComponent>
                )}
                {recordedMediaUrl && (
                    <div>
                        <video ref={previewRef} controls width="640" />
                    </div>
                )}
            </S.StepMain>
        </div>
    );
}

export default Step3;
