import styled from "styled-components";

export const MainContainer = styled.div`
    width: 625px;
    height: 434px;
    flex-shrink: 0;
    border-radius: 30px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin: 150px auto 0px auto;
`;

// 제목(수고 하셨습니다. 면접이 완료되었습니다.)
export const ExitTitle = styled.div`
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    color: #404146;
    line-height: 1.5;
    margin-top: 40px;
`;

export const ExitText = styled.div`
    font-size: 17px;
    text-align: center;
    color: #404146;
    margin-top: 30px;
    line-height: 1.5;
`;

export const ExitIcon = styled.div`
    font-size: 110px;
    text-align: center;
    margin-top: 30px;
`;

// 로고
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 80px auto 0px auto;
    width: 100px;
    height: 20px;
`;