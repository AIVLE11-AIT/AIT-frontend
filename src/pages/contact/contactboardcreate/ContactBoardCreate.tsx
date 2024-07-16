import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './ContactBoardCreate.style'; // 스타일 파일을 새로 만듭니다.

function ContactBoardCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    // 저장 로직을 여기에 추가합니다.
    // 예를 들어, 서버로 데이터를 전송합니다.
    alert('저장되었습니다.');
    navigate('/contact-board-list');
  };

  return (
    <C.PageContainer>
      <C.FormContainer>
        <C.Title>문의하기 생성</C.Title>
        <C.Form>
          <C.FormRow>
            <C.Label>제목</C.Label>
            <C.Input
              type="text"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </C.FormRow>
          <C.FormRow>
            <C.Label>내용</C.Label>
            <C.TextArea
              placeholder="내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </C.FormRow>
          <C.ButtonWrapper>
            <C.ActionButton onClick={handleSave}>저장</C.ActionButton>
            <C.ActionButton onClick={() => navigate('/contact-board-list')}>
              취소
            </C.ActionButton>
          </C.ButtonWrapper>
        </C.Form>
      </C.FormContainer>
    </C.PageContainer>
  );
}

export default ContactBoardCreate;
