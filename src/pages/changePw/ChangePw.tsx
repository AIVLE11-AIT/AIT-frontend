import React, { useEffect, useState } from 'react'
import * as F from './ChangePw.style';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChangePw() {
  type FormValue = {
    password: string;
    checkPassword: string;
  }

    const {
      register,
      handleSubmit,
      watch,
      setError,
      resetField,
      clearErrors,
      getValues,
      formState: { errors },
    } = useForm<FormValue>({ mode: 'onBlur' })

    //비밀번호 일치 확인(완료)
    useEffect(() => {

      if (watch('password') !== watch('checkPassword') && watch('checkPassword')) {
            setError('checkPassword', {
                type: 'password-mismatch',
                message: '비밀번호가 일치하지 않습니다'
            })
        } else { // 비밀번호 일치시 오류 제거
            clearErrors('checkPassword');
        }
    }, [watch('password'), watch('checkPassword')])

    //회원가입 버튼 활성화    
    const [isActive, setIsActive] = useState(false);
    const watchAll = Object.values(watch());
    const navigate = useNavigate();

    useEffect(() => {
        if (watchAll.every((el) => el)) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [watchAll]);
    
    
  // 비밀번호 변경 API
  const onValid = (data: FormValue) => {

    // 회원가입 api
    axios({
      url: `/update`,
      method: 'put',
      headers:{
        Authorization: sessionStorage.getItem('isLogin')
      },
      data: {
        "password": data.password
      }
    })
      
      .then((response) => {
        console.log(response.data);
        sessionStorage.removeItem('isLogin');
        navigate('/login');
        }) .catch((error) => {
        console.log('실패');
        console.error('AxiosError:', error);
      });
    }

    function onClickBack(){
      navigate('/group-profile');
    }

  return (
    <F.Container>
      <F.FormWrapper>
        <F.Title>
          <F.BackBtn onClick={onClickBack}><F.BackBtnArrow src={process.env.PUBLIC_URL + '/images/BackBtn.svg'}/></F.BackBtn>
          비밀번호 찾기
        </F.Title>
        <F.SubTitle>
          변경할 비밀번호를 입력해 주세요.
        </F.SubTitle>
        <F.InputForm onSubmit={handleSubmit(onValid)}>
          <F.EmailWrap>
            <F.LabelWrap>
              <F.LabelIcon />
              <F.Label>새 비밀번호</F.Label>
            </F.LabelWrap>
            <F.InputWrap>
              <F.InputBox
                id="password"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                // input의 기본 config를 작성
                {...register("password", {
                  required: "비밀번호 입력은 필수 입력입니다.",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9]{8,20}$/i,
                    message: "8~20자 영문, 숫자",
                  },
                })}
              />
            </F.InputWrap>
            {errors.password && <F.Error><small role="alert">{errors.password.message}</small></F.Error>}
          </F.EmailWrap>
          <F.EmailWrap>
            <F.LabelWrap>
              <F.LabelIcon />
              <F.Label>새 비밀번호 확인</F.Label>
            </F.LabelWrap>
            <F.InputWrap>
              <F.InputBox
                id="checkPassword"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
                // input의 기본 config를 작성
                {...register("checkPassword", {
                  required: "비밀번호 확인은 필수 입력입니다.",
                  validate: {
                    matchPassword: (value) => {
                      const { password } = getValues();
                      return password === value || '비밀번호가 일치하지 않습니다'
                    }
                  },
                })}
              />
            </F.InputWrap>
            {errors.checkPassword && <F.Error>{errors.checkPassword.message}</F.Error>}
          </F.EmailWrap>
          <F.BtnContainer>
            <F.Button type="submit" disabled={!isActive}>
              비밀번호 변경
            </F.Button>
          </F.BtnContainer>
        </F.InputForm>
      </F.FormWrapper>
    </F.Container>
  )
}

export default ChangePw