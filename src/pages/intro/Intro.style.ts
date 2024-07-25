import styled from "styled-components";

export const IntroHeader = styled.div`
    width: 100%;
    padding: 70px;
    margin-top: 15px;

    @media (max-width: 768px) {
        padding: 30px;
    }
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
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 25px;
        margin-bottom: 10px;
    }
`;

export const HeaderText = styled.div`
    text-align: center;
    color: #404146;

    @media (max-width: 768px) {
        font-size: 18px;
    }
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

    @media (max-width: 768px) {
        width: 100%;
        margin: 20px 0;
        padding: 10px;
    }
`;

export const ContentIcon = styled.div`
    font-size: 50px;

    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export const ContentTitle = styled.div`
    font-weight: 600;
    font-size: 17px;
    margin-top: 10px;
    color: #404146;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ContentText = styled.div`
    font-size: 14px;
    color: #6D6D6D;
    font-weight: 400;
    margin-top: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
        margin-top: 10px;
    }
`;

export const ContentLine = styled.div`
    background-color: #E2E2FA;
    width: 150px;
    height: 1px;
    margin: 20px auto;

    @media (max-width: 768px) {
        width: 100px;
        margin: 10px auto;
    }
`;

// 표 박스
export const GraphContainer = styled.div`
    background-color: white;
    width: 1000px;
    margin-top: 50px;
    padding: 50px;
    border-radius: 20px;
    box-shadow: 1px 4px 10px 3px #E2E2FA;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px;
        padding: 20px;
    }
`;
