import styled from "styled-components";

export const IntroHeader = styled.div`
    width: 100%;
    padding: 70px;
    margin-top: 15px;
`;

export const HeaderContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.7;
    font-weight: 600;
    font-size: 35px;
    text-align: center;
    color: black;
    margin-bottom: 30px;
`;

// 헤더 박스
export const HeaderContentBox = styled.div`
    width: 400px;
    margin: 60px 40px;
    text-align: center;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 1px 4px 10px 3px #E2E2FA;
`;

export const ContentIcon = styled.div`
    font-size: 50px;
`;

export const ContentTitle = styled.div`
    font-weight: 600;
    font-size: 17px;
    margin-top: 10px;
    color: #404146;
`;

export const ContentText = styled.div`
    font-size: 14px;
    color: #6D6D6D;
    font-weight: 400;
    margin-top: 20px;
`;

export const ContentLine = styled.div`
    background-color: #E2E2FA;
    width: 150px;
    height: 1px;
    margin: 20px auto;
`;

// 표 박스
export const GraphContainer = styled.div`
    background-color: white;
    width: 1000px;
    margin-top: 50px;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 1px 4px 10px 3px #E2E2FA;
`;