import React, { useEffect, useState } from 'react'
import * as S from './SignUpForm.style'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpForm() {

    type FormValue = {
      email: string;
      checkNum: string,
      password: string;
      checkPassword: string;
      companyName: string;
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
        if (watchAll.every((el) => el) && isCheckNumActive == true && isConfirmNumActive == true) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [watchAll]);

    // 회원가입
    const onValid = (data: FormValue) => {

      if (!isCheckNumActive || !isConfirmNumActive) {
        if(!isCheckNumActive)
          alert("이메일 인증을 진행해 주세요.");
        else
          alert("인증번호를 확인해 주세요.");
      }
      else{
        // 회원가입 api
        axios({
          url: `/signup/register`,
          method: 'post',
        })
        .then((response) => {
          console.log(response.data);
          navigate('/login');
          }) .catch((error) => {
          console.log('실패');
          console.error('AxiosError:', error);
        });
      }
    };

    //값이 비정상적으로 입력되었을 때 실행되는 함수(완료)
    const onError = (error: any) => {
      console.log('onError called with error:', error);
    };

    // 인증번호 전송 버튼 클릭 시(완료)
    const [isCheckNumActive, setIsCheckNumActive] = useState(false);
    const onClickCheckBtn = (email: string) => {

      if(email === ""){ // 이메일 입력 없을 시
          alert("이메일을 입력해 주세요.");
      }

      else if(countdown != null){
          alert("5분 뒤에 다시 인증번호 전송이 가능합니다.")
      }

      else{
          alert(`입력하신 이메일로 인증번호가 전송되었습니다. \n5분 이내에 인증번호를 입력해 주세요.`);
          setIsCheckNumActive(true); // 버튼 활성화
          console.log(email);
          setCountdown(300); // 5분 = 300초

          // 이메일 전송 api
          axios({
            url: `/signup/send/${email}`,
            method: 'get',
          })
          .then((response) => {
            console.log(response.data);
            }) .catch((error) => {
            console.log('실패');
            console.error('AxiosError:', error);
          });
      }
    }

    // 인증번호 확인 버튼 클릭 시
    const [isConfirmNumActive, setIsConfirmNumActive] = useState(false);
    const onClickConfirmBtn = (email: string, code:string) => {

        if(code === ""){
          alert("인증번호를 입력해 주세요.");
        }
        else{
          alert(`인증번호가 확인되었습니다.`);
          setIsConfirmNumActive(true);

          // 인증번호 확인 api
          axios({
            url: `/signup/verify/${email}?code=${code}`,
            method: 'post',
          })
          .then((response) => {
            console.log(response.data);
            }) .catch((error) => {
            console.log('실패');
            console.error('AxiosError:', error);
          });
        }
    }

    // 인증번호 5분 카운트다운(완성)
    const [countdown, setCountdown] = useState<number | null>(null);
    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (countdown !== null && countdown > 0) {
        timer = setInterval(() => {
          setCountdown((prevCountdown) => (prevCountdown as number) - 1);
        }, 1000);
      } else if (countdown === 0) {
        setCountdown(null);
        //setIsCheckNumActive(false); // 인증번호 전송 버튼 비활성화
      }
  
      return () => clearInterval(timer);
    }, [countdown]);
  
    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };
  

  return (
    <S.SignUpForm>
      <S.PageNumberBox>
        <img src={process.env.PUBLIC_URL + '/images/PageNumberIcon1.svg'}></img>
        <S.PageNumberText position="44.3%" color="#606060">1</S.PageNumberText>
        <S.PageNumberLine />
        <img src={process.env.PUBLIC_URL + '/images/PageNumberIcon2.svg'}></img>
        <S.PageNumberText position="55.6%" color="white">2</S.PageNumberText>
      </S.PageNumberBox>

      <S.SignUpTitle>Sign Up</S.SignUpTitle>

      <S.SignUpInputForm onSubmit={handleSubmit(onValid, onError)}>
        <S.SignUpWrap>
          <S.SignUpLabel>
            <S.SignUpLabelIcon/>
            <S.Label>기업 이메일</S.Label>
          </S.SignUpLabel>
          <S.InputWrap>
            <S.InputBox
              id="email"
              type="text"
              placeholder="기업 이메일을 입력해 주세요"
              {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
            <S.CheckNumBtn onClick={() => onClickCheckBtn(getValues('email'))} toggle={isCheckNumActive}>
              {countdown !== null ? formatTime(countdown) : '인증번호 전송'}
            </S.CheckNumBtn>
          </S.InputWrap>
          <S.Error>{errors.email && <small role="alert">{errors.email.message}</small>}</S.Error>
        </S.SignUpWrap>

        <S.SignUpWrap>
          <S.SignUpLabel>
            <S.SignUpLabelIcon/>
            <S.Label>인증번호</S.Label>
          </S.SignUpLabel>
          <S.InputWrap>
            <S.InputBox
              id="checkNum"
              type="text"
              placeholder="인증번호를 입력해 주세요"
              {...register("checkNum", {
                required: "인증번호 입력은 필수 입력입니다.",
              })}
            />
            <S.CheckNumBtn onClick={() => onClickConfirmBtn(getValues('email'), getValues('checkNum'))} toggle={isConfirmNumActive}>인증번호 확인</S.CheckNumBtn>
          </S.InputWrap>
          <S.Error>{errors.checkNum && <small role="alert">{errors.checkNum.message}</small>}</S.Error>
        </S.SignUpWrap>

        <S.SignUpWrap>
          <S.SignUpLabel>
            <S.SignUpLabelIcon/>
            <S.Label>비밀번호</S.Label>
          </S.SignUpLabel>
          <S.InputBox
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            // input의 기본 config를 작성
            {...register("password", {
              required: "비밀번호 입력은 필수 입력입니다.",
              pattern: {
                value:
                  /^[a-zA-Z0-9_@?!]{8,20}$/i,
                message: "8~20자 영문, 숫자, 특수기호(_ @ ? !)",
              },
            })}
          />
          <S.Error>{errors.password && <small role="alert">{errors.password.message}</small>}</S.Error>
        </S.SignUpWrap>

        <S.SignUpWrap>
          <S.SignUpLabel>
            <S.SignUpLabelIcon/>
            <S.Label>비밀번호 확인</S.Label>
          </S.SignUpLabel>
          <S.InputBox
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
          <S.Error>{errors.checkPassword && <small role="alert">{errors.checkPassword.message}</small>}</S.Error>
        </S.SignUpWrap>

        <S.SignUpWrap>
          <S.SignUpLabel>
            <S.SignUpLabelIcon/>
            <S.Label>기업 이름</S.Label>
          </S.SignUpLabel>
          <S.InputBox
            id="companyName"
            type="text"
            placeholder="기업 이름을 입력해 주세요"
            // input의 기본 config를 작성
            {...register("companyName", {
              required: "기업 이름은 필수 입력입니다.",
              pattern: {
                value:
                  /^[가-힣a-zA-Z0-9]{2,12}$/i,
                message: "2~12자 한글, 영문, 숫자",
              },
            })}
          />
          <S.Error>{errors.companyName && <small role="alert">{errors.companyName.message}</small>}</S.Error>
        </S.SignUpWrap>

        <S.SubmitWrap>
          <S.BackBtn>이전</S.BackBtn>
          <S.SignUpBtn type="submit" toggle={isActive}>완료</S.SignUpBtn>
        </S.SubmitWrap>
      </S.SignUpInputForm>
    </S.SignUpForm>
  )
}

export default SignUpForm;