import styled, { keyframes } from "styled-components";

// 헤더 컴포넌트
export const HeaderComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

interface NumIconProps {
    bg: string;
}
// 숫자 아이콘
export const NumIcon = styled.div<NumIconProps>`
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.bg};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    font-weight: 600;
`;

// 바 아이콘
export const BarIcon = styled.div<NumIconProps>`
    width: 100px;
    height: 3px;
    background: ${(props) => props.bg};
`;