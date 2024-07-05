import React from 'react'
import InterviewMakeForm from '../../components/interviewMake/InterviewMakeForm';
import * as I from './InterviewMake.style';

function InterviewMake() {
  return (
    <div>
      <I.PageNumberBox>
        <img src={process.env.PUBLIC_URL + '/images/PageNumberIcon2.svg'}></img>
        <I.PageNumberText position="48%" color="white">1</I.PageNumberText>
        <I.PageNumberLine />
        <img src={process.env.PUBLIC_URL + '/images/PageNumberIcon1.svg'}></img>
        <I.PageNumberText position="52%" color="#606060">2</I.PageNumberText>
			</I.PageNumberBox>
      
      <I.Title>면접 정보 입력</I.Title>
      <I.MainContainer>
        <InterviewMakeForm />
      </I.MainContainer>
    </div>
  )
}

export default InterviewMake