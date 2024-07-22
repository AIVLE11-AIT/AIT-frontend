import React, { useEffect, useState } from 'react'
import * as A from './AgreeForm.style';
import { useNavigate } from 'react-router-dom';

function AgreeForm() {

  const [isActive, setIsActive] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  // 전체 동의 버튼 클릭 시
  const onClickCheck1 = () => {
    if(check1 === false){
      setCheck1(true);
      setCheck2(true);
      setCheck3(true);
      
      if(check4 === true)
        setIsActive(true);
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

  // 다음 버튼 클릭 시
  const onClickNextBtn = () => {
    if(check1 === true && check4 === true){
      navigate('/signup');
    }
    else{
      alert("약관에 모두 동의해 주세요.");
    }
  }

  // 만 14세 이상 확인 클릭 시
  const onClickCheck4 = () => {
    setCheck4(!check4);
  }

  // 서비스 이용약관 전문 보기 클릭 시
  const navigate = useNavigate();
  const onClickLink1 = () => {
    navigate('/terms-of-service');
  }
  // 개인정보 동의 전문 보기 클릭 시
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

      <A.Table>
        <A.Col>
          <A.Row1>항목</A.Row1>
          <A.Row2>
            • 기업명, 기업 이메일(id), 비밀번호<br/>
            • 서비스 이용 또는 업무처리 과정에서 생성되어 수집될 수 있는 정보<br/>
            • IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록<br/>
          </A.Row2>
        </A.Col>
        <A.Col>
          <A.Row1>수집 목적</A.Row1>
          <A.Row2>
            • AIT 서비스 이용을 위한 기업 확인 및 문의처리<br/>
          </A.Row2>
        </A.Col>
        <A.Col>
          <A.Row1>보유 기간</A.Row1>
          <A.Row2>
            1) 회사는 법령에 따른 개인정보 보유∙이용기간 또는 이용자로부터 개인정보를 수집 시에 동의 받은 개인정보 보유∙이용기간 내에서 개인정보를 처리하며, 개인정보의 처리 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.<br/>
            2) 개인정보 처리 및 보유 기간은 다음과 같으며, 아래 각 항목에 대하여 이용자가 명시적으로 파기 요청을 하는 경우 지체 없이 파기합니다.<br/>
            • 회원 탈퇴 및 서비스 종료 시 즉시 파기<br/>
            • 회원이 개인정보에 대한 권리 행사를 통해 수집 및 이용 동의의 철회 또는 개인정보 삭제를 요청하는 경우
          </A.Row2>
        </A.Col>
      </A.Table>
      <A.TableText>
        이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. <br/>
        다만, 필수항목의 수집 및 이용에 대해 동의하지 않을 경우에는 회원가입을 진행할 수 없습니다.
      </A.TableText>

      <A.AgreeBox>
        <A.CheckBox checked={check4} onClick={onClickCheck4}/>본인은 만 14세 이상입니다.
    </A.AgreeBox>
    <A.NextBtn onClick={onClickNextBtn}>다음</A.NextBtn>
    </A.SignUpForm>
  )
}

export default AgreeForm