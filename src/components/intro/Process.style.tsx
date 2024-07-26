import styled from "styled-components";

export const ProcessContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

// 프로세스 박스
export const ProcessBox = styled.div`
    margin: 30px 10px;
    padding: 30px 40px 40px 40px;
    background-color: white;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 500;
    box-shadow: 1px 4px 10px 3px #E2E2FA;
    width: 300px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
        margin: 20px 0;
        font-size: 18px;
    }
`;

export const ProcessLine = styled.div`
    background-color: #D0D2D7;
    width: 50px;
    height: 4px;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 30px;
        height: 3px;
    }
`;
