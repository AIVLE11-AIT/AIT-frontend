import React from 'react'
import * as I from './Intro.style';
import Graph from '../../components/intro/Graph';
import Process from '../../components/intro/Process';
import People from '../../components/intro/People';

function Intro() {
  return (
    <div>
        <I.IntroHeader>
            <I.HeaderContentContainer>
                우리 회사 맞춤형 인재 채용,&nbsp;
                <div style={{ color: '#696CEA' }}>AIT</div>를 통해 시작해 보세요.
            </I.HeaderContentContainer>
            <I.HeaderContentContainer>
                <I.HeaderContentBox>
                    <I.ContentIcon>📊</I.ContentIcon>
                    <I.ContentTitle>객관적인 AI면접 결과 분석</I.ContentTitle>
                    <I.ContentText>행동, 음성, 답변 분석을 통해 면접을 객관적으로<br/>정확히 평가하는 효과를 느껴보세요.</I.ContentText>
                    <I.ContentLine></I.ContentLine>
                </I.HeaderContentBox>
                <I.HeaderContentBox>
                    <I.ContentIcon>💸</I.ContentIcon>
                    <I.ContentTitle>면접 비용 절감 효과</I.ContentTitle>
                    <I.ContentText>비대면 면접을 통해<br/>면접 과정에 지출되는 비용을 절약해 보세요.</I.ContentText>
                    <I.ContentLine></I.ContentLine>
                </I.HeaderContentBox>
                <I.HeaderContentBox>
                    <I.ContentIcon>👥</I.ContentIcon>
                    <I.ContentTitle>회사 맞춤형 인재 채용</I.ContentTitle>
                    <I.ContentText>면접을 직접 만들어<br/>우리 회사만의 맞춤형 인재를 채용해 보세요.</I.ContentText>
                    <I.ContentLine></I.ContentLine>
                </I.HeaderContentBox>
            </I.HeaderContentContainer>
        </I.IntroHeader>

        <I.IntroHeader>
            <I.HeaderContentContainer>
                AIT와 타사는 어떤,&nbsp;
                <div style={{ color: '#696CEA' }}>차이점</div>이 있을까요?
            </I.HeaderContentContainer>
            <I.HeaderContentContainer>
                <I.GraphContainer>
                    <Graph/>
                </I.GraphContainer>
            </I.HeaderContentContainer>
        </I.IntroHeader>

        <I.IntroHeader>
            <I.HeaderContentContainer>
                AIT의&nbsp;<div style={{ color: '#696CEA'}}>프로세스</div>
            </I.HeaderContentContainer>
            <Process/>
        </I.IntroHeader>

        <I.IntroHeader>
            <I.HeaderContentContainer>
                AIT를&nbsp;<div style={{ color: '#696CEA'}}>만든 사람들</div>
            </I.HeaderContentContainer>
            <People/>
        </I.IntroHeader>
    </div>
  )
}

export default Intro