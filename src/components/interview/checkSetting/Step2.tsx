import React, { useEffect, useState } from 'react';
import * as S from './Step2.style';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// recoil
import { Agree1Atom, Agree2Atom, Agree3Atom } from '../../../recoil/settingAtomes';
import { useRecoilState } from 'recoil';

function Step2() {
  const { groupId } = useParams();
  const [interviewType, setInterviewType] = useState<string>('kor'); // 기본값을 'kor'으로 설정

  const [check1, setCheck1] = useRecoilState(Agree1Atom);
  const [check2, setCheck2] = useRecoilState(Agree2Atom);
  const [check3, setCheck3] = useRecoilState(Agree3Atom);

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

  // 전체 동의 버튼 클릭 시
  const onClickCheck1 = () => {
    if (check1 === false) {
      setCheck1(true);
      setCheck2(true);
      setCheck3(true);
    } else {
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
    }
  };

  const onClickCheck2 = () => {
    setCheck2(!check2);
    if (check3 === true && check2 === false) {
      setCheck1(true);
    } else {
      setCheck1(false);
    }
  };

  const onClickCheck3 = () => {
    setCheck3(!check3);
    if (check3 === false && check2 === true) {
      setCheck1(true);
    } else {
      setCheck1(false);
    }
  };

  return (
    <div>
      {interviewType === 'kor' ? (
        <div>
          <S.StepHeader>이용 동의</S.StepHeader>
          <S.StepMain>
            <S.AgreeBox>
              <S.CheckBox checked={check1} onChange={onClickCheck1} />필수 약관에 모두 동의합니다.
            </S.AgreeBox>

            <S.Step2Info>개인정보 수집 및 이용 동의</S.Step2Info>
            <S.AgreeContentBox>
              <S.Content size="14px" weight="500">
                AIT(이하 "회사"라 합니다)는 AIT 사이트 이용을 위해 필요한 최소한의 범위로 개인정보를 수집합니다.<br/>
                회사에서 제공하는 서비스 유형에 따라 다음과 같이 개인정보를 수집, 이용, 보유 및 파기하고 있습니다.
              </S.Content>
              <S.Content size="15px" weight="600">[항목]</S.Content>
              <S.Content size="14px" weight="500">
                이름, 생년월일, 이메일, 자기소개서, 사진, 면접영상, 답변내용
              </S.Content>
              <S.Content size="15px" weight="600">[수집목적]</S.Content>
              <S.Content size="14px" weight="500">
                AIT 서비스 이용시의 본인 확인 및 평가 기업 제공	
              </S.Content>
              <S.Content size="15px" weight="600">[보유 및 이용 기간]</S.Content>
              <S.Content size="14px" weight="500">
              1) 회사는 법령에 따른 개인정보 보유∙이용기간 또는 이용자로부터 개인정보를 수집 시에 동의 받은 개인정보 보유∙이용기간 내에서 개인정보를 처리하며, 개인정보의 처리 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
              2) 개인정보 처리 및 보유 기간은 다음과 같으며, 아래 각 항목에 대하여 이용자가 명시적으로 파기 요청을 하는 경우 지체 없이 파기합니다.
              - 면접 서비스 종료시로부터 30일 후 즉시 파기<br/> 
              - 면접자가 개인정보에 대한 권리 행사를 통해 수집 및 이용 동의의 철회 또는 개인정보 삭제를 요청하는 경우
              </S.Content>
              <S.Content size="15px" weight="600">[동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용]</S.Content>
              <S.Content size="14px" weight="500">
              이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 필수항목의 수집 및 이용에 대해 동의하지 않을 경우에는 AIT 서비스를 이용하실 수 없습니다.
              </S.Content>
            </S.AgreeContentBox>
            <S.AgreeBox>
              <S.CheckBox checked={check2} onChange={onClickCheck2} />동의합니다.
            </S.AgreeBox>

            <S.Step2Info>개인정보 제3자 제공 동의</S.Step2Info>
            <S.AgreeContentBox>
              <S.Content size="14px" weight="500">
                AIT(이하 "회사"라 합니다) 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.
              </S.Content>
              <S.Content size="15px" weight="600">[개인정보를 제공받는 자]</S.Content>
              <S.Content size="14px" weight="500">
                OpenAI (ChatGPT-4o)
              </S.Content>
              <S.Content size="15px" weight="600">[제공하는 목적]</S.Content>
              <S.Content size="14px" weight="500">
                1)	자소서 기반의 면접 질문 생성
                2)	면접 답변 평가
              </S.Content>
              <S.Content size="15px" weight="600">[제공하는 항목]</S.Content>
              <S.Content size="14px" weight="500">
                면접자의 직무, 자기소개서, 답변내용
              </S.Content>
              <S.Content size="15px" weight="600">[개인정보의 보유 및 이용기간]</S.Content>
              <S.Content size="14px" weight="500">
                OpenAI의 정책에 따라 API 입력 및 출력 데이터는 최대 30일 동안 보유되며, 그 이후에는 삭제됩니다.<br/>
                필요에 따라 Zero Data Retention (ZDR) 정책을 적용할 수 있습니다.
              </S.Content>
              <S.Content size="15px" weight="600">[이용자는 회사의 개인정보 제3자 제공에 대한 동의를 거부할 권리가 있습니다.]</S.Content>
              <S.Content size="14px" weight="500">
                다만, 개인정보의 제3자 제공 동의를 거부할 경우 AIT 서비스를 이용하실 수 없습니다.
              </S.Content>
            </S.AgreeContentBox>
            <S.AgreeBox>
              <S.CheckBox checked={check3} onChange={onClickCheck3} />동의합니다.
            </S.AgreeBox>
          </S.StepMain>
        </div>
      ) : (
        <div>
          <S.StepHeader>Agreement</S.StepHeader>
          <S.StepMain>
            <S.AgreeBox>
              <S.CheckBox checked={check1} onChange={onClickCheck1} />I agree to all the required terms.
            </S.AgreeBox>

            <S.Step2Info>Applicant Pledge</S.Step2Info>
            <S.AgreeContentBox>
              <S.Content size="15px" weight="600">[Agreement on Protection and Non-disclosure of Interview Copyright]</S.Content>
              <S.Content size="14px" weight="500">
                This interview question is protected by copyright, and the company prohibits the reproduction, public transmission,<br />
                distribution, or creation of secondary works without consent. Disclosing or transmitting interview information to others<br />
                without the company's consent constitutes an infringement of the company's property, and those who infringe the company's<br />
                property may be subject to imprisonment for up to 5 years or a fine of up to 50 million won under the Copyright Act.
              </S.Content>
              <S.Content size="15px" weight="600">[Agreement on Cheating Handling]</S.Content>
              <S.Content size="14px" weight="500">
                If clear cheating as defined by the company is confirmed during the interview, measures such as disqualification<br />
                or denial of interview may be taken, and I agree to this.
              </S.Content>
            </S.AgreeContentBox>
            <S.AgreeBox>
              <S.CheckBox checked={check2} onChange={onClickCheck2} />I agree.
            </S.AgreeBox>

            <S.Step2Info>Consent to Collection and Use of Personal Information</S.Step2Info>
            <S.AgreeContentBox>
              <S.Content size="15px" weight="600">[Applicant Monitoring for Fair Interview]</S.Content>
              <S.Content size="14px" weight="500">
                To ensure a fair interview and AI analysis of the interviewee, we may retain and use computer screen recordings and<br />
                webcam videos for 30 days after the interview ends.
              </S.Content>
            </S.AgreeContentBox>
            <S.AgreeBox>
              <S.CheckBox checked={check3} onChange={onClickCheck3} />I agree.
            </S.AgreeBox>
          </S.StepMain>
        </div>
      )}
    </div>
  );
}

export default Step2;
