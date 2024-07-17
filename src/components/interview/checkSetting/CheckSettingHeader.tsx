import React from 'react'
import * as C from './CheckSettingHeader.style';
import { useRecoilValue } from 'recoil';
import { StepAtom } from '../../../recoil/settingAtomes';

function CheckSetting() {
  const step = useRecoilValue(StepAtom);

  return (
    <C.HeaderComponent>
        <C.NumIcon bg={step >= 1 ? '#696CEA' : '#D0D2D7'}>1</C.NumIcon>
        <C.BarIcon bg={step >= 2 ? '#696CEA' : '#D0D2D7'}/>

        <C.NumIcon bg={step >= 2 ? '#696CEA' : '#D0D2D7'}>2</C.NumIcon>
        <C.BarIcon bg={step >= 3 ? '#696CEA' : '#D0D2D7'}/>

        <C.NumIcon bg={step >= 3 ? '#696CEA' : '#D0D2D7'}>3</C.NumIcon>
        <C.BarIcon bg={step >= 4 ? '#696CEA' : '#D0D2D7'}/>

        <C.NumIcon bg={step >= 4 ? '#696CEA' : '#D0D2D7'}>4</C.NumIcon>
        <C.BarIcon bg={step >= 5 ? '#696CEA' : '#D0D2D7'}/>

        <C.NumIcon bg={step >= 5 ? '#696CEA' : '#D0D2D7'}>5</C.NumIcon>
    </C.HeaderComponent>
  )
}

export default CheckSetting