import React, { useEffect, useState } from 'react';
import GroupProfileHeader from '../header/GroupProfileHeader';
import { useNavigate } from 'react-router-dom';
import * as S from './Result.style';
import Modal from './Modal';
import axios from 'axios';

type ResultProps = {
  index: number;
};

function Result({ index }: ResultProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [people, setPeople] = useState<number>(0);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const navigate = useNavigate();

    // 수정 버튼 클릭 시
    function handleCreateButtonClick() {
      navigate('/interview-make');
    }

    useEffect(() => {
      axios({
        url: `/interviewGroup/${index + 1}`,
        method: 'get',
        headers: {
          Authorization: sessionStorage.getItem('isLogin'),
        },
      })
        .then((response) => {
          setTitle(response.data.name);
          // Format start date and end date here
          setStartDate(formatDate(response.data.start_date));
          setEndDate(formatDate(response.data.end_date));
          setPeople(response.data.interviewers.length);
        })
        .catch((error) => {
          console.log('실패');
          console.error('AxiosError:', error);
        });
    }, [index]);

    // Function to format date from 'YYYY-MM-DDTHH:mm:ss' to 'YYYY-MM-DD HH:mm:ss'
    const formatDate = (dateString: string) => {
      const [datePart, timePart] = dateString.split('T');
      return `${datePart} ${timePart}`;
    };

    // 메일 전송했는지 유무 api연결 해야 함
    function onClickBox() {
      //navigate(`/interview-mail-yet/${index+1}`);
      navigate(`/interviewer-list/${index+1}`);
    }

    // 클릭 이벤트 버블링 막기
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      e.stopPropagation();
    };

  return (
    <>
      <S.Container>
        <S.Box onClick={onClickBox}>
          <S.Title>{title}</S.Title>
          <S.Details>
            <S.DetailItem>
              <S.Icon size={16}>
                <img
                  src={process.env.PUBLIC_URL + '/images/ResultIcon1.svg'}
                  alt="Icon 1"
                />
              </S.Icon>
              {startDate} - {endDate}
            </S.DetailItem>
            <S.DetailItem>
              <S.Icon size={16}>
                <img
                  src={process.env.PUBLIC_URL + '/images/ResultIcon2.svg'}
                  alt="Icon 2"
                />
              </S.Icon>
              15분
            </S.DetailItem>
            <S.DetailItem>
              <S.Icon size={16}>
                <img
                  src={process.env.PUBLIC_URL + '/images/ResultIcon3.svg'}
                  alt="Icon 3"
                />
              </S.Icon>
              {people}명
            </S.DetailItem>
          </S.Details>
          <S.ButtonWrapper>
            <S.DeleteButton onClick={(e) => { openModal(); stopPropagation(e);}}>삭제</S.DeleteButton>
            <S.EditButton onClick={(e) => { handleCreateButtonClick(); stopPropagation(e); }}>수정</S.EditButton>
          </S.ButtonWrapper>
        </S.Box>
      </S.Container>
      {isModalOpen && <Modal closeModal={closeModal} />} {/* Modal 컴포넌트 */}
    </>
  );
}

export default Result;
