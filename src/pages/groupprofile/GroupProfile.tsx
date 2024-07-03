import React from 'react';
import * as G from './GroupProfile.style';
import GroupProfileHeader from '../../components/groupprofile/GroupProfileHeader';

function GroupProfile() {

  return (
    <G.Container>
      <GroupProfileHeader />
      <G.Main>
        <G.MessageWrapper>
          <G.Icon size={10}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon1.svg'} alt="Icon 1" />
          </G.Icon>
          <G.Icon size={20}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon2.svg'} alt="Icon 2" />
          </G.Icon>
          <G.Icon size={30}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon3.svg'} alt="Icon 3" />
          </G.Icon>
          <G.Message>진행 중인 면접이 없습니다</G.Message>
          <G.Icon size={30}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon3.svg'} alt="Icon 3" />
          </G.Icon>
          <G.Icon size={20}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon2.svg'} alt="Icon 2" />
          </G.Icon>
          <G.Icon size={10}>
            <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon1.svg'} alt="Icon 1" />
          </G.Icon>
        </G.MessageWrapper>
      </G.Main>
    </G.Container>
  );
}

export default GroupProfile;
