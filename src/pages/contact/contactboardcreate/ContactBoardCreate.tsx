import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './ContactBoardCreate.style';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import Footer from '../../../components/footer/Footer';

function ContactBoardCreate() {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      content: ''
    }
  });

  // 폼 데이터 타입 정의
  type FormValue = {
    title: string;
    content: string;
  };

  const onValid = async (data: FormValue) => {
    try {
      // JSON 데이터 준비
      const value = {
        title: data.title,
        content: data.content
      };

      // Axios를 통해 백엔드로 전송
      const response = await axios.post('/question/create', value, {
        headers: {
          Authorization: sessionStorage.getItem('isLogin')
        }
      });

      // 서버 응답이 성공적이면 상세 페이지로 이동
      navigate(`/contact-board-detail/${response.data.id}`);
    } catch (error) {
      console.error('Failed:', error);
      alert('저장에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <>
      <C.PageContainer>
        <C.FormContainer>
          <C.Title>문의하기 생성</C.Title>
          <C.Form onSubmit={handleSubmit(onValid)}>
            <C.FormRow>
              <C.Label>제목</C.Label>
              <Controller
                name="title"
                control={control}
                rules={{ required: '제목을 입력해주세요.' }}
                render={({ field }) => (
                  <C.Input
                    type="text"
                    placeholder="제목을 입력해주세요."
                    {...field}
                  />
                )}
              />
              {errors.title && <C.ErrorMessage>{errors.title.message}</C.ErrorMessage>}
            </C.FormRow>
            <C.FormRow>
              <C.Label>내용</C.Label>
              <Controller
                name="content"
                control={control}
                rules={{ required: '내용을 입력해주세요.' }}
                render={({ field }) => (
                  <C.TextArea
                    placeholder="내용을 입력해주세요."
                    {...field}
                  />
                )}
              />
              {errors.content && <C.ErrorMessage>{errors.content.message}</C.ErrorMessage>}
            </C.FormRow>
            <C.ButtonWrapper>
              <C.ActionButton type="submit">저장</C.ActionButton>
              <C.ActionButton type="button" onClick={() => navigate('/contact-board-list')}>
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

export default ContactBoardCreate;
