import React from 'react'
import { motion } from 'framer-motion';
import PreTestMain from '../../components/preTest/preTestMain/PreTestMain'
import Usage from '../../components/preTest/usage/Usage';
import * as U from './PreTest.syle';
import { useNavigate, useParams } from 'react-router-dom';

function PreTest() {

  const animationProps1 = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false },
    transition: {
      ease: 'easeInOut',
      duration: 2,
      x: { duration: 1 },
    }
  };

  const animationProps2 = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false },
    transition: {
      ease: 'easeInOut',
      duration: 2,
      x: { duration: 1 },
    }
  };

  // 면접실 버튼 클릭 시
  let {groupId, interviewerId} = useParams();
  const navigate = useNavigate();
  const onClickStartBtn = () => {
    navigate(`/interview-setting/${groupId}/${interviewerId}`);
  }

  return (
    <div>
      <PreTestMain />

      <U.Header>
        <U.HeaderText1>사용 방법</U.HeaderText1>
        <U.HeaderText2>AIT 면접 진행 과정 및 사용 설명</U.HeaderText2>
        <U.HeaderText3>테스트 시작 2분 전까지 [본 테스트 입실]에 접속하여 응시 설정을 해주세요. <br/>
        안내된 시간 이후 접속 시 응시가 불가하오니 반드시 시간을 준수해주시기 바랍니다.<br/>
        면접 진행 과정 및 사용 설명 미숙지로 인한 불이익은 책임지지 않습니다.</U.HeaderText3>
      </U.Header>

      <motion.div {...animationProps1}>
        <Usage 
          number="1"
          title="사전 환경 점검하기"/>
      </motion.div>
      <motion.div {...animationProps2}>
        <Usage 
          number="2"
          title="면접 진행하기"/>
      </motion.div>
      <motion.div {...animationProps1}>
        <Usage 
          number="3"
          title="면접 종료하기"/>
      </motion.div>
      <U.StartBtn onClick={onClickStartBtn}>면접실 입장</U.StartBtn>
    </div>
  )
}

export default PreTest