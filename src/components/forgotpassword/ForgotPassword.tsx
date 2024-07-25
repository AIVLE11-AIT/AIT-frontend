import React, { useEffect, useState } from 'react';
import * as F from './ForgotPassword.style';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { SendEmailAtom } from '../../recoil/findPwAtoms';

type FormValue = {
  email: string;
};

function ForgotPassword() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValue>({ mode: 'onSubmit', criteriaMode: 'all' });

  const navigate = useNavigate();
  const [sendEmail, setSendEmail] = useRecoilState(SendEmailAtom);

  // 이메일 버튼 활성화
  const [isActive, setIsActive] = useState(false);
  const emailValue = watch('email') || '';

  // 이메일 전송 버튼 클릭 시
  const onClickBtn = (data: FormValue) => {
    const email = data.email;
    //console.log(email);

    // 로그인 api
    axios({
      url: `/sendTempPassword/${email}`,
      method: 'post',
    })
    
    .then((response) => {
      setSendEmail(email);
      navigate('/forgot-password-sent');
      
    }) .catch((error) => {
      console.log('실패');
      console.error('AxiosError:', error);
    });
  };

  useEffect(() => {
    if (
      emailValue.length > 0 &&
      !errors.email &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue) // 이메일 형식 체크
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [emailValue, errors.email]);

  function onClickBack(){
    navigate('/login');
  }

  return (
    <F.Container>
      <F.FormWrapper>
        <F.HeaderContainer>
          <F.BackBtn onClick={onClickBack}><F.BackBtnArrow src={process.env.PUBLIC_URL + '/images/BackBtn.svg'}/></F.BackBtn>
          <F.Title> 비밀번호 찾기</F.Title>
        </F.HeaderContainer>
        <F.SubTitle>
          가입한 이메일로 임시 비밀번호가 포함된 메일은 전송해 드립니다.
        </F.SubTitle>
        <F.InputForm onSubmit={handleSubmit(onClickBtn)}>
          <F.EmailWrap>
            <F.LabelWrap>
              <F.LabelIcon />
              <F.Label>이메일</F.Label>
            </F.LabelWrap>
            <F.InputWrap>
              <F.InputBox
                id="email"
                type="email"
                placeholder="기업 이메일을 입력해 주세요"
                {...register('email', {
                  required: '이메일은 필수 입력입니다.',
                  pattern: {
                    value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: '이메일 형식에 맞지 않습니다.',
                  },
                })}
              />
            </F.InputWrap>
            {errors.email && <F.Error>{errors.email.message}</F.Error>}
          </F.EmailWrap>
          <F.BtnContainer>
            <F.Button type="submit" disabled={!isActive}>
              메일 보내기
            </F.Button>
          </F.BtnContainer>
        </F.InputForm>
      </F.FormWrapper>
    </F.Container>
  );
}

export default ForgotPassword;
