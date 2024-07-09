import React from 'react'
import * as I from './InterviewMakeComplete.style'
import { useNavigate } from 'react-router-dom';

function InterviewMakeComplete() {

    const navigate = useNavigate();

    const onClickMailBtn = () => {
        navigate('/interview-mail');
    }

    const onClickGroupPateBtn = () => {
        navigate('/group-profile');
    }
  return (
    <I.MainContainer>
        <I.MainIcon>🙌🏻</I.MainIcon>
        면접 생성이 완료되었습니다!

        <I.BtnContainer>
            <I.CompleteBtn bg="#696CEA" onClick={onClickMailBtn}>메일 전송하기</I.CompleteBtn>
            <I.CompleteBtn bg="#404146"  onClick={onClickGroupPateBtn}>면접 페이지 이동</I.CompleteBtn>
        </I.BtnContainer>
    </I.MainContainer>
  )
}

export default InterviewMakeComplete;