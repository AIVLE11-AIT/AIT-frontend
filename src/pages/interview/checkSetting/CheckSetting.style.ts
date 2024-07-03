import styled from "styled-components";

// 전체 박스
export const ComponentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 메인 박스
export const InterviewComponent = styled.div`
    width: 850px;
    height: 570px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin: 30px auto 0 auto;
    overflow-y: auto; /* 수직 스크롤 활성화 */

    /* 스크롤바 스타일 */
    &::-webkit-scrollbar {
        width: 8px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1; /* 스크롤바 트랙(배경) 색상 */
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888; /* 스크롤바 손잡이 색상 */
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555; /* 스크롤바 손잡이 호버 색상 */
    }
`;

// 버튼 div
export const BtnDiv = styled.div`
    display: flex;
    width: 200px;
    margin: 0px 50px;
    padding: 0px 50px;
`;


// 버튼 컴포넌트
export const BtnComponent = styled.div<{border:string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 36px;
    border: ${(props) => props.border};
    cursor: pointer;

    &:hover {
        filter: brightness(0.4); /* 마우스를 올리면 테두리의 색상을 변경 */
    }
`;


// 이전 버튼
export const BackArrow = styled.img<{display:string}>`
    display: ${(props) => props.display};
    width: 30px;
    height: 30px;
`;

// 다음 버튼
export const NextArrow = styled.img`
    transform: rotate(180deg); /* 이미지를 180도 회전시킴 */
    width: 30px;
    height: 30px;
`;