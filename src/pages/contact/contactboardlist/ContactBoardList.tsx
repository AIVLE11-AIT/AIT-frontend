import React, { useState, useEffect } from 'react';
import * as C from './ContactBoardList.style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import Footer from '../../../components/footer/Footer';

// 데이터 타입 정의
interface BoardData {
  id: number;
  title: string;
  date: string;
}

function ContactBoardList() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [boardData, setBoardData] = useState<BoardData[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchData = async (endpoint: string, token: string) => {
    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: token
        }
      });

      console.log('Response data:', response.data);

      setBoardData(response.data);
      setTotalPosts(response.data.length);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const initialize = async () => {
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

      const endpoint = checkResponse.data ? '/question/readAll' : '/question/readMyQuestion';
      fetchData(endpoint, token);
    } catch (error) {
      console.error('Failed to initialize data or check admin status:', error);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = boardData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(currentPosts);
  };

  const handleRowClick = (id: number) => {
    navigate(`/contact-board-detail/${id}`);
  };

  const handleCreateClick = () => {
    navigate('/contact-board-create');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearchSubmit = () => {
    const token = sessionStorage.getItem('isLogin');
    if (!token) {
      console.error('No token found');
      return;
    }

    const endpoint = keyword
      ? `/question/search/${keyword}`
      : (isAdmin ? '/question/readAll' : '/question/readMyQuestion');

    fetchData(endpoint, token);
  };

  return (
    <>
      <C.PageContainer>
        <C.SearchContainer>
          <C.Title>문의하기</C.Title>
          <C.SearchInputWrapper>
            <C.SearchInputIcon src={`${process.env.PUBLIC_URL}/images/ContactIcon.svg`} alt="Search Icon" />
            <C.SearchInput
              placeholder="무엇이든 찾아보세요"
              value={keyword}
              onChange={handleSearchChange}
            />
            <C.SearchButton onClick={handleSearchSubmit}>
              검색
            </C.SearchButton>
            <C.CreateButton onClick={handleCreateClick}>
              글쓰기
            </C.CreateButton>
          </C.SearchInputWrapper>
          {totalPosts === null ? (
            <C.NoDataWrapper>
              <C.Icon size={7}>
                <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon1.svg'} alt="Icon 1" />
              </C.Icon>
              <C.Icon size={12}>
                <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon2.svg'} alt="Icon 2" />
              </C.Icon>
              <C.Icon size={20}>
                <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon3.svg'} alt="Icon 3" />
              </C.Icon>
              <C.NoDataText>진행 중인 문의사항이 없습니다</C.NoDataText>
              <C.Icon size={20}>
                <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon3.svg'} alt="Icon 3" />
              </C.Icon>
              <C.Icon size={12}>
                <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon2.svg'} alt="Icon 2" />
              </C.Icon>
              <C.Icon size={7}>
                <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon1.svg'} alt="Icon 1" />
              </C.Icon>
            </C.NoDataWrapper>
          ) : (
            <>
              <C.TotalPost>{totalPosts}개</C.TotalPost>
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
                  {currentPosts.length > 0 ? (
                    currentPosts.map((board, index) => (
                      <C.TableRow key={board.id} onClick={() => handleRowClick(board.id)}>
                        <C.TableCell>{indexOfFirstPost + index + 1}</C.TableCell>
                        <C.TableCell>{board.title}</C.TableCell>
                        <C.TableCell>{dayjs(board.date).format('YYYY.MM.DD')}</C.TableCell>
                      </C.TableRow>
                    ))
                  ) : (
                    <C.TableRow>
                      <C.TableCell colSpan={3}>일치하는 결과가 없습니다</C.TableCell>
                    </C.TableRow>
                  )}
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
            </>
          )}
        </C.SearchContainer>
      </C.PageContainer>
      <Footer />
    </>
  );
}

export default ContactBoardList;
