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
  const [isAdmin, setIsAdmin] = useState(false); // 초기값을 null로 설정하여 초기 상태를 구분

  useEffect(() => {
    const fetchDataAndCheckAdmin = async () => {
      try {
        const token = sessionStorage.getItem('isLogin');
        //console.log('Token:', token); // 토큰이 올바르게 저장되었는지 확인

        // 관리자 여부 확인D
        const checkResponse = await axios.get('/check', {
          headers: {
            Authorization: token // 토큰이 없을 때를 대비해 기본값 설정
          }
        });
        //console.log('Admin Check Response:', checkResponse.data); // 응답 데이터를 확인
        setIsAdmin(checkResponse.data);

        // 데이터 불러오기
        const response = await axios.get(`/question/${id}`, {
          headers: {
            Authorization: token // 토큰이 없을 때를 대비해 기본값 설정
          }
        });
        //console.log('Question Data:', response.data); // 응답 데이터를 확인
        setDetailBoardData(response.data);
        setAnswer(response.data.answer);
      } catch (error) {
        console.error('Failed to fetch data or check admin status:', error);
        setIsAdmin(false); // 에러 발생 시 관리자가 아니라고 설정
      }
    };

    fetchDataAndCheckAdmin();
  }, [id, isAdmin]);

  // useEffect(() => {
  //   console.log('isAdmin:', isAdmin); // isAdmin 상태가 제대로 업데이트되었는지 확인
  // }, [isAdmin]);

  const handleDelete = async () => {
    if (window.confirm('삭제하겠습니까?')) {
      try {
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
    console.log('Submitting answer:', answer); // 제출될 답변 확인
    if (answer.trim() === '') {
      alert('답변을 입력해주세요.');
      return;
    }
    try {
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

  const renderAnswerSection = () => {
    if (isAdmin === null) {
      return <C.NoAnswerText>관리자 확인 중...</C.NoAnswerText>;
    } else if (isAdmin) {
      return (
        <>
          <C.AnswerTextArea value={answer} onChange={handleAnswerChange} placeholder="답변을 입력해주세요." />
          <C.SubmitButton onClick={handleAnswerSubmit}>제출</C.SubmitButton>
        </>
      );
    } else if (detailBoardData.answer) {
      return detailBoardData.answer;
    } else {
      return <C.NoAnswerText>답변을 달고 있는 중이에요</C.NoAnswerText>;
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
        {isAdmin ? (
        <C.AnswerTable>
          <tbody>
            <C.TableRow>
              <C.AnswerTitle>AIT 답변</C.AnswerTitle>
              <C.AnswerTableCell colSpan={1}>
                {renderAnswerSection()}
              </C.AnswerTableCell>
            </C.TableRow>
          </tbody>
        </C.AnswerTable>):(<div>{isAdmin ? "true" : "false"}</div>)}
      </C.SearchContainer>
    </C.PageContainer>
  );
}

export default ContactBoardDetail;
