import React, { useEffect } from 'react'
import * as I from  './InterviewExit.sytle';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function InterviewExit() {
  let { groupId, interviewerId } = useParams(); // 주소에서 면접 id가져오는 변수

  useEffect(() => {
      axios({
          url: `/interviewGroup/${groupId}/interviewer/${interviewerId}/result/finish`,
          method: 'get',
      })
      .then((response) => {
          console.log(response.data);
          console.log(groupId, interviewerId);
      })
      .catch((error) => {
          console.log('실패');
          console.error('AxiosError:', error);
          console.log(groupId, interviewerId);
      });
  }, []);

  return (
    <div>
        <I.MainContainer>
            <I.ExitTitle>면접이 완료되었습니다.</I.ExitTitle>
            <I.ExitText>수고하셨습니다:) 창을 종료해도 좋습니다.<br/>AIT 시스템과 관련된 문의는 dlalwl723@naver.com로 문의 바랍니다.</I.ExitText>
            <I.ExitIcon>👏🏻</I.ExitIcon>
            <I.LogoContainer><img src={process.env.PUBLIC_URL + '/images/Logo.svg'}></img></I.LogoContainer>
        </I.MainContainer>
    </div>
  )
}

export default InterviewExit