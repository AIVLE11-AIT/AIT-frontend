import React, { useState } from 'react';
import * as C from './ContactBoardList.style';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

function ContactBoardList() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const boardData = [
    { no: 1, title: '공지사항입니다', date: '2024.07.11' },
    { no: 2, title: '두 번째 공지사항입니다', date: '2024.07.12' },
    { no: 3, title: '세 번째 공지사항입니다', date: '2024.07.13' },
    { no: 4, title: '네 번째 공지사항입니다', date: '2024.07.14' },
    { no: 5, title: '다섯 번째 공지사항입니다', date: '2024.07.15' },
    { no: 6, title: '여섯 번째 공지사항입니다', date: '2024.07.16' },
    // 추가적인 데이터를 여기에 추가할 수 있습니다.
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = boardData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(boardData.length / postsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleRowClick = (no: number) => {
    navigate(`/contact-board-detail/${no}`);
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
        <C.TotalPost>Total post : {boardData.length}개</C.TotalPost>
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
              <C.TableRow key={board.no} onClick={() => handleRowClick(board.no)}>
                <C.TableCell>{board.no}</C.TableCell>
                <C.TableCell>{board.title}</C.TableCell>
                <C.TableCell>{dayjs(board.date).format('YYYY.MM.DD')}</C.TableCell>
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
