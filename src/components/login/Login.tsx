import React, { useEffect, useState } from 'react';
import * as L from './Login.style';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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

  // 로그인 함수
  const login = async (data: FormValue) => {
    try {
      // 실제 로그인 API 호출 로직을 여기에 추가
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('로그인에 실패했습니다.');
      }

      const result = await response.json();
      console.log('로그인 성공:', result);

      // 로그인 성공 후 이동할 페이지로 이동
      navigate('/groupprofile');
    } catch (error) {
      console.error('로그인 오류:', error);
      // 로그인 실패 시 사용자에게 오류 메시지 표시 로직 추가 가능
    }
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
  const onClickForgotPasswordBtn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
      !errors.password &&
      /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)
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
              <L.Error>{errors.email && <span>{errors.email.message}</span>}</L.Error>
            </L.InputWrap>
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
                    value: /^(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9_@?!]{8,20}$/i,
                    message: '비밀번호는 8~20자 영문, 숫자, 특수기호를 포함해야 합니다.',
                  },
                })}
              />
              <L.Error>{errors.password && <span>{errors.password.message}</span>}</L.Error>
            </L.InputWrap>
          </L.LoginWrap>

          <L.Button type='submit' disabled={!isActive}>로그인</L.Button>
          <L.Button type='button' secondary onClick={onClickSignupBtn}>
            회원가입
          </L.Button>
          <L.Link href='#' onClick={onClickForgotPasswordBtn}>
            비밀번호 찾기 →
          </L.Link>
        </L.LoginInputForm>
      </L.FormWrapper>
    </L.Container>
  );
}

export default Login;
