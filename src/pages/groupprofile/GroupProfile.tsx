import React, { useEffect, useState } from 'react';
import * as G from './GroupProfile.style';
import GroupProfileHeader from '../../components/groupProfile/header/GroupProfileHeader';
import axios from 'axios';
import Result from '../../components/groupProfile/result/Result';
import { useRecoilState } from 'recoil';
import { CompanyAtom } from '../../recoil/userInfoAtoms';

// 인터뷰 그룹의 데이터 구조를 정의
interface InterviewGroup {
  id: number;
  // 다른 필요한 필드들...
}

function GroupProfile() {
  // data 상태 변수의 타입을 명시적으로 설정
  const [data, setData] = useState<InterviewGroup[]>([]); // 면접 리스트

  useEffect(() => {
    axios({
      url: '/interviewGroup/readAll',
      method: 'get',
      headers: {
        Authorization: sessionStorage.getItem('isLogin'),
      },
    })
    .then((response) => {
      setData(response.data);
      //console.log(response.data);
    })
    .catch((error) => {
      console.log('실패');
      console.error('면접 그룹 조회 실패:', error);
    });
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
        </G.Main>
      ) : (
        <G.ResultMain>
          {data.map((item) => (
            <Result index={item.id} />
          ))}
        </G.ResultMain>
      )}
    </G.Container>
  );
}

export default GroupProfile;
