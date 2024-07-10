import React from 'react';
import * as I from './InterviewMailHeader.style';

function InterviewMailHeader() {
  return (
    <I.HeaderContainer>
      <I.Title>KT 24년 하반기 공채 1차 AI면접</I.Title>
      <I.DetailsContainer>
        <I.DetailItem>
          <I.Icon size={16}>
           <img src={process.env.PUBLIC_URL + '/images/ResultIcon1.svg'} alt="Icon 1" />
          </I.Icon>
          2024년 1월 1일 - 2024년 1월 3일
        </I.DetailItem>
        <I.DetailItem>
          <I.Icon size={16}>
           <img src={process.env.PUBLIC_URL + '/images/ResultIcon2.svg'} alt="Icon 2" />
          </I.Icon>
          30분
        </I.DetailItem>
        <I.DetailItem>
          <I.Icon size={16}>
           <img src={process.env.PUBLIC_URL + '/images/ResultIcon3.svg'} alt="Icon 3" />
          </I.Icon>
          50명
        </I.DetailItem>
      </I.DetailsContainer>
    </I.HeaderContainer>
  );
}

export default InterviewMailHeader;
