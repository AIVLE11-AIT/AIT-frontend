import styled from "styled-components";

export const ProcessContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;  /* 작은 화면에서도 레이아웃이 깨지지 않도록 flex-wrap 추가 */

    @media (max-width: 768px) {
        margin: 0 10px; /* 작은 화면에서 좌우 여백을 줌 */
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
        width: 100%;  /* 작은 화면에서 박스가 화면에 꽉 차게 함 */
        margin: 20px 0; /* 상하 마진 조정 */
        padding: 20px;  /* 패딩 조정 */
    }
`;

export const ProcessLine = styled.div`
    background-color: #D0D2D7;
    width: 50px;
    height: 4px;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 40px; /* 작은 화면에서 너비 조정 */
        height: 3px; /* 작은 화면에서 높이 조정 */
    }
`;
