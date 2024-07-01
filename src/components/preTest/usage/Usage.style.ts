import styled from "styled-components";

// 설명 컴포넌트
export const UsageComponent = styled.div`
    position: relative;
    width: 1160px;
    height: 496px;
    flex-shrink: 0;
    border-radius: 35px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.05);
    margin: 88px auto;
`;

// 순서 아이콘
export const UsageNumberIcon = styled.div`
    display: flex;
    position: absolute;
    width: 64px;
    height: 64px;
    top: 60px; // UsageComponent의 상단에서 32px 위로
    left: -3%; // 가운데 정렬
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #696CEA;
    border-radius: 50px;
    color: #FFF;
    font-size: 26px;
    font-weight: 600;
`;

// 설명 제목
export const UsageTitle = styled.div`
    font-size: 30px;
    color: #404146;
    font-weight: 600;
    margin-top: 78px;
    margin-left: 70px;
`;