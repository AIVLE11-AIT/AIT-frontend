import styled from "styled-components";

// 헤더
export const HeaderDiv = styled.div`
    display: flex;
    margin-top: 20px;
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
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
`;

// 면접 일시(+타이머) container
export const DateContainer = styled.div`
    margin: 20px auto auto auto;
    border-radius: 20px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    padding: 20px;
    width: 950px;
`;

// 면접 일시 text 박스
export const DateText = styled.div`
    display: flex;
    font-size: 15px;
    font-weight: 600;
    color: #404146;
    text-align: center;
    line-height: 25px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

// 아이콘
export const LabelIcon = styled.div`
    width: 7px;
    height: 7px;
    background-color: #696CEA;
    border-radius: 30px;
    margin: auto 10px auto 0px;
`;

// 버튼 컨테이너
export const BtnContainer = styled.div`
    display: flex;
    border: 1px solid black;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`;

