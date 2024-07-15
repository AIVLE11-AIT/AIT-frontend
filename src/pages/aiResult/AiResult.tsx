import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AiResult() {
  let { groupId, interviewerId } = useParams();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}/introduce/read`, {
          headers: {
            Authorization: sessionStorage.getItem('isLogin') || '',
          },
          responseType: 'blob', // 응답 데이터를 blob으로 설정
        });

        const videoBlob = new Blob([response.data], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoUrl(videoUrl);

      } catch (error) {
        console.error('AxiosError:', error);
        setError('Failed to fetch video data');
      }
    };

    fetchVideoData();

    // 클린업 함수: 컴포넌트가 언마운트될 때 URL 객체를 해제
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [groupId, interviewerId, videoUrl]);

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : videoUrl ? (
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default AiResult;
