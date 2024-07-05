import styled from "styled-components";

// 페이지 번호 div
export const PageNumberBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;  // 요소들을 수평으로 정렬
    align-items: center;
    margin-top: 35px;
`;

interface PageNumberTextProps {
    position: string;
    color: string;
  }

// 페이지 번호 text
export const PageNumberText = styled.span<PageNumberTextProps>`
    position: absolute;
    top: 48%;
    left: ${(props) => props.position};
    transform: translate(-50%, -50%);
    font-size: 17px;
    color: ${(props) => props.color};
`;


// 페이지 번호 icon line
export const PageNumberLine = styled.div`
    width: 31px;
    height: 2px;
    background: #606060;
    margin: auto 0px;
`;

// 제목
export const Title = styled.div`
    text-align: center;
    margin-top: 40px;
    font-weight: 600;
    font-size: 30px;
`;

// 메인 컨테이너
export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`;