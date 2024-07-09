import React from 'react'
import * as I from  './InterviewExit.sytle';

function InterviewExit() {
  return (
    <div>
        <I.MainContainer>
            <I.ExitTitle>면접이 완료되었습니다.</I.ExitTitle>
            <I.ExitText>수고하셨습니다:) 창을 종료해도 좋습니다.<br/>에잇 시스템과 관련된 문의는 dlalwl723@naver.com로 문의 바랍니다.</I.ExitText>
            <I.ExitIcon>👏🏻</I.ExitIcon>
            <I.LogoContainer><img src={process.env.PUBLIC_URL + '/images/Logo.svg'}></img></I.LogoContainer>
        </I.MainContainer>
    </div>
  )
}

export default InterviewExit