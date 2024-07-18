import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import * as C from './ContactBoardDetail.style';

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
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchDataAndCheckAdmin = async () => {
      try {
        const token = sessionStorage.getItem('isLogin');
        if (!token) {
          console.error('No token found');
          return;
        }

        // 관리자 여부 확인
        const checkResponse = await axios.get('/check', {
          headers: {
            Authorization: token
          }
        });
        setIsAdmin(checkResponse.data);

        // 데이터 불러오기
        const response = await axios.get(`/question/${id}`, {
          headers: {
            Authorization: token
          }
        });
        setDetailBoardData(response.data);

        // 답변 데이터 불러오기
        const answerResponse = await axios.get(`/question/${id}/answer/read`, {
          headers: {
            Authorization: token
          }
        });
        setAnswer(answerResponse.data.answer);
      } catch (error) {
        console.error('Failed to fetch data or check admin status:', error);
      }
    };

    fetchDataAndCheckAdmin();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('삭제하겠습니까?')) {
      try {
        const token = sessionStorage.getItem('isLogin');
        if (!token) {
          console.error('No token found');
          return;
        }

        await axios.delete(`/question/${id}/delete`, {
          headers: {
            Authorization: token
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
    console.log('Submitting answer:', answer);
    if (answer.trim() === '') {
      alert('답변을 입력해주세요.');
      return;
    }
    try {
      const token = sessionStorage.getItem('isLogin');
      if (!token) {
        console.error('No token found');
        return;
      }

      await axios.post(`/question/${id}/answer/create`, { answer }, {
        headers: {
          Authorization: token
        }
      });
      alert('답변이 제출되었습니다.');

      // 답변 데이터 다시 불러오기
      const answerResponse = await axios.get(`/question/${id}/answer/read`, {
        headers: {
          Authorization: token
        }
      });
      setAnswer(answerResponse.data.answer);
      setDetailBoardData((prevData: any) => ({ ...prevData, answer: answerResponse.data.answer }));
      setAnswer('');
    } catch (error) {
      console.error('Failed to submit answer:', error);
      alert('답변 제출에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const toggleAnswerSection = () => {
    setShowAnswer(!showAnswer);
  };

  const renderAnswerSection = () => {
    if (isAdmin) {
      return (
        <C.AnswerSection>
          <C.AnswerTextArea value={answer} onChange={handleAnswerChange} placeholder="답변을 입력해주세요." />
          <C.SubmitButton onClick={handleAnswerSubmit}>제출</C.SubmitButton>
        </C.AnswerSection>
      );
    } else {
      return detailBoardData.answer ? (
        detailBoardData.answer
      ) : (
        <C.NoAnswerText>답변을 달고 있는 중이에요</C.NoAnswerText>
      );
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
        <C.Bottom>
          <C.BottomStatus>상태 : 처리중</C.BottomStatus>
          <C.BottomComments onClick={toggleAnswerSection}>답변 ⬇</C.BottomComments>
        </C.Bottom>
        {showAnswer && (
          <C.AnswerTable>
            <tbody>
              <C.RowTable>
                <C.AnswerTableCell>
                  {renderAnswerSection()}
                </C.AnswerTableCell>
              </C.RowTable>
            </tbody>
          </C.AnswerTable>
        )}
      </C.SearchContainer>
    </C.PageContainer>
  );
}

export default ContactBoardDetail;
