import React from 'react';
import { motion } from 'framer-motion';
import * as H from './Home.style';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if(sessionStorage.getItem('isLogin') !== null)
            navigate('/group-profile');
        else
            navigate('./login');
    };

    const handleContactButtonClick = () => {
        navigate('/contact');
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
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: 'easeInOut', duration: 2 }}
                    >
                        <H.Title>
                            <H.TitlePart1>스마트한 </H.TitlePart1>
                            <H.TitlePart2>AI면접</H.TitlePart2>
                            <H.TitlePart1>의 시작</H.TitlePart1>
                        </H.Title>
                    </motion.div>
                    <H.SubTitle>
                        각 기업이 원하는 평가 비율을 직접 선택하여
                        <br />
                        맞춤형으로 지원자의 면접 평가 결과를 제공합니다.
                    </H.SubTitle>
                    <H.Button1 onClick={handleButtonClick}>Go Profile</H.Button1>
                    <H.Button2 onClick={handleContactButtonClick}>Contact Us</H.Button2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ease: 'easeInOut', duration: 2 }}
                    >
                        <H.ResultContainer>
                            면접 결과 시각화 화면
                        </H.ResultContainer>
                    </motion.div>
                </H.Header>
                <H.Section1>
                    <H.InnerContainer>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ ease: 'easeInOut', duration: 2 }}
                        >
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
                        </motion.div>
                    </H.InnerContainer>
                    <H.BoxContainer>
                        <motion.div {...animationProps}>
                            <H.Box>
                                <H.BoxComment1>
                                    <H.CommentIcon>😕</H.CommentIcon>
                                    <H.CommentText>인공지능 면접 도입에 대해 신뢰도가<br/> 부족해 도입이 망설여져요.</H.CommentText>
                                </H.BoxComment1>
                                <H.BoxComment2>
                                    <H.CommentIcon>😟</H.CommentIcon>
                                    <H.CommentText>면접 과정에서 발생하는 시간, 비용이<br/> 너무 많이 소모돼요.</H.CommentText>
                                </H.BoxComment2>
                                <H.BoxComment3>
                                    <H.CommentIcon>😊</H.CommentIcon>
                                    <H.CommentText>우리 회사 맞춤형 인재를 채용하고<br/> 싶어요.</H.CommentText>
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
                                <H.FeatureDescription>설명</H.FeatureDescription>
                                <H.FeatureImage>📄</H.FeatureImage>
                            </H.Feature>
                        </motion.div>
                        <motion.div {...animationProps}>
                            <H.Feature>
                                <H.FeatureTitle>음성 분석</H.FeatureTitle>
                                <H.FeatureDescription>설명</H.FeatureDescription>
                                <H.FeatureImage>🗣️</H.FeatureImage>
                            </H.Feature>
                        </motion.div>
                        <motion.div {...animationProps}>
                            <H.Feature>
                                <H.FeatureTitle>행동 분석</H.FeatureTitle>
                                <H.FeatureDescription>설명</H.FeatureDescription>
                                <H.FeatureImage>👋🏻</H.FeatureImage>
                            </H.Feature>
                        </motion.div>
                    </H.Features>
                </H.Section2>
                <H.Section3>
                    <H.MiniTitle>주요기능</H.MiniTitle>
                    <H.SectionTitle3>자동으로 면접 타임테이블 생성하기</H.SectionTitle3>
                    <H.SectionSubTitle3>
                        면접 페이지를 만들고 지원자에게 링크를 공유하세요.
                        <br />
                        지원자들이 가능한 시간을 모아 최적의 면접 타임테이블을 만들어 드립니다.
                    </H.SectionSubTitle3>
                    <motion.div {...animationProps}>
                        <H.FeatureBox>
                            <H.FeatureBoxNumber1>1</H.FeatureBoxNumber1>
                            <H.FeatureBoxContent>
                                <H.FeatureBoxTitle>면접 페이지 만들기</H.FeatureBoxTitle>
                                <H.FeatureBoxDescription>
                                    • 구글 혹은 이메일로 그룹 계정을 생성해 주세요.
                                    <br />
                                    <br />• 그룹 프로필에서 ‘+ 만들기’ 버튼을 눌러<br />면접 페이지를 개설할 수 있습니다.
                                    <br />
                                    <br />• 면접 정보와 면접을 진행할 시간대를 입력하면<br />페이지 개설이 완료됩니다.
                                </H.FeatureBoxDescription>
                            </H.FeatureBoxContent>
                            <H.FeatureBoxImage src="/images/HomeIntroFunction1.svg" alt="면접 페이지" />
                        </H.FeatureBox>
                    </motion.div>
                    <motion.div {...animationProps}>
                        <H.FeatureBox>
                            <H.FeatureBoxNumber2>2</H.FeatureBoxNumber2>
                            <H.FeatureBoxContent>
                                <H.FeatureBoxTitle>지원자에게 링크 공유하기</H.FeatureBoxTitle>
                                <H.FeatureBoxDescription>
                                    • 그룹 프로필에서 ‘공유' 버튼을 누르면<br />면접 페이지 링크가 복사됩니다.
                                    <br />
                                    <br />• 면접 전형 지원자에게 링크를 공유하여<br />가능한 시간 입력을 요청하세요.
                                    <br />
                                    <br />• 면접 페이지에서 지원자 입력 현황을<br />확인할 수 있습니다.
                                </H.FeatureBoxDescription>
                            </H.FeatureBoxContent>
                            <H.FeatureBoxImage src="/images/HomeIntroFunction2.svg" alt="링크 공유" />
                        </H.FeatureBox>
                    </motion.div>
                    <motion.div {...animationProps}>
                        <H.FeatureBox>
                            <H.FeatureBoxNumber3>3</H.FeatureBoxNumber3>
                            <H.FeatureBoxContent>
                                <H.FeatureBoxTitle>면접 타임테이블 확정하기</H.FeatureBoxTitle>
                                <H.FeatureBoxDescription>
                                    • 모든 면접 전형 지원자가 시간 입력을 완료하면<br />면접 페이지에서 ‘타임테이블 확정하기’ 버튼을 눌러<br />면접 타임테이블을 확정합니다.
                                    <br />
                                    <br />• 타임테이블 확정 시 모든 지원자가 열람 가능하며<br />수정이 불가합니다.
                                    <br />
                                    <br />• 타임테이블 이미지는 PNG 혹은 PDF 파일로<br />다운 가능합니다. 이미지 혹은 링크로 지원자에게<br />공유하세요.
                                </H.FeatureBoxDescription>
                            </H.FeatureBoxContent>
                            <H.FeatureBoxImage src="/images/HomeIntroFunction3.svg" alt="타임테이블 확정" />
                        </H.FeatureBox>
                    </motion.div>
                </H.Section3>
            </H.Container>
            <H.Container2>
                <H.Footer>
                    <H.FooterTitle>
                        기업 맞춤형 인재를 뽑기 위한
                        <br />
                        단 하나의 솔루션
                    </H.FooterTitle>
                    <H.FooterSectionsWrapper>
                        <H.FooterSection>
                            <H.FooterSubTitle>도입 문의</H.FooterSubTitle>
                            <H.FooterText>Lead | &nbsp;&nbsp;이미지</H.FooterText>
                            <H.FooterText>Tel | &nbsp;&nbsp;010-1234-5678</H.FooterText>
                            <H.FooterText>E-mail | &nbsp;&nbsp;jpg@naver.com</H.FooterText>
                        </H.FooterSection>
                        <H.FooterSection>
                            <H.FooterSubTitle>공식 계정</H.FooterSubTitle>
                            <H.FooterText>Instagram | &nbsp;&nbsp;@AIT.official</H.FooterText>
                            <H.FooterText>E-mai | &nbsp;&nbsp;AIT.operation@gmail.com</H.FooterText>
                        </H.FooterSection>
                    </H.FooterSectionsWrapper>
                </H.Footer>
            </H.Container2>
        </H.MainDiv>
    );
}

export default Home;
