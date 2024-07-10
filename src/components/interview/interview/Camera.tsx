import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './Camera.style';
import { useRecoilState } from 'recoil';
import { CameraAtom } from '../../../recoil/settingAtomes';

function Camera() {
    const [recordState, setRecordState] = useState(false); // 녹화 상태(녹화중/중지)
    const [recordBtn, setRecordBtn] = useState(false); // 녹화 버튼 상태
    const [recordedMediaUrl, setRecordedMediaUrl] = useState<string | null>(null); // 녹화된 비디오의 URL
    const videoRef = useRef<HTMLVideoElement>(null);
    const previewRef = useRef<HTMLVideoElement>(null);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const videoChunks = useRef<Blob[]>([]);

    // 카메라 테스트 유무 상태
    const [cameraState, setCameraState] = useRecoilState(CameraAtom);

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
                mimeType: 'video/webm;codecs=vp9,opus', // 오디오 포함하는 MIME 타입 설정
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

    return (
        <div>
            <S.StepMain>
                {!recordedMediaUrl && (
                    <S.CameraComponent>
                        <S.Camera ref={videoRef} autoPlay />
                    </S.CameraComponent>
                )}
            </S.StepMain>
        </div>
    );
}

export default Camera;
