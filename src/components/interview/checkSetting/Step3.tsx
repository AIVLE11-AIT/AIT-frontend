import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './Step3.style';
import { useRecoilState } from 'recoil';
import { CameraAtom } from '../../../recoil/settingAtomes';

function Step3() {
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
    const handleRecordingStop = async () => {
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();

            await new Promise<void>((resolve) => {
                if (mediaRecorder.current) { // 다시 한 번 null 체크
                    mediaRecorder.current.onstop = () => {
                        resolve();
                    };
                }
            });

            if (videoChunks.current.length > 0) {
                const videoBlob = new Blob(videoChunks.current, { type: 'video/webm' });
                const videoUrl = URL.createObjectURL(videoBlob);
                setRecordedMediaUrl(videoUrl);

                console.log("preview: ", previewRef.current);
                
                if (previewRef.current) {
                    previewRef.current.src = videoUrl;
                    previewRef.current.play();
                }
            } else {
                console.error("비디오 청크가 비어 있습니다.");
            }

            videoChunks.current = [];
        }
    };

    // 녹화 시작/중지 핸들러
    const handleRecordButtonClick = async () => {
        if (mediaRecorder.current && recordBtn === false) { // 녹화 시작
            setRecordBtn(true); // 녹화 버튼 상태를 true로 변경
            setRecordState(true); // 녹화 상태를 true로 변경
            mediaRecorder.current.start(); // 녹화 시작

        } else if (mediaRecorder.current && recordBtn === true) { // 녹화 중지
            setRecordBtn(false); // 녹화 버튼 상태를 false로 변경
            setRecordState(false); // 녹화 상태를 false로 변경
            setCameraState(true); // 테스트 유무 true
            await handleRecordingStop(); // 녹화 중지 후 미리보기 설정
        }
    };

    // 다시 녹화 핸들러
    const handleRetryButtonClick = () => {
        setCameraState(false); // 테스트 유무 초기화
        setRecordedMediaUrl(null); // 녹화된 URL 초기화
        setRecordBtn(false); // 녹화 버튼 상태 초기화
        setRecordState(false); // 녹화 상태 초기화
        getMediaPermission(); // 카메라, 마이크 다시 활성화
    };

    return (
        <div>
            <S.StepHeader>카메라, 마이크 점검</S.StepHeader>
            {!recordedMediaUrl && (
                <S.Step3Text>
                    권한 요청 창에서 Google Chrome의 카메라, 마이크 접근 버튼을 클릭한 후, <br />
                    <S.Step3Txt>"넓은 하늘로의 비상을 꿈꾸며"</S.Step3Txt>를 소리내어 읽어주세요.
                </S.Step3Text> )}
            {recordedMediaUrl && (
                <S.Step3Text>
                    카메라와 마이크가 잘 연결되었습니다. <br />
                    재생 버튼을 클릭해 영상이 잘 재생되는지 확인해 주세요. 
                </S.Step3Text> )}
            <S.StepMain>
                {!recordedMediaUrl && (
                    <S.CameraComponent>
                        <S.Record><S.RecordTxt recordState={recordState}>●</S.RecordTxt>녹화 중</S.Record>
                        <S.Camera ref={videoRef} autoPlay border={recordBtn ? '#75A812' : '#D0D2D7'} />
                        <S.RecordBtnBox>
                            <S.RecordBtn
                                btnState={recordBtn}
                                onClick={handleRecordButtonClick}
                            >
                                <S.RecordBtnIcon/>
                            </S.RecordBtn>
                        </S.RecordBtnBox>
                    </S.CameraComponent>
                )}

                {/* 미리보기 화면 */}
                {recordedMediaUrl && (
                    <S.CameraComponent>
                        <S.Camera ref={previewRef} src={recordedMediaUrl} controls border="#D0D2D7"/>
                        <S.RecordBtnBox>
                            <S.ReRecordBtn
                                btnState={recordBtn}
                                onClick={handleRetryButtonClick}
                            >
                                다시 녹화하기
                            </S.ReRecordBtn>
                        </S.RecordBtnBox>
                    </S.CameraComponent>
                )}
            </S.StepMain>
        </div>
    );
}

export default Step3;
