import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as G from './GroupProfileHeader.style';

function GroupProfileHeader() {
  const navigate = useNavigate();

  function handleCreateButtonClick() {
    navigate('/interview-make1');
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <G.Header>
        <G.LeftContainer>
          <G.KTTitle>KT 면접 페이지</G.KTTitle>
        </G.LeftContainer>
        <G.RightContainer>
          <G.CreateButton onClick={handleCreateButtonClick}>+ 만들기</G.CreateButton>
        </G.RightContainer>
      </G.Header>
      <G.LineContainer>
        <G.Line />
        <G.Icon size={15}>
          <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon1.svg'} alt="Icon" />
        </G.Icon>
      </G.LineContainer>
      <G.FloatingButton onClick={scrollToTop}>↑</G.FloatingButton>
    </>
  );
}

export default GroupProfileHeader;
