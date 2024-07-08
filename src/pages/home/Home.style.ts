import styled from 'styled-components';

export const MainDiv = styled.div`
  text-align: center;
`;

export const Section1 = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
  flex-direction: row;
  margin-top: 80px;
  margin-bottom: 150px;
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

export const Title = styled.h1`
  margin-top: 70px;
  margin-bottom: 30px;
  color: #0D0D0D;
  font-family: "Abhaya Libre SemiBold";
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SubTitle = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px;
  color: #404146;
  text-align: center;
  font-family: ABeeZee;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal; 
`;

export const TitlePart1 = styled.span`
  color: #0D0D0D;
  font-family: "Abhaya Libre SemiBold";
  font-weight: 600;
`;

export const TitlePart2 = styled.span`
  color: #696CEA;
  font-family: "Abhaya Libre SemiBold";
  font-weight: 400;
`;

export const SectionSubTitle2Part1 = styled.span`
  color: #606060;
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  font-family: "Abhaya Libre SemiBold";
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--Wireframe-Black, #000);
  display: inline;
  text-align: left;
`;

export const SectionTitlePart1 = styled.span`
  font-family: "Abhaya Libre SemiBold";
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: inline;
`;

export const SectionTitlePart2 = styled.span`
  color: #333;
  font-family: "Abhaya Libre SemiBold";
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(91deg, #C794E7 -16.62%, #696CEA 26.43%, #A077FF 68.84%, #484CF8 111.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`;

export const SectionTitle2 = styled.h2`
  margin-bottom: 50px;
  color: #333;
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
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
  font-family: "Abhaya Libre SemiBold";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SectionTitle3 = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  color: var(--Wireframe-Black, #000);
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SectionSubTitle3 = styled.h2`
  color: var(--Wireframe-Black, #000);
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Button1 = styled.button`
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 15px;
  background: #696CEA;
  width: 200px;
  height: 60px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #FFF;
  font-family: Spartan;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Button2 = styled.button`
  width: 200px;
  height: 60px;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin: 20px;
  border-radius: 15px;
  border: 1px solid #D0D2D7;
  background: #FFF;
  color: #000;
  font-family: Spartan;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ResultContainer = styled.div`
  padding: 70px;
  background: #D9D9D9;
  width: 100%;
  height: 500px;
  flex-shrink: 0;
  margin-top: 100px;
`;

export const Features = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 0;
`;

export const Feature = styled.div`
  width: 360px;
  height: 400px;
  flex-shrink: 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin: 10px;
  border-radius: 35px;
  border: 1px solid #D0D2D7;
  background: #FFF;
`;

export const FeatureTitle = styled.h3`
  margin-bottom: 20px;
  color: #404146;
  font-family: "Abhaya Libre SemiBold";
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FeatureDescription = styled.p`
  color: #5C5C5C;
  font-family: "Abhaya Libre SemiBold";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const MiniTitle = styled.footer`
  color: #696CEA;
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 40px;
`;

export const Footer = styled.footer`
  background-color: #333;
  padding: 20px;
`;

export const FooterTitle = styled.h4`
  margin-bottom: 80px;
  margin-top: 80px;
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 48px;
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
  gap: 60px;
`;

export const FooterSubTitle = styled.h4`
  color: #FFF;
  font-family: "Abhaya Libre SemiBold";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 40px;
`;

export const FeatureImage = styled.div`
  text-align: right;
  margin-right: 0px;
  margin-top: 160px;
  font-size: 88px;
  padding: 5px;
`;

export const FooterText = styled.p`
  margin: 5px 0;
  color: #FFF;
  font-family: "Abhaya Libre SemiBold";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  padding: 15px;
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
  padding: 15px;
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
  padding: 15px;
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
  font-family: "Abhaya Libre SemiBold";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 2.1;
  text-align: left;
`;

export const CommentIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 10px;
`;

export const CommentText = styled.p`
  margin: 0;
  color: #404146;
  font-family: "Abhaya Libre SemiBold";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
