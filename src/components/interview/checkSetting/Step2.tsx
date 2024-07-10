import React, { useState } from 'react'
import * as S from './Step2.style';
// recoil
import { Agree1Atom, Agree2Atom, Agree3Atom } from '../../../recoil/settingAtomes';
import { useRecoilState } from 'recoil';

function Step2() {

  const [check1, setCheck1] = useRecoilState(Agree1Atom);
  const [check2, setCheck2] = useRecoilState(Agree2Atom);
  const [check3, setCheck3] = useRecoilState(Agree3Atom);

  // 전체 동의 버튼 클릭 시
  const onClickCheck1 = () => {
    if(check1 === false){
      setCheck1(true);
      setCheck2(true);
      setCheck3(true);
    }
    else{
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
    }
  }

  const onClickCheck2 = () => {

    setCheck2(!check2);
    if(check3 === true && check2 === false){
      setCheck1(true);
    }
    else{
      setCheck1(false);
    }
  }

  const onClickCheck3 = () => {
    setCheck3(!check3);

    if(check3 === false && check2 === true){
      setCheck1(true);
    }
    else{
      setCheck1(false);
    }
  }
  return (
    <div>
      <S.StepHeader>이용 동의</S.StepHeader>
      <S.StepMain>

        <S.AgreeBox>
          <S.CheckBox checked={check1} onClick={onClickCheck1}/>필수 약관에 모두 동의합니다.
        </S.AgreeBox>

        <S.Step2Info>응시자 서약</S.Step2Info>
        <S.AgreeContentBox>
          <S.Content size="15px" weight="600">[면접 저작권 보호 및 유출 금지 동의]</S.Content>
          <S.Content size="14px" weight="500">
            본 면접 질문은 저작권의 보호를 받으며, 당사는 면접 질문에 대한 정보를 복제, 공중송신,<br/>
            배포하건 2차 저작물을 작성하는 등의 행위를 금합니다. 면접에 대한 정보를 당사의 동의 없이 타인에게<br/>
            공개하거나 전달하는 행위는 당사의 재산을 침해하는 것으로, 당사의 재산을 침해하는 이는 저작권법에 따라 5년
            이하의 징역 또는 5천만 원 이하의 벌금에 처할 수 있습니다.
          </S.Content>
          <S.Content size="15px" weight="600">[부정행위 처리 동의]</S.Content>
          <S.Content size="14px" weight="500">
            면접 진행 중 기업에서 규정한 명백한 부정행위가 확인되는 경우, 면접 응시 불가 및 실격 처리 등의 조치가<br/>
            이루어질 수 있음을 확인하였으며 이에 동의합니다.
          </S.Content>
        </S.AgreeContentBox>
        <S.AgreeBox>
          <S.CheckBox checked={check2} onClick={onClickCheck2}/>동의합니다.
        </S.AgreeBox>

        <S.Step2Info>개인정보 수집 및 이용 동의</S.Step2Info>
        <S.AgreeContentBox>
          <S.Content size="15px" weight="600">[공정한 면접 진행을 위한 응시자 감독]</S.Content>
          <S.Content size="14px" weight="500">
            공정한 면접 진행과 면접자의 AI분석을 위한 응시자 감독을 위해 컴퓨터 화면 기록, 웹캠으로 촬영된 영상을<br/>
            면접 종료 후 30일동안 보유 및 이용할 수 있습니다.
          </S.Content>
        </S.AgreeContentBox>
        <S.AgreeBox>
          <S.CheckBox checked={check3} onClick={onClickCheck3}/>동의합니다.
        </S.AgreeBox>
      </S.StepMain>
    </div>
  )
}

export default Step2