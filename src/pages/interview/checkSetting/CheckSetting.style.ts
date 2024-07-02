import styled from "styled-components";

// 메인 박스
export const InterviewComponent = styled.div`
    width: 1000px;
    height: 490px;
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

// 다음 버튼
export const NextBtn = styled.div`
    display: flex;
    width: 352px;
    height: 49px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #696CEA;
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    margin: 20px auto 0px auto;
    transition: background-color 0.3s ease; // 부드러운 색 전환을 위한 transition 추가

    &:hover {
        background: #8184ea; // 마우스를 올렸을 때 조금 연한 색
    }
`;

// step2~ 버튼 컴포넌트
export const BtnComponent = styled.div`
    display: flex;
    margin: 20px auto 0px auto;
    justify-content: center;
    align-items: center;
`;

interface SettingBtnProps {
    bg: string;
    color: string;
  }

// step2~이전, 다음 버튼
export const SettingBtn = styled.div<SettingBtnProps>`
    display: flex;
    width: 122px;
    height: 45px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    border: 3px solid #696CEA;
    background: ${(props) => props.bg};
    color: ${(props) => props.color};
    cursor: pointer;
    margin: 0 10px;
    font-weight: 600;
    cursor: pointer;
`;