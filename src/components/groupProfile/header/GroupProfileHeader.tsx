import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as G from './GroupProfileHeader.style';

function GroupProfileHeader() {
  const navigate = useNavigate();

  function handleCreateButtonClick() {
    navigate('/interview-make');
  }

  function onClickSetting() {
    navigate('/change-password');
  }

  return (
    <div className="scroll__container">
      <G.Header>
        <G.LeftContainer>
          <G.KTTitle>면접 페이지</G.KTTitle>
        </G.LeftContainer>
        <G.RightContainer>
          <G.CreateButton onClick={handleCreateButtonClick}>+ 만들기</G.CreateButton>
        </G.RightContainer>
      </G.Header>
      <G.LineContainer>
        <G.Line />
        <G.Icon size={7}>
          <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon1.svg'} alt="Icon" />
        </G.Icon>
      </G.LineContainer>
      <G.FloatingButton id="top" onClick={onClickSetting} type="button">
        <G.TopIcon src={process.env.PUBLIC_URL + '/images/TopIcon.svg'}></G.TopIcon>
      </G.FloatingButton>
    </div>
  );
}

export default GroupProfileHeader;
