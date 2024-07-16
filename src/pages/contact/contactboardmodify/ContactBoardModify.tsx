import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as C from './ContactBoardModify.style'; // 스타일 파일을 새로 만듭니다.
import axios from 'axios';

function ContactBoardModify() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // API를 호출하여 기존 데이터를 가져옵니다.
    axios.get(`/api/contact-board/${id}`).then((response) => {
      const data = response.data;
      setTitle(data.title);
      setContent(data.content);
    });
  }, [id]);

  const handleSave = () => {
    // 수정된 데이터를 저장하는 로직을 여기에 추가합니다.
    axios.put(`/api/contact-board/${id}`, { title, content }).then(() => {
      alert('수정되었습니다.');
      navigate('/contact-board-list');
    });
  };

  return (
    <C.PageContainer>
      <C.FormContainer>
        <C.Title>문의하기 수정</C.Title>
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

export default ContactBoardModify;
