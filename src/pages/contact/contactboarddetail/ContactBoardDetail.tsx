import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import * as C from './ContactBoardDetail.style'; // 기존 스타일을 유지하기 위해 임포트합니다.

function ContactBoardDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [detailBoardData, setDetailBoardData] = useState<any>({
    no: id,
    title: '',
    date: '',
    content: '',
    answer: ''
  });
  const [answer, setAnswer] = useState('');
  const isAdmin = sessionStorage.getItem('isLogin') === 'tkroh1997@naver.com';

  useEffect(() => {
    // 데이터 불러오기
    const fetchData = async () => {
      try {
        const response = await axios.get(`/question/${id}`, {
          headers: {
            Authorization: sessionStorage.getItem('isLogin')
          }
        });
        setDetailBoardData(response.data);
        setAnswer(response.data.answer || '');
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('삭제하겠습니까?')) {
      try {
        // 삭제 로직을 여기에 추가
        await axios.delete(`/question/${id}/delete`, {
          headers: {
            Authorization: sessionStorage.getItem('isLogin')
          }
        });
        alert('삭제되었습니다.');
        navigate('/contact-board-list');
      } catch (error) {
        console.error('Failed to delete:', error);
        alert('삭제에 실패했습니다. 다시 시도해 주세요.');
      }
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleAnswerSubmit = async () => {
    if (answer.trim() === '') {
      alert('답변을 입력해주세요.');
      return;
    }
    try {
      // 답변 제출 로직을 여기에 추가
      await axios.post(`/answer/${id}`, { answer }, {
        headers: {
          Authorization: sessionStorage.getItem('isLogin')
        }
      });
      alert('답변이 제출되었습니다.');
      setDetailBoardData((prevData: any) => ({ ...prevData, answer }));
      setAnswer('');
    } catch (error) {
      console.error('Failed to submit answer:', error);
      alert('답변 제출에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <C.PageContainer>
      <C.SearchContainer>
        <C.Header>
          <C.Title>문의하기</C.Title>
          <C.ButtonWrapper>
            <C.ActionButton onClick={() => navigate(`/contact-board-modify/${id}`)}>수정</C.ActionButton>
            <C.ActionButton onClick={handleDelete}>삭제</C.ActionButton>
            <C.ActionButton onClick={() => navigate('/contact-board-list')}>목록</C.ActionButton>
          </C.ButtonWrapper>
        </C.Header>
        <C.DetailTable>
          <tbody>
            <C.TableRow>
              <C.TableHeader>제목</C.TableHeader>
              <C.TableCell>{detailBoardData.title}</C.TableCell>
              <C.TableHeader>등록일</C.TableHeader>
              <C.CenterTableCell>{dayjs(detailBoardData.date).format('YYYY-MM-DD HH:mm')}</C.CenterTableCell>
            </C.TableRow>
            <C.ContentTableRow>
              <C.TableHeader>내용</C.TableHeader>
              <C.TableCell colSpan={3}>{detailBoardData.content}</C.TableCell>
            </C.ContentTableRow>
          </tbody>
        </C.DetailTable>
        <C.AnswerTable>
          <tbody>
            <C.TableRow>
              <C.AnswerTitle colSpan={2}>AIT<br/>답변</C.AnswerTitle>
            </C.TableRow>
            <C.TableRow>
              <C.AnswerTableCell colSpan={2}>
                {isAdmin ? (
                  <>
                    <C.AnswerTextArea value={answer} onChange={handleAnswerChange} placeholder="답변을 입력해주세요." />
                    <C.SubmitButton onClick={handleAnswerSubmit}>제출</C.SubmitButton>
                  </>
                ) : detailBoardData.answer ? (
                  detailBoardData.answer
                ) : (
                  <C.NoAnswerText>답변을 달고 있는 중이에요</C.NoAnswerText>
                )}
              </C.AnswerTableCell>
            </C.TableRow>
          </tbody>
        </C.AnswerTable>
      </C.SearchContainer>
    </C.PageContainer>
  );
}

export default ContactBoardDetail;
