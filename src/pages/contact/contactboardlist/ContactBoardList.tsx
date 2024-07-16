import React, { useState, useEffect } from 'react';
import * as C from './ContactBoardList.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';

// 데이터 타입 정의
interface BoardData {
  id: number;
  title: string;
  created_at: string;
}

function ContactBoardList() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [boardData, setBoardData] = useState<BoardData[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    // 데이터 불러오기
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem('isLogin');
        if (!token) {
          console.error('No token found');
          return;
        }

        console.log('Fetching data from /question/readMyquestion');
        console.log('Authorization token:', token);

        const response = await axios.get('/question/readMyQuestion', {
          headers: {
            Authorization: sessionStorage.getItem('isLogin')
          }
        });

        console.log('Response data:', response.data);

        setBoardData(response.data);
        setTotalPosts(response.data.length);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = boardData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleRowClick = (id: number) => {
    navigate(`/contact-board-detail/${id}`);
  };

  const handleCreateClick = () => {
    navigate('/contact-board-create');
  };

  return (
    <C.PageContainer>
      <C.SearchContainer>
        <C.Title>문의하기</C.Title>
        <C.SearchInputWrapper>
          <C.SearchInputIcon src={`${process.env.PUBLIC_URL}/images/ContactIcon.svg`} alt="Search Icon" />
          <C.SearchInput placeholder="무엇이든 찾아보세요" />
          <C.CreateButton onClick={handleCreateClick}>
            + 문의 생성하기
          </C.CreateButton>
        </C.SearchInputWrapper>
        <C.TotalPost>Total post : {totalPosts}개</C.TotalPost>
        <C.Table>
          <C.ColGroup>
            <col width="15%" />
            <col width="60%" />
            <col width="25%" />
          </C.ColGroup>
          <C.TableHead>
            <C.TableRow>
              <C.TableHeader>번호</C.TableHeader>
              <C.TableHeader>제목</C.TableHeader>
              <C.TableHeader>작성일</C.TableHeader>
            </C.TableRow>
          </C.TableHead>
          <C.TableBody>
            {currentPosts.map((board) => (
              <C.TableRow key={board.id} onClick={() => handleRowClick(board.id)}>
                <C.TableCell>{board.id}</C.TableCell>
                <C.TableCell>{board.title}</C.TableCell>
                <C.TableCell>{dayjs(board.created_at).format('YYYY.MM.DD')}</C.TableCell>
              </C.TableRow>
            ))}
          </C.TableBody>
        </C.Table>
        <C.PaginationWrapper>
          <C.Pagination>
            {Array.from({ length: totalPages }, (_, index) => (
              <C.PageNumber
                key={index + 1}
                onClick={() => handleClick(index + 1)}
                active={index + 1 === currentPage}
              >
                {index + 1}
              </C.PageNumber>
            ))}
          </C.Pagination>
        </C.PaginationWrapper>
      </C.SearchContainer>
    </C.PageContainer>
  );
}

export default ContactBoardList;
