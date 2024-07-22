import React, { useEffect, useState } from 'react';
import * as P from './PreTestMain.style';
import Timer from './Timer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { interviewEndAtom, interviewStartAtom } from '../../../recoil/groupProfileAtoms';

interface GroupInfo {
  company: string;
  name: string;
  start_date: string;
  end_date: string;
  language: string;
}

interface InterviewerInfo {
  name: string;
  email: string;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  return `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;
};

const formatDateEnglish = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

function PreTestMain() {
  let { groupId, interviewerId } = useParams();

  const [groupInfo, setGroupInfo] = useState<GroupInfo | undefined>(undefined);
  const [interviewerInfo, setInterviewerInfo] = useState<InterviewerInfo | undefined>(undefined);

  const [startDate, setStartDate] = useRecoilState(interviewStartAtom);
  const [endDate, setEndDate] = useRecoilState(interviewEndAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [groupInfoResponse, interviewerResponse] = await Promise.all([
          axios.get(`/interviewGroup/readOne/${groupId}`),
          axios.get(`/interviewGroup/${groupId}/interviewer/readOne/${interviewerId}`),
        ]);

        setGroupInfo(groupInfoResponse.data);
        setInterviewerInfo(interviewerResponse.data);
        setStartDate(groupInfoResponse.data.start_date);
        setEndDate(groupInfoResponse.data.end_date);
      } catch (error) {
        console.error('AxiosError:', error);
      }
    };

    fetchData();
  }, [groupId, interviewerId]);

  return (
    <div>
      <P.HeaderDiv>
        <P.Logo src={process.env.PUBLIC_URL + '/images/Logo.svg'}></P.Logo>
      </P.HeaderDiv>

      <P.PreTestMainContainer>
        <P.PreTestName>
          {groupInfo ? `[${groupInfo.company}] ${groupInfo.name}` : ''}
        </P.PreTestName>
        <P.PreTestTitle>
          {groupInfo?.language === 'eng' ?
            `${interviewerInfo ? `${interviewerInfo.name} (${interviewerInfo.email})` : ''}, please make sure to check the instructions.` :
            `${interviewerInfo ? `${interviewerInfo.name} (${interviewerInfo.email})` : ''} 님, 안내 유의사항을 꼭 확인하세요.`}
        </P.PreTestTitle>
        <P.DateText>
          {groupInfo?.language === 'eng' ?
            `Interview Availability\n${groupInfo ? `${formatDateEnglish(groupInfo.start_date)} ~ ${formatDateEnglish(groupInfo.end_date)}` : ''}` :
            `면접 가능 일시\n${groupInfo ? `${formatDate(groupInfo.start_date)} ~ ${formatDate(groupInfo.end_date)}` : ''}`}
        </P.DateText>
        <P.DateContainer>
          <Timer language={groupInfo?.language} />
        </P.DateContainer>
      </P.PreTestMainContainer>
      <P.DownContainer>
        <P.DownIconBox><P.DownIcon src={process.env.PUBLIC_URL + '/images/DownArrow.svg'} /></P.DownIconBox>
        <P.DownIconBox><P.DownIcon src={process.env.PUBLIC_URL + '/images/DownArrow.svg'} /></P.DownIconBox>
      </P.DownContainer>
    </div>
  );
}

export default PreTestMain;
