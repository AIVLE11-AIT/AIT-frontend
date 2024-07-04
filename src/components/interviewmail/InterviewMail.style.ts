import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Sidebar = styled.div`
`;

export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 831px;
  margin-bottom: 20px;
  background-color: transparent;
`;

export const Title = styled.h1`
  color: var(--black, #000);
  font-family: "Abhaya Libre SemiBold";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  color: var(--gray-02, #606060);
  font-family: "Abhaya Libre SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const LineIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const Line = styled.hr`
  width: 100%;
  height: 3px;
  border: none;
  border-radius: 21px;
  background: var(--gray-06, #dfdfdf);
`;

export const ContentContainer = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 831px;
  height: 717px;
  flex-shrink: 0;
`;

export const Section = styled.div`
  margin-bottom: 30px;
  color: var(--gray-02, #606060);
  font-family: "Abhaya Libre SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 30px;
  color: var(--gray-01, #303030);
  font-family: "Abhaya Libre SemiBold";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const NoticeBox = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  hegiht: 100%;
  border-radius: 15px;
  border: 2px solid var(--gray-08, #F1F1F2);
  background: var(--gray-09, #FBFBFB);
  flex-shrink: 0;
  color: var(--gray-02, #606060);
  font-family: "Abhaya Libre SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const NoticeBoxTitle = styled.h2`
  margin-bottom: 30px;
  color: var(--black, #000);
  font-family: "Abhaya Libre SemiBold";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SendMailButton = styled.button`
  border: none;
  cursor: pointer;
  color: var(--white, #FFF);
  font-family: "Abhaya Libre SemiBold";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  width: 137px;
  height: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #696CEA;
`;

export const GoToInterviewPageButton = styled.button`
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 14px;
  background: #696CEA;
  display: flex;
  width: 327px;
  height: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  margin: 0 auto;
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const CenteredText = styled.div`
  margin-bottom: 50px;
  color: var(--gray-02, #606060);
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FooterText = styled.div`
  text-align: center;
  color: #D9D9D9;
  font-family: ABeeZee;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Icon = styled.div<{ size: number }>`
  img {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin-right: 5px;
  }
`;