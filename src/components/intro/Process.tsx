import React from 'react'
import * as I from './Process.style';

function Process() {
  return (
    <div>
      <I.ProcessContainer>
            <I.ProcessBox>
                <div style={{ color: '#696CEA', fontSize: '16px', marginBottom: '20px'}}>STEP1</div>
                👤 회원가입
            </I.ProcessBox>
            <I.ProcessLine/>
            <I.ProcessBox>
                <div style={{ color: '#696CEA', fontSize: '16px', marginBottom: '20px'}}>STEP2</div>
                ✅ 관리자의 도입 허용
            </I.ProcessBox>
            <I.ProcessLine/>
            <I.ProcessBox>
                <div style={{ color: '#696CEA', fontSize: '16px', marginBottom: '20px'}}>STEP3</div>                    
                📑 면접 제작
            </I.ProcessBox>
        </I.ProcessContainer>
        <I.ProcessContainer>
            <I.ProcessBox>
                <div style={{ color: '#696CEA', fontSize: '16px', marginBottom: '20px'}}>STEP4</div>
                💬 응시자의 AI면접 진행
            </I.ProcessBox>
            <I.ProcessLine/>
            <I.ProcessBox>
                <div style={{ color: '#696CEA', fontSize: '16px', marginBottom: '20px'}}>STEP5</div>                    
                📊 AI 면접 분석
            </I.ProcessBox>
        </I.ProcessContainer>
    </div>
  )
}

export default Process