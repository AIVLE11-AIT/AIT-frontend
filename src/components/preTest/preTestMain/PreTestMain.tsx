import React, { useEffect, useState } from 'react';
import * as P from './PreTestMain.style';
import Timer from './Timer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PreTestMain() {

    let {groupId, interviewerId} = useParams();

    const [title, setTitle] = useState('');

    useEffect(() => {
        axios({
          url: `/interviewGroup/${groupId}/interviewer/${interviewerId}`,
          method: 'get',
          headers: {
            Authorization: sessionStorage.getItem('isLogin'),
          },
        })
          .then((response) => {
            setTitle(response.data.name);
            // Format start date and end date here
            // setStartDate(formatDate(response.data.start_date));
            // setEndDate(formatDate(response.data.end_date));
            // setPeople(response.data.interviewers.length);
            //console.log(response.data);
          })
          .catch((error) => {
            console.log('실패');
            console.error('면접 그룹 개별 조회 실패: ', error);
          });
    }, []);
  return (
    
    <div>
        <P.HeaderDiv>
            <P.Logo src={process.env.PUBLIC_URL + '/images/Logo.svg'}></P.Logo>
        </P.HeaderDiv>

        <P.PreTestMainContainer>
            <P.PreTestName>[KT] AI 면접 평가</P.PreTestName>
            <P.PreTestTitle>이미지(dlalwl723@naver.com) 님,<br/> 안내 유의사항을 꼭 확인하세요.</P.PreTestTitle>
            <P.DateText>면접 가능 일시<br/>2024년 07월 22일 10:00:00 ~ 2024년 07월 24일 17:00:00</P.DateText>
            <P.DateContainer>
                <Timer/>
            </P.DateContainer>
        </P.PreTestMainContainer>
        <P.DownContainer>
            <P.DownIconBox><P.DownIcon src={process.env.PUBLIC_URL + '/images/DownArrow.svg'}/></P.DownIconBox>
            <P.DownIconBox><P.DownIcon src={process.env.PUBLIC_URL + '/images/DownArrow.svg'}/></P.DownIconBox>
        </P.DownContainer>
    </div>
  )
}

export default PreTestMain