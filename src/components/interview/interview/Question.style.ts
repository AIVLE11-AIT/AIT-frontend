import styled, { keyframes } from "styled-components";

export const QContainer = styled.div`
    text-align: center;
    display: display;
    justify-content: center;
`;

// Keyframes 정의: 위로 올라오는 애니메이션
const slideUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const QBox = styled.div`
    text-align: center;
    display: inline-block;
    margin: 110px auto 30px auto;
    padding: 20px 50px;
    font-size: 20px;
    border-radius: 30px;
    background: linear-gradient(90deg, rgba(105, 108, 234, 0.60) 0%, #696CEA 100%);
    color: white;
`;

export const QText = styled.text`
    animation: ${slideUp} 0.5s ease-out;
`;