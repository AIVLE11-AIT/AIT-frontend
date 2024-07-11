import React from 'react';
import * as F from './ForgotPasswordSent.style';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SendEmailAtom } from '../../recoil/findPwAtoms';

function ForgotPasswordSent() {
  const navigate = useNavigate();

  // 전송한 이메일 변수 가져오기
  const sendEmail = useRecoilValue(SendEmailAtom);

  // 이메일 전송 버튼 클릭 시
  const onClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <F.Container>
      <F.FormWrapper>
        <F.Title> 비밀번호 찾기</F.Title>
        <F.SubTitle>
          임시 비밀번호가 포함된 이메일이 {sendEmail}으로 전송되었습니다.
          <br />
          메일을 확인하여 임시 비밀번호로 로그인 후 비밀번호를 변경해 주세요.
        </F.SubTitle>
        <F.InputForm>
          <F.EmailIconWrap>
            📩
          </F.EmailIconWrap>
          <F.BtnContainer>
            <F.Button onClick={onClickBtn}>
              Login
            </F.Button>
          </F.BtnContainer>
        </F.InputForm>
      </F.FormWrapper>
    </F.Container>
  );
}

export default ForgotPasswordSent;
