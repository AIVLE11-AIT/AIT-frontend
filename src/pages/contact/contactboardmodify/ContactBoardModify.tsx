import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as C from './ContactBoardModify.style'; // 스타일 파일을 새로 만듭니다.
import axios from 'axios';
import { Footer } from '../../../components/footer/Footer.style';

function ContactBoardModify() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // API를 호출하여 기존 데이터를 가져옵니다.
    const fetchData = async () => {
      try {
        const response = await axios.get(`/question/${id}`, {
          headers: {
            Authorization: sessionStorage.getItem('isLogin')
          }
        });
        const data = response.data;
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSave = async () => {
    // 수정된 데이터를 저장하는 로직을 여기에 추가합니다.
    try {
      await axios.put(`/question/${id}/update`, { title, content }, {
        headers: {
          Authorization: sessionStorage.getItem('isLogin')
        }
      });
      alert('수정되었습니다.');
      navigate('/contact-board-list');
    } catch (error) {
      console.error('Failed to save data:', error);
      alert('저장에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <>
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
      <Footer/>
    </>
  );
}

export default ContactBoardModify;
