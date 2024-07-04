import styled from "styled-components";

// 헤더
export const StepHeader = styled.div`
    color: black;
    font-weight: 600;
    font-size: 31px;
    margin-top: 45px;
    text-align: center;
    line-height: 1.5;
`;

// 헤더 문구
export const HeaderText = styled.div`
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
    color: gray;
`;
// 메인
export const StepMain = styled.div`
    margin-top: 40px;
    padding: 0px 60px;
`;

// 내용 박스 컨테이너
export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: cneter;
`;

// 내용 박스
export const ContentBox = styled.div`
    border: 2px solid #F1F1F2;
    padding: 30px 5px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 4px 4px 10px 0px #F1F1F2;
    text-align: center;
    margin: 0px 10px;
`;

// 아이콘
export const ContentIcon = styled.img`
    width: 30px;
    height: 30px;
`;

// 내용 text
export const ContentText = styled.div<{color: string}>`
    line-height: 1.5;
    margin-top: 10px;
    color: ${props => props.color};
`;

// 메인 문구(면접을 시작하지 않으려면 지금 창을 종료해 주세요!)
export const MainText = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    margin-top: 40px;
`;

// 시작 버튼
export const StartBtn = styled.div`
    background-color: #696CEA;
    padding: 10px 0px;
    width: 200px;
    height: 50px;
    margin: 40px auto;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #8285f2;
    }
`;

