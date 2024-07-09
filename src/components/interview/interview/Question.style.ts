import styled, { keyframes } from "styled-components";

export const QContainer = styled.div`
    text-align: center;
    justify-content: center;
`;

// 질문 box
export const QBox = styled.div`
    text-align: center;
    display: inline-block;
    margin: 70px auto 30px auto;
    padding: 20px 50px;
    font-size: 20px;
    border-radius: 30px;
    background: linear-gradient(90deg, rgba(105, 108, 234, 0.60) 0%, #696CEA 100%);
    color: white;
`;

// 타이머 제목
export const TimerTitle = styled.div`
    font-size: 20px;
    border: 1px solid black;
    width: 630px;
    margin: 30px auto;
    padding: 10px 0px;
`;

// 타이머
export const Timer = styled.div`
    margin-top: 20px;
    font-size: 50px;
    
`;

// Keyframes 정의: 왼쪽에서 오른쪽으로 시간이 흐르는 타이머 애니메이션
const timerAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;


export const TimerBox = styled.div`
    text-align: center;
    position: relative; /* 상대적 위치 설정 */
    margin: 20px auto 30px auto;
    width: 1000px;
    height: 5px;
    border-radius: 30px;
    background: linear-gradient(90deg, rgba(105, 108, 234, 0.60) 0%, #696CEA 100%);
    color: white;
`;

export const Timer30Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 5px; /* 타이머 바의 높이 설정 */
    
    background-color: #ffffff; /* 타이머 바의 색상 설정 */
    animation: ${timerAnimation} 30s linear forwards; /* 60초 동안 애니메이션 실행 */
`;

export const Timer60Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 5px; /* 타이머 바의 높이 설정 */
    
    background-color: #ffffff; /* 타이머 바의 색상 설정 */
    animation: ${timerAnimation} 60s linear forwards; /* 60초 동안 애니메이션 실행 */
`;