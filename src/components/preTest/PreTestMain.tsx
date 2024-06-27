import React from 'react';
import * as P from './PreTestMain.style';

function PreTestMain() {
  return (
    <div>
        <P.HeaderDiv>
            <P.Logo src={process.env.PUBLIC_URL + '/images/Logo.svg'}></P.Logo>
        </P.HeaderDiv>

        <P.PreTestMainContainer>
            <P.PreTestName>[KT] AI 면접 평가</P.PreTestName>
            <P.PreTestTitle>이미지(dlalwl723@naver.com) 님,<br/> 안내 유의사항을 꼭 확인하세요.</P.PreTestTitle>
            <P.PreTestDate>
                <P.LabelIcon />
                <P.Date>면접 가능 일시 | 2024년 07월 22일 10:00:00 ~ 2024년 07월 24일 17:00:00</P.Date>
            </P.PreTestDate>

            <P.BtnContainer>
                <P.PreTestBox borderColor="#D0D2D7" bg="white" position="0px">
                    <P.BoxTitle>AI 면접 사전 테스트<br/>체험 안내</P.BoxTitle>
                    <P.BoxContent>본 테스트는 [사전 테스트 체험] 이용이 필수입니다. <br/>
                        체험하기를 완료하지 않은 응시자는 본 테스트에 응시할 수 없습니다. <br/>
                        [사전 테스트 체험]에 입장하여 체점 후 [체점하기 종료] 버튼을 클릭하여 체험이 완료됩니다. <br/>
                        2024.07.24 17 이전까지 [체험하기 종료] 버튼을 클릭하면 체험이 완료됩니다.
                        반드시 정해진 일정 내에 클릭해주시기 바랍니다</P.BoxContent>
                </P.PreTestBox>
                <P.PreTestBox borderColor="#D0D2D7" bg="white" position="30px">
                    <P.BoxTitle>면접실 입장</P.BoxTitle>
                </P.PreTestBox>
            </P.BtnContainer>
        </P.PreTestMainContainer>
    </div>
  )
}

export default PreTestMain