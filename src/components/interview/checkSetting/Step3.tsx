import React, { useEffect, useRef, useState } from 'react';
import * as S from './Step3.style';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PhotoAtom } from '../../../recoil/settingAtomes';
import { useRecoilState } from 'recoil';

function Step3() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [canvasState, setCanvasState] = useState('none');
  const [cameraState, setCameraState] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [interviewType, setInterviewType] = useState<string>('kor'); // 기본값을 'kor'으로 설정

  let { groupId, interviewerId } = useParams<{ groupId: string; interviewerId: string }>();
  const [photoState, setPhotoState] = useRecoilState(PhotoAtom);

  useEffect(() => {
    const fetchInterviewData = async () => {
      try {
        const response = await axios.get(`/interviewGroup/readOne/${groupId}`);
        const data = response.data;
        //setInterviewType(data.interviewType);
        setInterviewType(data.language); // 데이터가 'eng'일 경우 업데이트
      } catch (error) {
        console.error('Error fetching interview data:', error);
      }
    };

    fetchInterviewData();
  }, [groupId]);

  useEffect(() => {
    if (interviewType) {
      getWebcam((stream: MediaStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
    }
  }, [interviewType]);

  const getWebcam = async (callback: (stream: MediaStream) => void) => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      callback(stream);
    } catch (err) {
      console.error('카메라 접근 에러:', err);
      const message = interviewType === 'eng'
        ? 'Failed to access the camera. Please allow camera permissions.'
        : '카메라 접근에 실패했습니다. 카메라 권한을 허용해 주세요.';
      setErrorMessage(message);
      alert(message);
    }
  };

  const GoToCamera = () => {
    setCanvasState('none');
    setCameraState('');
    getWebcam((stream: MediaStream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  };

  const sreenShot = () => {
    setCanvasState('');
    setCameraState('none');
    setPhotoState(true);
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.scale(-1, 1);
        context.translate(-canvas.width, 0);
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'fileName.jpg', { type: 'image/jpeg' });
            const formData = new FormData();
            formData.append('file', file);

            axios.post(`/interviewGroup/${groupId}/interviewer/${interviewerId}/image`, formData)
              .then((response) => {
                console.log("지원자 사진 전송 성공");
              })
              .catch((error) => {
                console.error('지원자 사진 전송 실패:', error);
              });
          }
        }, 'image/jpeg');

        const image = canvas.toDataURL();
        const link = document.createElement('a');
        link.href = image;

        const stream = video.srcObject as MediaStream;
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    }
  };

  return (
    <div>
      {interviewType === 'kor' ? (
        <div>
          <S.StepHeader>사진 촬영</S.StepHeader>
          <S.Step3Text>
            면접 시 본인 확인을 위한 사진 촬영을 진행해 주세요.<br/>
            가운데 위치해 촬영 버튼을 클릭해 주세요.
          </S.Step3Text>
          <S.CameraDiv>
            <video 
              id="videoCam" 
              ref={videoRef} 
              autoPlay 
              style={{ 
                display: cameraState, 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                borderRadius: "5px"
              }} 
            />
            <canvas 
              id="canvas" 
              ref={canvasRef} 
              width="630" 
              height="300" 
              style={{ display: canvasState, width: "630px", height: "300px" }} 
            />
          </S.CameraDiv>
          {canvasState === 'none' ? (
            <div
              onClick={sreenShot}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '70px',
                height: '70px',
                margin: '10px',
                borderRadius: '100px',
                position: 'absolute',
                zIndex: '101',
                bottom: '5%',
                left: '46%',
                cursor: 'pointer',
                backgroundColor: 'white',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  width: '60px',
                  height: '60px',
                  border: '2px solid',
                  borderRadius: '100px',
                }}
              ></div>
            </div>
          ) : (
            <div 
              onClick={GoToCamera} 
              style={{
                display: "flex", 
                justifyContent: "center",
                alignItems: "center",
                width: "90px",
                height: "70px",
                margin: "10px", 
                borderRadius: "10px",
                position: "absolute", 
                zIndex: "101", 
                bottom: '5%', 
                left: "46%", 
                cursor: "pointer", 
                backgroundColor: "white",
                border: "2px solid black"
              }}
            >
              <p>재촬영</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <S.StepHeader>Take a Photo</S.StepHeader>
          <S.Step3Text>
            Please take a photo for identity verification during the interview.<br/>
            Position yourself in the center and click the capture button.
          </S.Step3Text>
          <S.CameraDiv>
            <video 
              id="videoCam" 
              ref={videoRef} 
              autoPlay 
              style={{ 
                display: cameraState, 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                borderRadius: "5px"
              }} 
            />
            <canvas 
              id="canvas" 
              ref={canvasRef} 
              width="630" 
              height="300" 
              style={{ display: canvasState, width: "630px", height: "300px" }} 
            />
          </S.CameraDiv>
          {canvasState === 'none' ? (
            <div
              onClick={sreenShot}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '70px',
                height: '70px',
                margin: '10px',
                borderRadius: '100px',
                position: 'absolute',
                zIndex: '101',
                bottom: '5%',
                left: '46%',
                cursor: 'pointer',
                backgroundColor: 'white',
              }}
            >
              <div
                style={{
                  textAlign: 'center',
                  width: '60px',
                  height: '60px',
                  border: '2px solid',
                  borderRadius: '100px',
                }}
              ></div>
            </div>
          ) : (
            <div 
              onClick={GoToCamera} 
              style={{
                display: "flex", 
                justifyContent: "center",
                alignItems: "center",
                width: "90px",
                height: "70px",
                margin: "10px", 
                borderRadius: "10px",
                position: "absolute", 
                zIndex: "101", 
                bottom: '5%', 
                left: "46%", 
                cursor: "pointer", 
                backgroundColor: "white",
                border: "2px solid black"
              }}
            >
              <p>Retake</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Step3;
