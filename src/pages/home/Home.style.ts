import styled from 'styled-components';

export const MainDiv = styled.div`
  text-align: center;
`;

export const Section1 = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 70px;
  margin-bottom: 100px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  width: 50%;
  margin-left: 50px;
  margin-top: 50px;
`;

export const Section2 = styled.section`
  margin: 20px 0;
  padding: 40px 0;
`;

export const Section3 = styled.section`
  margin: 20px 0;
  padding: 40px 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 20px 0;
`;


// 각 기업이 원하는 평가 비율을 직접 선택하여 맞춤형으로 지원자의 면접 평가 결과를 제공합니다.
export const SubTitle1 = styled.div`
  margin-top: 20px;
  color: #404146;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; 
`;

// 스마트한 AI면접의 시작
export const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 30px;
  color: #0D0D0D;
  font-size: 65px;
  font-weight: 600;
`;

// 각 기업이 원하는 평가 비율을 직접 선택하여 맞춤형으로 지원자의 면접 평가 결과를 제공합니다.
export const SubTitle2 = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  color: black;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7; 
`;

export const TitlePart1 = styled.span`
  color: #0D0D0D;
  font-weight: 700;
`;

export const TitlePart2 = styled.span`
  color: #696CEA;
  font-weight: 700;
`;

export const SectionSubTitle2Part1 = styled.span`
  color: #606060;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #606060;
`;

export const SectionSubTitle2Part2 = styled.span`
  font-family: "Abhaya Libre SemiBold";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #000;
`;

export const SectionTitle1 = styled.h2`
  margin-bottom: 60px;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--Wireframe-Black, #000);
  display: inline;
  text-align: left;
`;

export const SectionTitlePart1 = styled.span`
  font-size: 45px;
  font-weight: 700;
  display: inline;
`;

export const SectionTitlePart2 = styled.span`
  color: #333;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(91deg, #C794E7 -16.62%, #696CEA 26.43%, #A077FF 68.84%, #484CF8 111.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`;

export const SectionTitle2 = styled.div`
  margin-bottom: 50px;
  color: #333;
  text-align: center;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(91deg, #C794E7 -16.62%, #696CEA 26.43%, #A077FF 68.84%, #484CF8 111.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SectionSubTitle2 = styled.h2`
  color: #606060;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// go profile 버튼
export const Button1 = styled.button`
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 10px;
  background: black;
  width: 200px;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// contact 버튼
export const Button2 = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin: 20px;
  border-radius: 15px;
  border: 1px solid #D0D2D7;
  background: #FFF;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// 분석 결과 사진
export const ResultContainer = styled.div`
  margin-top: 50px;
`;

export const Features = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  margin-top: 40px;
`;

export const Feature = styled.div`
  width: 360px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin: 10px 30px;
  border-radius: 30px;
  border: 1px solid #D0D2D7;
  background: #FFF;
`;
export const FeatureTitle = styled.h3`
  margin-bottom: 20px;
  color: black;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// 음성, 행동, 답변 분석 설명
export const FeatureDescription = styled.p`
  color: #5C5C5C;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.7;
  margin-left: 5px;
  height: 180px;
`;

// 음성, 행동, 답변 분석 아이콘
export const FeatureImage = styled.div`
  text-align: right;
  margin-right: 0px;
  margin-top: auto;
  margin-bottom: 0px;
  font-size: 70px;
`;

// 주요 기능
export const MiniTitle = styled.footer`
  color: #696CEA;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
