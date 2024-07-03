import styled from "styled-components";

// 헤더
export const StepHeader = styled.div`
    color: black;
    font-weight: 600;
    font-size: 35px;
    margin-top: 45px;
    margin-left: 60px;
`;

// 메인
export const StepMain = styled.div`
    margin-top: 30px;
    padding: 0px 60px;
`;

interface BoxBorderProps {
    border: string;
}

// Step1 컨테이너
export const Step1Container = styled.div<BoxBorderProps>`
    padding: 10px 20px;
    border-left: 3px solid ${(props) => props.border};
`;

interface NoticeTextProps {
    position: string;
}

// Step1 주의사항, 안내사항 text
export const NoticeText = styled.div<NoticeTextProps >`
    color: #35393e;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: ${(props) => props.position};
`;

// 면접 시간, 면접 문항 수 container
export const WrapContainer = styled.div`
    display: flex;
    margin: 30px 0px;
`;

// 면접 시간, 면접 문항 수 wrap
export const Step1Wrap = styled.div<BoxBorderProps>`
    margin-right: 100px;
    border-left: 3px solid ${(props) => props.border};
    padding: 10px 20px;
`;

// 정보 text1
export const Step1Info1 = styled.div`
    color: #868f9d;
    font-size: 14px;
    margin-bottom: 10px;
`;

// 정보 text2 (상세 정보)
export const Step1Info2 = styled.div`
    color: #35393e;
    font-size: 25px;
    font-weight: 600;
`;

// 면접 안내 문구
export const Step1Info3 = styled.div`
    color: #35393e;
    font-weight: 500;
    font-size: 15px;
    margin-top: 15px;
`;