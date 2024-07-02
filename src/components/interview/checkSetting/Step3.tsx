import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as S from './Step3.style';
import dayjs from 'dayjs';

function Step3() {

    const [recordState, setRecordState] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
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
        } catch (err) { // 다른 장치에서 카메라 사용 중인 경우
            console.error("Error accessing media devices:", err);
            //alert("다른 장치에서 카메라 사용 중입니다. 현재 화면에서만 카메라를 활성화 해주세요.");
        }
    }, []);

    useEffect(() => {
        getMediaPermission();
    }, [getMediaPermission]);

    // 영상 저장
    const downloadVideo = () => {
      const videoBlob = new Blob(videoChunks.current, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(videoBlob);
      const link = document.createElement('a');
      link.download = `My video - ${dayjs().format('YYYYMMDD')}.webm`;
      link.href = videoUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <div>
      <S.StepHeader>웹캠 점검
        <S.Step3Text>권한 요청 창에서 Google Chrome의 카메라, 마이크 접근 버튼을 클릭해 주세요.</S.Step3Text>
      </S.StepHeader>
      <S.StepMain>
        <S.CameraComponent>
        <S.Record recordState={recordState}>☉ 녹화 중</S.Record>
            <S.Camera
              ref={videoRef}
              autoPlay 
            />
              <div>
                <button
                    onClick={() => {
                        if (mediaRecorder.current) {
                            setRecordState(true);
                            mediaRecorder.current.start();
                            console.log("Recording started");
                        }
                    }}
                    style={{
                        padding: '10px 20px',
                        marginRight: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#696CEA',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                >
                    Start Recording
                </button>
                <button
                    onClick={() => {
                        if (mediaRecorder.current) {
                            setRecordState(false);
                            mediaRecorder.current.stop();
                            console.log("Recording stopped");
                        }
                    }}
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#EA6969',
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                >
                    Stop Recording
                </button>
                <button onClick={downloadVideo}>Download</button>
            </div>
        </S.CameraComponent>
      </S.StepMain>
    </div>
  )
}

export default Step3;