`;

// 자동으로 면접 타임테이블 생성하기
export const SectionTitle3 = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  color: var(--Wireframe-Black, #000);
  text-align: center;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// 면접 페이지를 만들고 지원자에게 링크를 공유하세요.
// 지원자들이 가능한 시간을 모아 최적의 면접 타임테이블을 만들어 드립니다.
export const SectionSubTitle3 = styled.h2`
  color: var(--Wireframe-Black, #000);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.7;
`;

export const Footer = styled.footer`
  background-color: #272727;
  padding: 10px 20px 100px 20px;
`;

export const FooterTitle = styled.h4`
  margin: 50px auto 70px auto;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(91deg, #C794E7 -16.62%, #696CEA 26.43%, #A077FF 68.84%, #484CF8 111.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FooterSection = styled.div`
  margin: 20px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  text-align: left;
 `;

export const FooterSectionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto; 
  gap: 20px;
`;

export const FooterSubTitle = styled.div`
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const FooterText = styled.p`
  margin: 7px 0;
  color: #FFF;
  font-size: 13px;
`;

export const Container = styled.div`
  padding: 20px;
`;

export const Container2 = styled.div`
  background: linear-gradient(180deg, #e0e7ff 0%, #d0e0ff 100%);
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

export const Box = styled.div`
  padding: 20px;
  margin: 10px 0;
  width: 100%;
  text-align: left;
`;

export const BoxComment1 = styled.div`
  padding: 15px 40px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  border-radius: 35px;
  background: #FFF;
  box-shadow: 4px 4px 20px 4px rgba(0, 0, 0, 0.10);
  width: 481px;
  height: 132px;
  flex-shrink: 0;
  margin-bottom: 80px;
  margin-left: 80px;
`;

export const BoxComment2 = styled.div`
  padding: 15px 40px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  border-radius: 35px;
  background: #FFF;
  box-shadow: 4px 4px 20px 4px rgba(0, 0, 0, 0.10);
  width: 481px;
  height: 132px;
  flex-shrink: 0;
  margin-bottom: 80px;
`;

export const BoxComment3 = styled.div`
  padding: 15px 40px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  border-radius: 35px;
  background: #FFF;
  box-shadow: 4px 4px 20px 4px rgba(0, 0, 0, 0.10);
  width: 481px;
  height: 132px;
  flex-shrink: 0;
  margin-left: 80px;
`;

export const BoxTitle = styled.h3`
  font-size: 1.5rem;
  color: #0D0D0D;
  margin-bottom: 10px;
`;

export const BoxHighlighted = styled.span`
  color: #696CEA;
  font-weight: bold;
`;

export const Description = styled.p`
  margin-top: 60px;
  color: #6D6D6D;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 2;
  text-align: left;
`;

export const CommentIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 10px;
`;

export const CommentText = styled.p`
  color: #404146;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 10px;
`;

export const FeatureBox = styled.div`
  display: flex;
  padding: 20px;
  margin: 60px 0;
  align-items: center;
  justify-content: space-between;
  border-radius: 35px;
  background: #FFF;
  box-shadow: 0px 4px 8px 6px rgba(0, 0, 0, 0.05);
  width: 1160px;
  height: 496px;
  flex-shrink: 0;
  position: relative; // 추가: 절대값 위치 조정을 위한 상대값 설정
`;

export const FeatureBoxNumber1 = styled.div`
  display: flex;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 50px; 
  left: -30px; 
  justify-content: center;
  align-items: center;
  background-color: #696CEA;
  border-radius: 50px;
  color: #FFF;
  font-size: 26px;
  font-weight: 600;
`;

export const FeatureBoxNumber2 = styled.div`
  display: flex;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 50px; 
  left: -30px; 
  justify-content: center;
  align-items: center;
  background-color: #696CEA;
  border-radius: 50px;
  color: #FFF;
  font-size: 26px;
  font-weight: 600;
`;

export const FeatureBoxNumber3 = styled.div`
  display: flex;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 50px; 
  left: -30px; 
  justify-content: center;
  align-items: center;
  background-color: #696CEA;
  border-radius: 50px;
  color: #FFF;
  font-size: 26px;
  font-weight: 600;
`;

export const FeatureBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  margin-left: 20px;
  position: relative; // 추가: 절대값 위치 조정을 위한 상대값 설정
`;

export const FeatureBoxTitle = styled.h3`
  margin-bottom: 40px;
  color: var(--Wireframe-Black, #000);
  font-family: "Abhaya Libre SemiBold";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FeatureBoxDescription = styled.p`
  color: #5C5C5C;
  font-family: "Abhaya Libre SemiBold";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 130% */
  text-align: left;
`;

export const FeatureBoxImage = styled.img`
  width: 520px;
  height: auto;
  margin-right: 20px; /* 수정: 이미지의 위치 조정 */
`;
