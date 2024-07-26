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
  margin-top: 150px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 50px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
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

export const SubTitle1 = styled.div`
  margin-top: 20px;
  color: #404146;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  color: #0D0D0D;
  font-size: 60px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SubTitle2 = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  color: black;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 15px;
  }
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
  font-size: 22px;
  font-weight: 600;
  color: #606060;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const SectionSubTitle2Part2 = styled.span`
  font-family: "Abhaya Libre SemiBold";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #000;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const SectionTitle1 = styled.h2`
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--Wireframe-Black, #000);
  display: inline;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const SectionTitlePart1 = styled.span`
  font-size: 40px;
  font-weight: 700;
  display: inline;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const SectionTitlePart2 = styled.span`
  color: #333;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(91deg, #C794E7 -16.62%, #696CEA 26.43%, #A077FF 68.84%, #484CF8 111.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SectionTitle2 = styled.div`
  margin-bottom: 50px;
  color: #333;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(91deg, #C794E7 -16.62%, #696CEA 26.43%, #A077FF 68.84%, #484CF8 111.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const SectionSubTitle2 = styled.h2`
  color: #606060;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

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

  @media (max-width: 768px) {
    width: 150px;
    height: 40px;
    font-size: 16px;
    padding: 5px 10px; /* 적절한 패딩 조정 */
  }
`;

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

  @media (max-width: 768px) {
    width: 150px;
    height: 40px;
    font-size: 16px;
  }
`;

export const ResultContainer = styled.div`
  margin-top: 5px;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Features = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
    margin-top: 20px;
  }
`;

export const Feature = styled.div`
  width: 360px;
  height: 400px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin: 10px 30px;
  border-radius: 30px;
  border: 1px solid #D0D2D7;
  background: #FFF;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px;
    margin: 10px 0;
  }
`;

export const FeatureTitle = styled.h3`
  margin-bottom: 20px;
  color: black;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const FeatureDescription = styled.p`
  color: #5C5C5C;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.7;
  margin-left: 5px;
  height: 180px;

  @media (max-width: 768px) {
    font-size: 12px;
    height: auto;
  }
`;

export const FeatureImage = styled.div`
  text-align: right;
  margin-right: 0px;
  margin-top: auto;
  margin-bottom: 0px;
  font-size: 70px;
`;

export const MiniTitle = styled.footer`
  color: #696CEA;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SectionTitle3 = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  color: var(--Wireframe-Black, #000);
  text-align: center;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const SectionSubTitle3 = styled.h2`
  color: var(--Wireframe-Black, #000);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Container = styled.div`
  padding: 20px;
`;

export const Container2 = styled.div`
  background: linear-gradient(180deg, #e0e7ff 0%, #d0e0ff 100%);
  margin-top: 150px;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const BoxTitle = styled.h3`
  font-size: 1.5rem;
  color: #0D0D0D;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const BoxHighlighted = styled.span`
  color: #696CEA;
  font-weight: bold;
`;

export const Description = styled.p`
  margin-top: 60px;
  color: #6D6D6D;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 2;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 30px;
  }
`;

export const CommentIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CommentText = styled.p`
  color: #404146;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
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
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 10px;
  }
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

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
    top: 20px; 
    left: -20px; 
  }
`;

export const FeatureBoxNumber2 = styled(FeatureBoxNumber1)``;
export const FeatureBoxNumber3 = styled(FeatureBoxNumber1)``;

export const FeatureBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  margin-left: 20px;
  position: relative;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 5px;
  }
`;

export const FeatureBoxTitle = styled.h3`
  margin-bottom: 40px;
  color: var(--Wireframe-Black, #000);
  font-family: "Abhaya Libre SemiBold";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const FeatureBoxDescription = styled.p`
  color: #5C5C5C;
  font-family: "Abhaya Libre SemiBold";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const FeatureBoxImage = styled.img`
  width: 520px;
  height: auto;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;
