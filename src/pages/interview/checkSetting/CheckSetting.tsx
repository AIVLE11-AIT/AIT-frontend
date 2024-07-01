import React, { useState } from 'react'
import * as C from './CheckSetting.style';
// 컴포넌트
import InterviewHeader from '../../../components/interview/checkSetting/CheckSettingHeader';
import Step1 from '../../../components/interview/checkSetting/Step1';
import Step2 from '../../../components/interview/checkSetting/Step2';
import Step3 from '../../../components/interview/checkSetting/Step3';
import Step4 from '../../../components/interview/checkSetting/Step4';
// recoil
import { useRecoilState } from 'recoil';
import { StepAtom } from '../../../recoil/settingAtomes';

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

  return (
    <>
      <InterviewHeader/>
      <C.InterviewComponent>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </C.InterviewComponent>
      {step === 1 && <C.NextBtn onClick={onClickNextBtn}>다음</C.NextBtn>}
      {step > 1 && 
        <C.BtnComponent>
          <C.SettingBtn onClick={onClickBackBtn} color="#696CEA" bg="white">이전</C.SettingBtn>
          <C.SettingBtn onClick={onClickNextBtn} color="white" bg="#696CEA">다음</C.SettingBtn>
        </C.BtnComponent>
      }
    </>
  )
}

export default CheckSetting