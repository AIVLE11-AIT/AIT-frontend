import React, { useEffect, useState } from 'react';
import * as L from './Login.style';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { EmailAtom } from '../../recoil/userInfoAtoms';

type FormValue = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>({ mode: 'onBlur', criteriaMode: 'all' });

  const navigate = useNavigate();
  const [email, setEmail] = useRecoilState(EmailAtom);

  // 로그인 함수
  const login = (data: FormValue) => {
      const formData = new FormData();
      formData.append('username', data.email);
      formData.append('password', data.password);

      // 로그인 api
      axios({
        url: `/login`,
        method: 'post',
        data: formData,
      })
      
      .then((response) => {
        console.log(response.data);
        setEmail(data.email);
        sessionStorage.setItem('isLogin', response.headers.authorization);
        navigate('/group-profile');
        
      }) .catch((error) => {
        alert("이메일 또는 비밀번호를 확인해 주세요.");
        console.log('실패');
        console.error('AxiosError:', error);
      });
  };

  // 폼 유효성 검사 성공 시 호출되는 함수
  const onValid: SubmitHandler<FormValue> = data => {
    login(data);
  };

  // 폼 유효성 검사 실패 시 호출되는 함수
  const onError: SubmitErrorHandler<FormValue> = errors => {
    console.log(errors);
  };

  // 회원가입 버튼 클릭 시
  const onClickSignupBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/signup');
  };

  // 비밀번호 찾기 버튼 클릭 시
  const onClickForgotPasswordBtn = () => {
      navigate('/forgot-password');
  };

  // 로그인 버튼 활성화
  const [isActive, setIsActive] = useState(false);

  const emailValue = watch('email') || '';
  const passwordValue = watch('password') || '';

  useEffect(() => {
    if (
      emailValue.length > 0 &&
      passwordValue.length >= 8 &&
      !errors.email &&
      !errors.password
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [emailValue, passwordValue, errors.email, errors.password]);

  return (
    <L.Container>
      <L.FormWrapper>
        <L.Title>Login</L.Title>

        <L.LoginInputForm onSubmit={handleSubmit(onValid, onError)}>
          <L.LoginWrap>
            <L.LoginLabel>
              <L.LoginLabelIcon />
              <L.Label>기업 이메일</L.Label>
            </L.LoginLabel>
            <L.InputWrap>
              <L.InputBox
                id='email'
                type='email'
                placeholder='기업 이메일을 입력해 주세요'
                {...register('email', {
                  required: '이메일은 필수 입력입니다.',
                  pattern: {
                    value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: '이메일 형식에 맞지 않습니다.',
                  },
                })}
              />
            </L.InputWrap>
            <L.Error>{errors.email && <span>{errors.email.message}</span>}</L.Error>
          </L.LoginWrap>

          <L.LoginWrap>
            <L.LoginLabel>
              <L.LoginLabelIcon />
              <L.Label>비밀번호</L.Label>
            </L.LoginLabel>
            <L.InputWrap>
              <L.InputBox
                id='password'
                type='password'
                placeholder='비밀번호를 입력해 주세요'
                {...register('password', {
                  required: '비밀번호는 필수 입력입니다.',
                  pattern: {
                    value: /^[a-zA-Z0-9]{8,20}$/i,
                    message: '비밀번호는 8~20자 영문, 숫자를 포함해야 합니다.',
                  },
                })}
              />
            </L.InputWrap>
            <L.Error>{errors.password && <span>{errors.password.message}</span>}</L.Error>
          </L.LoginWrap>

          <L.BtnContainer>
            <L.Button type='submit' disabled={!isActive}>로그인</L.Button>
            <L.Button type='button' secondary onClick={onClickSignupBtn}>
              회원가입
            </L.Button>
          </L.BtnContainer>

          <L.FindPwContainer onClick={onClickForgotPasswordBtn}>
            <L.Link>비밀번호 찾기</L.Link>
            <L.FindPwIcon src={process.env.PUBLIC_URL + '/images/FindPwArrow.svg'}/>
          </L.FindPwContainer>
        </L.LoginInputForm>
      </L.FormWrapper>
    </L.Container>
  );
}

export default Login;
