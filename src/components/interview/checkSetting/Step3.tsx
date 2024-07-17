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

  let { groupId, interviewerId } = useParams<{ groupId: string; interviewerId: string }>();
    // 카메라 테스트 유무 상태
    const [photoState, setPhotoState] = useRecoilState(PhotoAtom);

  useEffect(() => {
    getWebcam((stream: MediaStream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  }, []);

  const getWebcam = (callback: (stream: MediaStream) => void) => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
      console.log(err);
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

  // 사진 촬영 버튼 클릭 시
  const sreenShot = () => {
    setCanvasState('');
    setCameraState('none');
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

            // API 호출
            axios.post(`/interviewGroup/${groupId}/interviewer/${interviewerId}/image`, formData)
              .then((response) => {
                //console.log(response.data);
                setPhotoState(true);
                // 성공 시 추가 로직 작성
              })
              .catch((error) => {
                console.error('AxiosError:', error);
                // 실패 시 추가 로직 작성
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
            width: "70px",
            height: "70px",
            margin: "10px", 
            borderRadius: "10px",
            position: "absolute", 
            zIndex: "101", 
            bottom: '5%', 
            left: "46%", 
            cursor: "pointer", 
            backgroundColor: "white"
          }}
        >
          <p>다시 촬영</p>
        </div>
      )}
    </div>
  );
}

export default Step3;
