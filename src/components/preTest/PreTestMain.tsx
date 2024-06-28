import React from 'react';
import * as P from './PreTestMain.style';
import Timer from './Timer';

function PreTestMain() {
  return (
    <div>
        <P.HeaderDiv>
            <P.Logo src={process.env.PUBLIC_URL + '/images/Logo.svg'}></P.Logo>
        </P.HeaderDiv>

        <P.PreTestMainContainer>
            <P.PreTestName>[KT] AI 면접 평가</P.PreTestName>
            <P.PreTestTitle>이미지(dlalwl723@naver.com) 님,<br/> 안내 유의사항을 꼭 확인하세요.</P.PreTestTitle>
            <P.DateText>면접 가능 일시<br/>2024년 07월 22일 10:00:00 ~ 2024년 07월 24일 17:00:00</P.DateText>
            <P.DateContainer>
                <Timer/>
            </P.DateContainer>
            <P.BtnContainer>
                
            </P.BtnContainer>
        </P.PreTestMainContainer>
    </div>
  )
}

export default PreTestMain