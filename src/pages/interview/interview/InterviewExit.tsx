import React, { useEffect, useState } from 'react';
import * as I from  './InterviewExit.sytle';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function InterviewExit() {
    let { groupId, interviewerId } = useParams();
    const [interviewType, setInterviewType] = useState<string>('kor');
  
    useEffect(() => {
        axios({
        url: `/interviewGroup/${groupId}/interviewer/${interviewerId}/result/finish`,
        method: 'get',
      })
        .then((response) => {
          console.log(response.data);
          console.log(groupId, interviewerId);
          if (response.data.language === 'eng') {
            setInterviewType('eng');
          } else {
            setInterviewType('kor');
          }
        })
        .catch((error) => {
          console.error('AxiosError:', error);
          console.log(groupId, interviewerId, interviewType);
        });
    }, [groupId, interviewerId]);
  
    return (
      <div>
        {interviewType === 'eng' ? (
          <I.MainContainer>
            <I.ExitTitle>The interview is complete.</I.ExitTitle>
            <I.ExitText style={{ fontSize: '15px' }}>
              Thank you for your hard work :) You may close the window now.<br />
              For inquiries related to the AIT system, <br/>please contact us at aitech0311@gmail.com.
            </I.ExitText>
            <I.ExitIcon>👏🏻</I.ExitIcon>
            <I.LogoContainer>
              <img src={process.env.PUBLIC_URL + '/images/Logo.svg'} alt="AIT Logo" />
            </I.LogoContainer>
          </I.MainContainer>
        ) : (
          <I.MainContainer>
            <I.ExitTitle>면접이 완료되었습니다.</I.ExitTitle>
            <I.ExitText>
              수고하셨습니다 :) 창을 종료해도 좋습니다.<br />
              AIT 시스템과 관련된 문의는 aitech0311@gmail.com로 문의 바랍니다.
            </I.ExitText>
            <I.ExitIcon>👏🏻</I.ExitIcon>
            <I.LogoContainer>
              <img src={process.env.PUBLIC_URL + '/images/Logo.svg'} alt="AIT Logo" />
            </I.LogoContainer>
          </I.MainContainer>
        )}
      </div>
    );
  }
  
  export default InterviewExit;