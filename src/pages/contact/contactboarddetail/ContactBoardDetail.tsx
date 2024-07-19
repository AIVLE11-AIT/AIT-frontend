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
    answer: '',
    answer_id: null
  });
  const [answer, setAnswer] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
        setDetailBoardData((prevData: any) => ({ ...prevData, answer_id: answerResponse.data.id }));
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

      const endpoint = isEditing
        ? `/question/${id}/answer/update/${detailBoardData.answer_id}`
        : `/question/${id}/answer/create`;

      await axios.post(endpoint, { content: answer }, {
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
      setDetailBoardData((prevData: any) => ({ ...prevData, answer: answerResponse.data.answer, answer_id: answerResponse.data.id }));
      setIsEditing(false);
      setShowAnswer(false); // 수정 후 답변 입력란 닫기
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error('Failed to submit answer:', error);
      alert('답변 제출에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const handleAnswerEdit = () => {
    setIsEditing(true);
    setShowAnswer(true);
  };

  const handleAnswerUpdate = async () => {
    console.log('Updating answer:', answer);
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

      await axios.put(`/question/${id}/answer/update/${detailBoardData.answer_id}`, { content: answer }, {
        headers: {
          Authorization: token
        }
      });
      alert('답변이 수정되었습니다.');

      // 수정된 답변 데이터 다시 불러오기
      const answerResponse = await axios.get(`/question/${id}/answer/read`, {
        headers: {
          Authorization: token
        }
      });
      setAnswer(answerResponse.data.answer);
      setDetailBoardData((prevData: any) => ({ ...prevData, answer: answerResponse.data.answer, answer_id: answerResponse.data.id }));
      setIsEditing(false);
      setShowAnswer(false); // 수정 후 답변 입력란 닫기
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error('Failed to update answer:', error);
      alert('답변 수정에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const handleAnswerDelete = async () => {
    if (window.confirm('답변을 삭제하겠습니까?')) {
      try {
        const token = sessionStorage.getItem('isLogin');
        if (!token) {
          console.error('No token found');
          return;
        }

        await axios.delete(`/question/${id}/answer/delete/${detailBoardData.answer_id}`, {
          headers: {
            Authorization: token
          }
        });
        alert('답변이 삭제되었습니다.');
        setAnswer('');
        setDetailBoardData((prevData: any) => ({ ...prevData, answer: '', answer_id: null }));
        window.location.reload(); // 페이지 새로고침
      } catch (error) {
        console.error('Failed to delete answer:', error);
        alert('답변 삭제에 실패했습니다. 다시 시도해 주세요.');
      }
    }
  };

  const toggleAnswerSection = () => {
    setShowAnswer(!showAnswer);
  };

  const renderAnswerSection = () => {
    if (isAdmin) {
      if (detailBoardData.answer && !isEditing) {
        return (
          <C.AnswerContainer>
            {detailBoardData.answer}
            <C.BottomButtonWrapper>
              <C.ActionButton onClick={handleAnswerEdit}>수정</C.ActionButton>
              <C.ActionButton onClick={handleAnswerDelete}>삭제</C.ActionButton>
            </C.BottomButtonWrapper>
          </C.AnswerContainer>
        );
      } else {
        return (
          <C.AnswerSection>
            <C.AnswerTextArea value={answer} onChange={handleAnswerChange} placeholder="답변을 입력해주세요." />
            {isEditing ? (
              <C.SubmitButton onClick={handleAnswerUpdate}>수정</C.SubmitButton>
            ) : (
              <C.SubmitButton onClick={handleAnswerSubmit}>제출</C.SubmitButton>
            )}
          </C.AnswerSection>
        );
      }
    } else {
      return detailBoardData.answer ? (
        <C.AnswerContainer>{detailBoardData.answer}</C.AnswerContainer>
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
              <C.TitleTableCell>{detailBoardData.title}</C.TitleTableCell>
              <C.TableHeader>등록일</C.TableHeader>
              <C.DateTableCell>{dayjs(detailBoardData.date).format('YYYY-MM-DD HH:mm')}</C.DateTableCell>
            </C.TableRow>
            <C.ContentTableRow>
              <C.TableHeader>내용</C.TableHeader>
              <C.TableCell colSpan={3}>{detailBoardData.content}</C.TableCell>
            </C.ContentTableRow>
          </tbody>
        </C.DetailTable>
        <C.BottomTable>
          <tbody>
            <C.BottomRow>
              <C.BottomStatusCell>{detailBoardData.answer ? '완료' : '처리중'}</C.BottomStatusCell>
              <C.BottomCommentsCell onClick={toggleAnswerSection}>답변</C.BottomCommentsCell>
            </C.BottomRow>
          </tbody>
        </C.BottomTable>
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
