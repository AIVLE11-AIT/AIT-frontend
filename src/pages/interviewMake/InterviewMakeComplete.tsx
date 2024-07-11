import React from 'react'
import * as I from './InterviewMakeComplete.style'
import { useNavigate, useParams } from 'react-router-dom';

function InterviewMakeComplete() {

    const navigate = useNavigate();
    let { index } = useParams();
    const onClickMailBtn = () => {
        //console.log(index);
        navigate(`/interview-mail-yet/${index}`); // 면접 페이지 경로로 이동
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