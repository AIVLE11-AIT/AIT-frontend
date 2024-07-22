import React, { useState } from 'react'
import * as A from './AgreeForm.style';
import { useNavigate } from 'react-router-dom';

function AgreeForm() {

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

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

  // 서비스 이용약관 전문 보기 클릭 시
  const navigate = useNavigate();
  const onClickLink1 = () => {
    navigate('/terms-of-service');
  }
  const onClickLink2 = () => {
    navigate('/privacy-policy');
  }
  return (
    <A.SignUpForm>
      <A.PageNumberBox>
        <A.PageNumberIcon bg="#606060">
          <A.PageNumberText color="white">1</A.PageNumberText>
        </A.PageNumberIcon>
        <A.PageNumberLine />
        <A.PageNumberIcon bg="white">
          <A.PageNumberText color="#606060">2</A.PageNumberText>
        </A.PageNumberIcon>
      </A.PageNumberBox>

      <A.SignUpTitle>약관 동의</A.SignUpTitle>

      <A.AgreeBox>
          <A.CheckBox checked={check1} onClick={onClickCheck1}/>AIT 플랫폼 필수 약관에 모두 동의합니다.
      </A.AgreeBox>
      <A.AgreeBox>
          <A.CheckBox checked={check2} onClick={onClickCheck2}/>AIT 서비스 이용약관 동의 
          <A.Link onClick={onClickLink1}>서비스 이용약관 전문 보기</A.Link>
      </A.AgreeBox>
      <A.AgreeBox>
          <A.CheckBox checked={check3} onClick={onClickCheck3}/>개인정보 수집/이용 동의
          <A.Link onClick={onClickLink2}>개인정보처리방침 전문보기</A.Link>
      </A.AgreeBox>
    </A.SignUpForm>
  )
}

export default AgreeForm