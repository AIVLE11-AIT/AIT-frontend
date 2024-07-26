import styled from 'styled-components';

// 헤더 박스
export const HeaderDiv = styled.div`
    display: flex;
    width: 100%;
    height: 86px;
`; 

// 로고 박스
export const LogoDiv = styled.div`
    padding: 24px 0px;
    margin-left: calc(10px + 5vw);
    cursor: pointer;

    @media (max-width: 768px) {
        display: none;
    }
`;

// 헤더 wrap
export const HeaderWrap = styled.div`
    margin: auto calc(10px + 5vw) auto auto;
    display: flex;
`;

// 헤더 content
export const HeaderContent = styled.div`
    padding: calc(10px + 1vw) calc(15px + 1vw);
    color: #0D0D0D;
    font-weight: 500;
    cursor: pointer;
`;

// 로그인 버튼
export const LoginBtn = styled.div`
    display: flex;
    margin-top: calc(3px + 1vw);
    margin-left: calc(10px + 1vw);
    border-radius: 5px;
    width: 80px;
    height: 30px;
    background: #0D0D0D;
    cursor: pointer;
`;

// 로그인 버튼 text
export const LoginBtnText = styled.div`
    display: flex;
    color: white;
    margin: auto;
    font-size: 15px;
`;
