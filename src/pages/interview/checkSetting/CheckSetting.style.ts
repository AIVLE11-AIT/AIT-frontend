import styled from "styled-components";

// 메인 박스
export const InterviewComponent = styled.div`
    width: 1160px;
    height: 490px;
    flex-shrink: 0;
    border-radius: 35px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin: 30px auto 0 auto;
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