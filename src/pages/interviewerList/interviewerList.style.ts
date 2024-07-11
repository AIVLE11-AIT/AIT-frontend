import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;
export const InterviewMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    width: 1000px;
    margin-top: 30px;
    margin-left: 30px;
    margin-bottom: 100px;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 12px;
  margin-top: 30px;
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

// 지원자 리스트 전체 박스
export const ListBox = styled.div`
    width: 700px;
    margin-left: 25px;
    margin-top: 20px;
`;

// 지원자 리스트 헤더 바
export const ListHeaderBar = styled.div`
    background-color: #696CEA;
    height: 10px;
`;

export const ListWrap = styled.div`
    border-bottom: 1px solid #BBBBBB;
    display: flex;
    cursor: pointer;

    &:hover {
        color: #696CEA;
    }
`;

export const IdBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    padding: 15px;
    width: 100px;
    background-color: #F1F1F2;
`;

export const ContentBox= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 15px 30px;
`;