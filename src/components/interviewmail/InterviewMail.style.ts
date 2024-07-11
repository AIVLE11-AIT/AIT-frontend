import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    width: 1000px;
    height: 580px;
    margin-top: 30px;
    margin-left: 30px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 12px;
  background-color: transparent;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 25px;
  font-weight: 600;
  margin-left: 25px;
  margin-bottom: 15px;
`;

export const Subtitle = styled.p`
  margin-bottom: 10px;
  color: #606060;
  font-size: 15px;
  font-weight: 500;
  margin-left: 25px;
`;

export const ContentContainer = styled.div`
  padding: 30px 40px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 430px;
`;

export const Section = styled.div`
  margin-bottom: 30px;
  color: #606060;
  font-size: 13px;
  font-weight: 500;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #303030;
  font-size: 22px;
  font-weight: 600;
`;

// 주의사항 박스(내용)
export const NoticeBox = styled.div`
  padding: 20px;
  width: 100%;
  hegiht: 100%;
  border-radius: 10px;
  border: 2px solid #F1F1F2;
  background: #FBFBFB;
  flex-shrink: 0;
  color: var(--gray-02, #606060);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.2;
`;

// 주의사항
export const NoticeBoxTitle = styled.div`
  margin-bottom: 10px;
  color: var(--black, #000);
  font-size: 15px;
  font-weight: 600;
`;

export const SendMailButton = styled.button`
  border: none;
  cursor: pointer;
  color: #696CEA;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  width: 137px;
  height: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: white;
  border: 2px solid #696CEA;
  margin-right: 35px;
`;

// 면접 바로가기
export const GoToInterviewPageButton = styled.div`
  color: white;
  font-size: 15px;
  border-radius: 14px;
  background: #696CEA;
  display: flex;
  width: 300px;
  height: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  font-weight: 600;
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export const CenteredText = styled.div`
  color: #606060;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
`;

export const FooterText = styled.div`
  text-align: center;
  color: #D9D9D9;
  font-size: 15px;
  font-weight: 400;
  margin-top: 30px;
`;

export const Icon = styled.div<{ size: number }>`
  img {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin-right: 5px;
  }
`;