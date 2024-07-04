import styled from "styled-components";

// 헤더
export const StepHeader = styled.div`
    color: black;
    font-weight: 600;
    font-size: 35px;
    margin-top: 60px;
    margin-left: 60px;
`;

// 메인
export const StepMain = styled.div`
    margin: 10px 0px;
    padding: 40px 60px;
`;

// 전체 약관 동의 박스
export const AgreeBox = styled.div`
    border: 1px solid #D0D2D7;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #35393e;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
`;

// 체크박스
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
    width: 20px;
    height: 20px;
    margin-right: 20px;
    accent-color: #35393e; /* 체크된 상태의 색상 */
    border: 2px solid #868f9d; /* 체크박스 테두리 색상 */
    border-radius: 4px; /* 모서리 둥글게 */
    cursor: pointer;

    &:checked {
        background-color: #35393e; /* 체크된 상태의 배경 색상 */
    }
`;

// 제목
export const Step2Info = styled.div`
    color: #868f9d;
    font-size: 14px;
    font-weight: 600;
    margin-top: 30px;
`;

// 약관 동의 상세 정보 내용 박스
export const AgreeContentBox = styled.div`
    border: 1px solid #D0D2D7;
    padding: 15px;
    border-radius: 5px;
    margin: 15px 0px;
`;

interface ContentText {
    weight: string
    size: string
}
export const Content = styled.div<ContentText>`
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.size};
    color: #35393e;
    line-height: 1.3;
    margin-bottom: 10px;
`;