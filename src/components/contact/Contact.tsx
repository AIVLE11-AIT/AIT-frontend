import React from 'react';
import * as C from './Contact.style';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  // InputBox 버튼 클릭 시
  const onClickInputBoxBtn = () => {
    const isLogin = sessionStorage.getItem('isLogin');
    if (isLogin) {
      navigate('/contact-board-list');
    } else {
      navigate('/login');
    }
  };

  return (
    <C.PageContainer>
      <C.SearchContainer>
        <C.Logo>
          <img src={`${process.env.PUBLIC_URL}/images/Logo.svg`} alt="Logo" />
        </C.Logo>
        <C.Title>무엇을 도와 드릴까요?</C.Title>
        <C.SearchInputWrapper>
          <C.SearchInputIcon src={`${process.env.PUBLIC_URL}/images/ContactIcon.svg`} alt="Search Icon" />
          <C.SearchInput onClick={onClickInputBoxBtn} placeholder="궁금한 점을 검색해 보세요" />
        </C.SearchInputWrapper>
      </C.SearchContainer>
    </C.PageContainer>
  );
}

export default Contact;
