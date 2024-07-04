import React from 'react'
import * as S from  './Step4.style';

function Step4() {
  return (
    <div>
        <S.StepHeader>이미지님!<br/>면접을 위한 환경 설정이 완료되었습니다.</S.StepHeader>
        <S.HeaderText>아래 내용을 확인한 후 시작 버튼을 눌러 면접을 진행해 주세요.</S.HeaderText>
        <S.StepMain>
          <S.ContentContainer>
            <S.ContentBox>
              <S.ContentIcon src={process.env.PUBLIC_URL + '/images/Forward.svg'}></S.ContentIcon>
              <S.ContentText color="#FF4A4A">면접이 시작되면<br/>반드시 새로고침을 누르지 말아 주세요.</S.ContentText>
            </S.ContentBox>

            <S.ContentBox>
              <S.ContentIcon src={process.env.PUBLIC_URL + '/images/Warning.svg'}></S.ContentIcon>
              <S.ContentText color="#FFBC2A">장치 연결이 끊기면 응시를 진행할 수 없으니<br/>연결이 끊기지 않도록 유의해 주세요.</S.ContentText>
            </S.ContentBox>
          </S.ContentContainer>

          <S.MainText>면접을 시작하지 않으려면 지금 창을 종료해 주세요!</S.MainText>
          <S.StartBtn>시작</S.StartBtn>
        </S.StepMain>
    </div>
  )
}

export default Step4