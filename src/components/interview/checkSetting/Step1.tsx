import React from 'react'
import * as S from './Step1.style';

function Step1() {
  return (
    <div>
      <S.StepHeader>안내 사항</S.StepHeader>
      <S.StepMain>

        <S.Step1Container border="#FF4A4A">
          <S.NoticeText position="none">본 면접은 중간에 멈췄다가 이어서 진행이 불가능합니다.</S.NoticeText>
        </S.Step1Container>

        <S.WrapContainer>
          <S.Step1Wrap border="#868f9d">
            <S.Step1Info1>면접 시간</S.Step1Info1>
            <S.Step1Info2>10분</S.Step1Info2>
          </S.Step1Wrap>
          <S.Step1Wrap border="#868f9d">
            <S.Step1Info1>면접 질문</S.Step1Info1>
            <S.Step1Info2>총 6 문항</S.Step1Info2>
          </S.Step1Wrap>
        </S.WrapContainer>

        <S.Step1Container border="#696CEA">
          <S.NoticeText position='30px'>아래 안내를 확인해 주세요.</S.NoticeText>
          <S.Step1Info3>• 면접에 응시하기 위해서는 웹캠, 마이크, 원활한 인터넷 환경이 필요합니다.</S.Step1Info3>
          <S.Step1Info3>• 본 면접은 2024.07.22 10:00:00부터 2024.07.24 17:00:00까지 총 10분간 진행됩니다.</S.Step1Info3>
          <S.Step1Info3>• 면접 질문이 주어지고 20초 후 답변하시면 됩니다.</S.Step1Info3>
          <S.Step1Info3>• 한 질문에 대한 답변은 1분 동안 가능합니다.</S.Step1Info3>
          <S.Step1Info3>• 맨 마지막 [면접 종료하기] 버튼까지 눌러야 면접이 정상적으로 완료됩니다.</S.Step1Info3>
        </S.Step1Container>
      </S.StepMain>
    </div>
  )
}

export default Step1