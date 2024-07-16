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
    margin-left: 93px;
    cursor: pointer;
`;

// 헤더 wrap
export const HeaderWrap = styled.div`
    margin: auto 131px auto auto;
    display: flex;
`;

// 헤더 content
export const HeaderContent = styled.div`
    padding: 30px 32px;
    color: #0D0D0D;
    font-weight: 500;
    cursor: pointer;
`;

// 로그인 버튼
export const LoginBtn = styled.div`
    display: flex;
    margin-top: 24px;
    margin-left: 31px;
    border-radius: 5px;
    width: 83px;
    height: 32px;
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