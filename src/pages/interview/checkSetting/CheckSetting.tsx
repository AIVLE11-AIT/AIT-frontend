import React from 'react'
import * as C from './CheckSetting.style';
// 컴포넌트
import InterviewHeader from '../../../components/interview/checkSetting/CheckSettingHeader';
import Step1 from '../../../components/interview/checkSetting/Step1';
import Step2 from '../../../components/interview/checkSetting/Step2';
import Step3 from '../../../components/interview/checkSetting/Step3';
import Step4 from '../../../components/interview/checkSetting/Step4';
// recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { Agree1Atom, CameraAtom, StepAtom } from '../../../recoil/settingAtomes';

function CheckSetting() {

    const [step, setStep] = useRecoilState(StepAtom);
    // 다음 버튼 클릭 시
    const onClickNextBtn = () => {
      setStep((prevStep) => prevStep + 1);
    };

    // 이전 버튼 클릭 시
    const onClickBackBtn = () => {
      setStep((prevStep) => prevStep - 1);
    };

    // 약관 동의 (step2)페이지에서 다음 버튼 클릭 시
    const agree = useRecoilValue(Agree1Atom);
    // 다음 버튼 클릭 시
    const onClickAgreeNextBtn = () => {
      if(agree){
        setStep((prevStep) => prevStep + 1);
      }
      else{
        alert("필수 이용 약관을 모두 동의해 주세요.");
      }
    };

    // 카메라 테스트 (step3)페이지에서 다음 버튼 클릭 시
    const testState = useRecoilValue(CameraAtom);
    // 다음 버튼 클릭 시
    const onClickTestNextBtn = () => {
      if(testState){
        setStep((prevStep) => prevStep + 1);
      }
      else{
        alert("카메라 테스트를 완료해 주세요.");
      }
    };

  return (
    <>
      <InterviewHeader/>
      <C.ComponentDiv>

        {/* 이전 버튼 */}
        <C.BtnDiv>
          {step > 1 && 
            <C.BtnComponent onClick={onClickBackBtn} border="3px solid #D0D2D7">
              <C.BackArrow src={process.env.PUBLIC_URL + '/images/NextArrow.svg'} display="flex"/>
            </C.BtnComponent>}
        </C.BtnDiv>

        <C.InterviewComponent>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </C.InterviewComponent>
        
        {/* 다음 버튼 */}
        <C.BtnDiv>
          {step === 1 &&
            <C.BtnComponent onClick={onClickNextBtn} border="3px solid #D0D2D7">
              <C.NextArrow src={process.env.PUBLIC_URL + '/images/NextArrow.svg'}/>
            </C.BtnComponent>}
          {step === 2 &&
            <C.BtnComponent onClick={onClickAgreeNextBtn} border="3px solid #D0D2D7">
              <C.NextArrow src={process.env.PUBLIC_URL + '/images/NextArrow.svg'}/>
            </C.BtnComponent>}
          {step === 3 &&
            <C.BtnComponent onClick={onClickTestNextBtn} border="3px solid #D0D2D7">
              <C.NextArrow src={process.env.PUBLIC_URL + '/images/NextArrow.svg'}/>
            </C.BtnComponent>}
        </C.BtnDiv>
      </C.ComponentDiv>
    </>
  )
}

export default CheckSetting