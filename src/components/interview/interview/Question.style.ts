import styled, { keyframes } from "styled-components";

export const QContainer = styled.div`
    text-align: center;
    justify-content: center;
    margin-top: 40px;
`;

// 타이머 제목
export const TimerTitle = styled.div`
    font-size: 15px;
    display: inline-block;
    margin: 20px auto;
    padding: 10px 30px 25px 30px;
    border-radius: 30px;
    height: 30px;
    color:  #404146;
    border: 2px solid  #404146;
    font-weight: 600;
`;

// 타이머
export const Timer = styled.div`
    font-size: 50px;
    font-weight: 600;
    color: #404146;
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

// 타이머 바
export const TimerBar = styled.div`
    text-align: center;
    position: relative; /* 상대적 위치 설정 */
    margin: 20px auto 30px auto;
    width: 800px;
    height: 7px;
    border-radius: 30px;
    background: white;
    color: white;
`;

export const Timer20Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 7px; /* 타이머 바의 높이 설정 */
    border-radius: 30px;
    
    background: linear-gradient(272deg, #696CEA 10%, rgba(160, 119, 255, 0.85) 100%);
    animation: ${timerAnimation} 20s linear forwards; /* 60초 동안 애니메이션 실행 */
`;

export const Timer60Bar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 7px; /* 타이머 바의 높이 설정 */
    border-radius: 30px;
    
    background: linear-gradient(272deg, #696CEA 10%, rgba(160, 119, 255, 0.85) 100%);
    animation: ${timerAnimation} 61s linear forwards; /* 60초 동안 애니메이션 실행 */
`;

// 질문 box
export const QBox = styled.div`
    text-align: center;
    display: inline-block;
    margin: 40px auto 0px auto;
    padding: 20px 150px;
    font-size: 20px;
    border-radius: 10px;
    background: linear-gradient(272deg, #696CEA 30.19%, rgba(160, 119, 255, 0.85) 100%);
    color: white;
`;