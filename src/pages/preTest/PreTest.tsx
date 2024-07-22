import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PreTestMain from '../../components/preTest/preTestMain/PreTestMain';
import Usage from '../../components/preTest/usage/Usage';
import * as U from './PreTest.syle';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { interviewEndAtom, interviewStartAtom } from '../../recoil/groupProfileAtoms';
import axios from 'axios';

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

  let { groupId, interviewerId } = useParams();
  const navigate = useNavigate();

  const start_date = useRecoilValue(interviewStartAtom);
  const end_date = useRecoilValue(interviewEndAtom);

  const [interviewType, setInterviewType] = useState<string>('kor'); // 기본값을 'kor'으로 설정

  useEffect(() => {
    const fetchInterviewData = async () => {
      try {
        const response = await axios.get(`/interviewGroup/readOne/${groupId}`);
        const data = response.data;
        setInterviewType(data.language); // 데이터가 'eng'일 경우 업데이트
      } catch (error) {
        console.error('Error fetching interview data:', error);
      }
    };

    fetchInterviewData();
  }, [groupId]);

  const onClickStartBtn = () => {
    const now = new Date().getTime();
    const startDate = new Date(start_date).getTime();
    const endDate = new Date(end_date).getTime();

    if (now < startDate) {
      alert(interviewType === 'kor' ? '면접 시작일 이후부터 면접실 입장이 가능합니다.' : 'You can enter the interview room after the interview start date.');
      return;
    }

    if (now > endDate) {
      alert(interviewType === 'kor' ? '면접이 종료되어 면접실 입장이 불가능합니다.' : 'The interview has ended, so you cannot enter the interview room.');
      return;
    }

    if (now > startDate && now < endDate) {
      navigate(`/interview-setting/${groupId}/${interviewerId}`);
    }
  };

  return (
    <div>
      <PreTestMain />

      {interviewType === 'kor' ? (
        <>
          <U.Header>
            <U.HeaderText1>사용 방법</U.HeaderText1>
            <U.HeaderText2>AIT 면접 진행 과정 및 사용 설명</U.HeaderText2>
            <U.HeaderText3>
              테스트 시작 2분 전까지 [본 테스트 입실]에 접속하여 응시 설정을 해주세요. <br />
              안내된 시간 이후 접속 시 응시가 불가하오니 반드시 시간을 준수해주시기 바랍니다.<br />
              면접 진행 과정 및 사용 설명 미숙지로 인한 불이익은 책임지지 않습니다.
            </U.HeaderText3>
          </U.Header>
          <Usage
            number="1"
            title="사전 환경 점검하기"
            content={`• 사전 환경 점검은 1. 안내사항, 2. 약관 동의, 3. 본인 확인 사진 촬영, 4. 카메라, 마이크 테스트, 5. 점검 완료로 총 5단계로 진행됩니다.<br/><br/>
                      • 다음 버튼 클릭 시 다음 단계로 넘어가고, 이전 버튼 클릭 시 이전 환경 설정 화면으로 돌아가 다시 설정 가능합니다.<br/><br/>
                      • <2. 약관 동의>는 반드시 전체 동의를 해야 다음 단계로 넘어갈 수 있습니다.<br/><br/>
                      • <3. 본인 확인 사진 촬영>은 재촬영이 가능하며 반드시 촬영 완료 후 다음 단계로 넘어갈 수 있습니다.<br/><br/>
                      • <4. 카메라, 마이크 테스트 활성화 화면>에서 기기 활성화를 위한 팝업이 뜨면 허용을 상태를 변경 후, 카메라 마이크 테스트를 완료 해야 다음 단계로 넘어갈 수 있습니다.<br/><br/>
                      • <5. 점검 완료 화면>에서 시작 버튼을 클릭하면 바로 면접 시작 화면으로 넘어갑니다.
            `}
            imgUrl={process.env.PUBLIC_URL + '/images/Pretest1.svg'}
          />

          <Usage
            number="2"
            title="면접 진행하기"
            content={`• "안녕하세요. 반갑습니다!" 문구 출력 후 자기소개부터 면접이 시작됩니다.<br/><br/>
                      • 면접 진행은 질문이 출력되고 20초의 준비시간이 끝나면 1분동안 답변 가능한 시간이 주어집니다. <br/><br/>
                      • 한 질문에 대해서는 1분 동안만 답변이 가능하고, 1분이 지나면 다음 질문이 출력됩니다.<br/><br/>
                      • 20초의 준비시간 타이머가 끝난 후 답변을 시작해 주세요.<br/><br/>
                      • 면접이 진행되는 동안 새로고침 버튼 등의 클릭을 주의해 주세요.
            `}
            imgUrl={process.env.PUBLIC_URL + '/images/Pretest1.svg'}
          />

          <Usage
            number="3"
            title="면접 종료하기"
            content={`• 마지막 질문에 대한 답변이 종료되면 자동으로 면접이 종료됩니다.<br/><br/>
                      • 면접 종료 창이 나오면 창을 닫아 종료해 주세요.<br/><br/>
                      • 면접 종료 창이 끝날 때까지 다른 화면의 이동, 클릭 등을 주의해 주세요.<br/><br/>
                      • 면접 시스템과 관련된 문의는 aitech0311@gmail.com로 문의해 주세요.<br/><br/>
                      • 지원자의 불찰로 인한 면접 종료에 대한 불이익에 대해서는 책임지지 않습니다.<br/><br/>
            `}
            imgUrl={process.env.PUBLIC_URL + '/images/Pretest3.svg'}
          />
        </>
      ) : (
        <>
          <U.Header>
            <U.HeaderText1>How to Use</U.HeaderText1>
            <U.HeaderText2>AIT Interview Process and Instructions</U.HeaderText2>
            <U.HeaderText3>
              Please access [Test Room] at least 2 minutes before the test starts to set up for the interview. <br />
              You will not be able to take the test if you access it after the scheduled time, so please adhere to the time strictly.<br />
              We are not responsible for any disadvantages caused by not following the interview process and instructions.
            </U.HeaderText3>
          </U.Header>
          <Usage
            number="1"
            title="Pre-test Environment Check"
            content={`• The pre-test environment check consists of 5 steps: 1. Instructions, 2. Agreement, 3. Identity Verification Photo, 4. Camera and Microphone Test, 5. Completion.<br/><br/>
                      • Click the Next button to proceed to the next step, and click the Previous button to go back to the previous environment setting screen.<br/><br/>
                      • You must agree to all the terms in <2. Agreement> to proceed to the next step.<br/><br/>
                      • You can retake the photo in <3. Identity Verification Photo>, and you must complete the photo before proceeding to the next step.<br/><br/>
                      • In the <4. Camera and Microphone Test Activation Screen>, if a popup appears for device activation, change the status to allow, and complete the camera and microphone test before proceeding to the next step.<br/><br/>
                      • On the <5. Completion Screen>, click the Start button to go directly to the interview start screen.
            `}
            imgUrl={process.env.PUBLIC_URL + '/images/Pretest1.svg'}
          />

          <Usage
            number="2"
            title="Conducting the Interview"
            content={`• The interview will start with the phrase "Hello, nice to meet you!" and then proceed with the self-introduction.<br/><br/>
                      • The interview process involves displaying a question, followed by a 20-second preparation time, and then you will have 1 minute to answer.<br/><br/>
                      • You can only answer each question for 1 minute, and after 1 minute, the next question will be displayed.<br/><br/>
                      • Please start your answer after the 20-second preparation timer ends.<br/><br/>
                      • During the interview, please avoid clicking the refresh button, etc.
            `}
            imgUrl={process.env.PUBLIC_URL + '/images/Pretest1.svg'}
          />

          <Usage
            number="3"
            title="Ending the Interview"
            content={`• The interview will automatically end after the last question is answered.<br/><br/>
                      • When the interview end screen appears, close the window to finish.<br/><br/>
                      • Until the interview end screen finishes, avoid moving to other screens or clicking anything.<br/><br/>
                      • For any inquiries related to the interview system, please contact aitech0311@gmail.com.<br/><br/>
                      • We are not responsible for any disadvantages caused by the applicant's negligence in ending the interview.<br/><br/>
            `}
            imgUrl={process.env.PUBLIC_URL + '/images/Pretest3.svg'}
          />
        </>
      )}

      <U.StartBtn onClick={onClickStartBtn}>
        {interviewType === 'kor' ? '면접실 입장' : 'Enter the Interview Room'}
      </U.StartBtn>
    </div>
  );
}

export default PreTest;