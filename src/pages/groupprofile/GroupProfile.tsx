import React, { useEffect, useState } from 'react';
import * as G from './GroupProfile.style';
import GroupProfileHeader from '../../components/groupProfile/header/GroupProfileHeader';
import axios from 'axios';
import Result from '../../components/groupProfile/result/Result';

function GroupProfile() {

  const [data, setData] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {

    const fetchData = () => {
      axios({
        url: '/interviewGroup/readAll',
        method: 'get',
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
        }) .catch((error) => {
        console.log('실패');
        console.error('AxiosError:', error);
      }); 
    };

    fetchData(); // 함수 호출
  }, []);

  return (
    <G.Container>
      <GroupProfileHeader />
      {data.length === 0 ? (
      <G.Main>
        <G.MessageWrapper>
          <G.Icon size={7}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon1.svg'} alt="Icon 1" />
          </G.Icon>
          <G.Icon size={12}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon2.svg'} alt="Icon 2" />
          </G.Icon>
          <G.Icon size={20}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon3.svg'} alt="Icon 3" />
          </G.Icon>
          <G.Message>진행 중인 면접이 없습니다</G.Message>
          <G.Icon size={20}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon3.svg'} alt="Icon 3" />
          </G.Icon>
          <G.Icon size={12}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon2.svg'} alt="Icon 2" />
          </G.Icon>
          <G.Icon size={7}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon1.svg'} alt="Icon 1" />
          </G.Icon>
        </G.MessageWrapper>
      </G.Main>):(
        <G.ResultMain>
          {data.map((item, index) => (
            <Result key={index} />
          ))}
        </G.ResultMain>
      )}
    </G.Container>
  );
}

export default GroupProfile;
