import styled from "styled-components";

// 헤더
export const HeaderDiv = styled.div`
    display: flex;
    margin-top: 74px;
`;

// 로고
export const Logo = styled.img`
    display: flex;
    width: 60px;
    margin: 0 auto;
`;

export const PreTestMainContainer = styled.div`
    margin-top: 30px;
`;

// 면접 이름
export const PreTestName = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #404146;
    font-weight: 600;
`;

// 면접 제목
export const PreTestTitle = styled.div`
    margin-top: 20px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
`;

// 면접 일시 div
export const PreTestDate = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: #404146;
    font-weight: 500;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 아이콘
export const LabelIcon = styled.div`
    width: 9px;
    height: 9px;
    background-color: #696CEA;
    border-radius: 30px;
    margin: auto 0;
`;

// 면접 일시 text
export const Date = styled.div`
    margin-left: 10px;
`;

// 버튼 컨테이너
export const BtnContainer = styled.div`
    display: flex;
    border: 1px solid black;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`;

interface PreTestBtnProps {
    borderColor: string;
    bg: string;
    position: string;
  }

// 사전테스트, 면접실 입장 박스
export const PreTestBox = styled.div<PreTestBtnProps>`
    width: 513px;
    height: 300px;
    border: 1px solid ${(props) => props.borderColor};
    background-color: ${(props) => props.bg};
    border-radius: 20px;
    margin-left: ${(props) => props.position};
`;

// PreTestText
export const BoxTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-top: 50px;
    margin-left: 40px;
`;

export const BoxContent=styled.div`
    font-size: 12px;
`;
