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
                videoRef.current.srcObject = stream; // 비디오 요소에 스트림 설정
                console.log("비디오 스트림 설정됨");
            } else {
                console.error("videoRef.current가 null입니다.");
            }

            const recorder = new MediaRecorder(stream, {
                mimeType: 'video/webm',
            });

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    videoChunks.current.push(e.data); // 데이터가 유효한 경우, Blob 배열에 추가
                }
            };

            mediaRecorder.current = recorder; // 미디어 레코더 설정
        } catch (err) {
            console.error("미디어 장치 접근 중 오류 발생:", err);
        }
    }, []);

    useEffect(() => {
        getMediaPermission(); // 컴포넌트가 마운트될 때 미디어 접근 권한 요청
    }, [getMediaPermission]);

    // 녹화 중지 시 URL 설정 및 미리보기 준비
    const handleRecordingStop = () => {
        const videoBlob = new Blob(videoChunks.current, { type: 'video/webm' });
        const videoUrl = URL.createObjectURL(videoBlob);
        setRecordedMediaUrl(videoUrl); // 녹화된 비디오 URL 설정

        if (previewRef.current) {
            previewRef.current.src = videoUrl; // 미리보기 영상의 src 설정
            previewRef.current.play(); // 미리보기 영상 재생 시도
        }
    };

    return (
        <div>
            <S.StepHeader>카메라, 마이크 점검</S.StepHeader>
            <S.Step3Text>
                권한 요청 창에서 Google Chrome의 카메라, 마이크 접근 버튼을 클릭한 후, <br />
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
                                        setRecordBtn(true); // 녹화 버튼 상태를 true로 변경
                                        setRecordState(true); // 녹화 상태를 true로 변경
                                        mediaRecorder.current.start(); // 녹화 시작
                                    } else if (mediaRecorder.current && recordBtn === true) {
                                        setRecordBtn(false); // 녹화 버튼 상태를 false로 변경
                                        setRecordState(false); // 녹화 상태를 false로 변경
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
                    <S.CameraComponent>
                        <video ref={previewRef} src={recordedMediaUrl} controls width="640" />
                    </S.CameraComponent>
                )}
            </S.StepMain>
        </div>
    );
}

export default Step3;
