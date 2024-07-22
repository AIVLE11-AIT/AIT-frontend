import React from 'react';
import { motion } from 'framer-motion';
import * as H from './Home.style';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Footer from '../../components/footer/Footer';

function Home() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if(sessionStorage.getItem('isLogin') !== null)
            navigate('/group-profile');
        else
            navigate('./login');
    };

    const animationProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false },
        transition: {
            ease: 'easeInOut',
            duration: 1.5,
            y: { duration: 1 },
        }
    };

    return (
        <H.MainDiv>
            <H.Container>
                <H.Header>
                        <H.SubTitle1>기업 맞춤형 인재를 뽑기 위한 단 하나의 솔루션</H.SubTitle1>
                        <H.Title>
                        <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    wrapperClassName: 'typewriter-wrapper',
                                    cursorClassName: 'typewriter-cursor'
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<span>스마트한 </span>')
                                        .pauseFor(300)
                                        .typeString('<span style="color: #696CEA;">AI면접</span>')
                                        .pauseFor(100)
                                        .typeString('<span>의 </span>')
                                        .pauseFor(500)
                                        .typeString('<span>시작</span>')
                                        .start();
                                }}
                            />
                        </H.Title>
                    <H.SubTitle2>
                        각 기업이 원하는 평가 비율을 직접 선택하여
                        <br />
                        맞춤형으로 지원자의 면접 평가 결과를 제공합니다.
                    </H.SubTitle2>
                    <H.Button1 onClick={handleButtonClick}>Get Start</H.Button1>
                    <H.ResultContainer>
                        <img src={process.env.PUBLIC_URL + '/images/MainImage.svg'}></img>
                    </H.ResultContainer>
                </H.Header>
                <H.Section1>
                    <H.InnerContainer>
                            <H.SectionTitle1>
                                <H.SectionTitlePart1>이런 고민을 하고 있다면,<br /></H.SectionTitlePart1>
                                <H.SectionTitlePart2>AIT</H.SectionTitlePart2>
                                <H.SectionTitlePart1>를 시작하세요!</H.SectionTitlePart1>
                            </H.SectionTitle1>
                            <H.Description>
                                우리 회사 맞춤형 인재를 뽑고 싶다.
                                <br />AI 면접 결과 분석에 대한 결과에 신뢰성이 부족하다.
                                <br />이미 고정된 평가 비율과 다른 평가 비율로 결과를 보고 싶다.
                                <br />잘 정리된 시각화 자료로 지원자의 면접 결과를 확인하고 싶다.
                            </H.Description>
                    </H.InnerContainer>
                    <H.BoxContainer>
                        <motion.div {...animationProps}>
                            <H.Box>
                                <H.BoxComment1>
                                    <H.CommentIcon>😕</H.CommentIcon>
                                    <H.CommentText>인공지능 면접 도입에 대해 신뢰도가<br/>부족해 도입이 망설여져요.</H.CommentText>
                                </H.BoxComment1>
                                <H.BoxComment2>
                                    <H.CommentIcon>😟</H.CommentIcon>
                                    <H.CommentText>면접 과정에서 발생하는 시간, 비용이<br/>너무 많이 소모돼요.</H.CommentText>
                                </H.BoxComment2>
                                <H.BoxComment3>
                                    <H.CommentIcon>😊</H.CommentIcon>
                                    <H.CommentText>우리 회사 맞춤형 인재를 채용하고<br/>싶어요.</H.CommentText>
                                </H.BoxComment3>
                            </H.Box>
                        </motion.div>
                    </H.BoxContainer>
                </H.Section1>

                <H.Section2>
                    <H.SectionTitle2>평가 비율을 직접 선택해 면접 분석 결과를 받아보세요.</H.SectionTitle2>
                    <H.SectionSubTitle2>
                        <H.SectionSubTitle2Part1>AI면접에서 평가 비율이 한 쪽으로 치중되는 문제를</H.SectionSubTitle2Part1>
                        <br />
                        <H.SectionSubTitle2Part2>AIT</H.SectionSubTitle2Part2>
                        <H.SectionSubTitle2Part1>가 맞춤형 평가 비율로 해결해 드려요.</H.SectionSubTitle2Part1>
                    </H.SectionSubTitle2>
                    <H.Features>
                        <motion.div {...animationProps}>
                            <H.Feature>
                                <H.FeatureTitle>답변 분석</H.FeatureTitle>
                                <H.FeatureDescription>감정 상태, 우수 답변과의 유사성, 답변의 적합성을 평가합니다. 감정 상태는 진정성과 태도를, 우수 답변과의 유사성은 답변의 질을, 답변의 적합성은 타당성과 관련성을 판단합니다.</H.FeatureDescription>
                                <H.FeatureImage>📄</H.FeatureImage>
                            </H.Feature>
                        </motion.div>
                        <motion.div {...animationProps}>
                            <H.Feature>
                                <H.FeatureTitle>음성 분석</H.FeatureTitle>
                                <H.FeatureDescription>목소리 크기, 발화 속도, 습관어 사용을 평가합니다. 목소리 크기는 자신감과 명료성을, 발화 속도는 긴장도와 의사소통 능력을, 습관어 사용은 신뢰성과 준비도를 판단합니다.</H.FeatureDescription>
                                <H.FeatureImage>🗣️</H.FeatureImage>
                            </H.Feature>
                        </motion.div>
                        <motion.div {...animationProps}>
                            <H.Feature>
                                <H.FeatureTitle>행동 분석</H.FeatureTitle>
                                <H.FeatureDescription>시선 처리, 얼굴 위치, 감정 분석, 몸 위치, 손 위치를 평가합니다. 시선 처리는 주의력과 집중도를, 얼굴 위치는 자신감과 태도를, 감정 분석은 감정 상태를, 몸 위치와 손 위치는 자세와 표현력을 판단합니다.</H.FeatureDescription>
                                <H.FeatureImage>👋🏻</H.FeatureImage>
                            </H.Feature>
                        </motion.div>
                    </H.Features>
                </H.Section2>
            </H.Container>
            <H.Container2>
                <Footer/>
            </H.Container2>
        </H.MainDiv>
    );
}

export default Home;
