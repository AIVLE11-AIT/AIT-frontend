import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function AiResult() {
    let { groupId, interviewerId} = useParams();
    useEffect(() => {
      const fetchQuestions = async () => {
        //console.log(groupId);
          try {
              const [introduceResponse, interviewerResponse] = await Promise.all([
                // 자기소개 영상 조회
                axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}/introduce/read`, {
                  headers: {
                    Authorization: sessionStorage.getItem('isLogin'),
                  },
                }),
                // 지원자 정보 조회
                axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}`, {
                  headers: {
                    Authorization: sessionStorage.getItem('isLogin'),
                  },
                }),
                
              ]);

              console.log(introduceResponse);
              //console.log(interviewerResponse.data);

          } catch (error) {
              console.error('AxiosError:', error);
              console.log('실패');
          }
      };

      fetchQuestions();
    }, []);
  return (
    <div>asdl;fkjadf</div>
  )
}

export default AiResult;