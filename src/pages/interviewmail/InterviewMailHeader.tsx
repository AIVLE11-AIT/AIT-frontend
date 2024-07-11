import React, { useEffect, useState } from 'react';
import * as I from './InterviewMailHeader.style';
import axios from 'axios';

function InterviewMailHeader() {

    const [title, setTitle] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [people, setPeople] = useState<number>(0);

    // Function to format date from 'YYYY-MM-DDTHH:mm:ss' to 'YYYY-MM-DD HH:mm:ss'
    const formatDate = (dateString: string) => {
      const [datePart, timePart] = dateString.split('T');
      return `${datePart} ${timePart}`;
    };

  useEffect(() => {
    axios({
      url: `/interviewGroup/${1}`,
      method: 'get',
      headers: {
        Authorization: sessionStorage.getItem('isLogin'),
      },
    })
      .then((response) => {
        setTitle(response.data.name);
        setStartDate(formatDate(response.data.start_date));
        setEndDate(formatDate(response.data.end_date));
        setPeople(response.data.interviewers.length);
      })
      .catch((error) => {
        console.log('실패');
        console.error('AxiosError:', error);
      });
  }, [1]);

  return (
    <I.HeaderContainer>
      <I.Title>{title}</I.Title>
      <I.DetailsContainer>
        <I.DetailItem>
          <I.Icon size={16}>
           <img src={process.env.PUBLIC_URL + '/images/ResultIcon1.svg'} alt="Icon 1" />
          </I.Icon>
          {startDate} -<br/>{endDate}
        </I.DetailItem>
        <I.DetailItem>
          <I.Icon size={16}>
           <img src={process.env.PUBLIC_URL + '/images/ResultIcon2.svg'} alt="Icon 2" />
          </I.Icon>
          15분
        </I.DetailItem>
        <I.DetailItem>
          <I.Icon size={16}>
           <img src={process.env.PUBLIC_URL + '/images/ResultIcon3.svg'} alt="Icon 3" />
          </I.Icon>
          {people}명
        </I.DetailItem>
      </I.DetailsContainer>
    </I.HeaderContainer>
  );
}

export default InterviewMailHeader;
