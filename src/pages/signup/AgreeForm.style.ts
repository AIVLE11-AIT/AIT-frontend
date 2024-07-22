import styled from "styled-components";

// 회원가입 div
export const SignUpForm = styled.div`
    width: 700px;
    //height: 850px;
    flex-shrink: 0;
    border-radius: 30px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin: 49px auto;
`;


// 회원가입 페이지 번호 div
export const PageNumberBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;  // 요소들을 수평으로 정렬
    align-items: center;
    margin-top: 35px;
`;

interface PageNumberTextProps {
    color: string;
  }

// 회원가입 페이지 번호 text
export const PageNumberText = styled.span<PageNumberTextProps>`
    font-size: 15px;
    color: ${(props) => props.color};
`;

export const PageNumberIcon = styled.div<{bg:string}>`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;  // 요소들을 수평으로 정렬
    align-items: center;
    background-color: ${(props) => props.bg};
    border-radius: 50px;
    border: 2px solid #606060;
`;


// 회원가입 페이지 번호 icon line
export const PageNumberLine = styled.div`
    width: 31px;
    height: 2px;
    background: #606060;
    margin: auto 0px;
`;

// Sign Up 제목
export const SignUpTitle = styled.div`
    margin-top: 70px;
    margin-left: 50px;
    color: #404146;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 30px;
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
    width: 600px;
    margin: 20px auto;
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

// 서비스 약관, 개인정보 동의 링크
export const Link = styled.div`
    font-weight: 400;
    font-size: 12px;
    margin-left: 20px;
    cursor: pointer;
`;

export const Table = styled.div`
    width: 600px;
    margin: 0px auto;
    border: 1px solid #D0D2D7;
`;

export const Col = styled.div`
    display: flex;
    margin: 0 auto;
    border-bottom: 1px solid #D0D2D7;
`;

export const Row1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    padding: 30px 10px;
    font-size: 14px;
    font-weight: 600;
    border-right: 1px solid #D0D2D7;
`;

export const Row2 = styled.div`
    font-size: 14px;
    line-height: 1.7;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    width: 550px;
`;

export const TableText = styled.div`
    line-height: 1.6;
    font-size: 12px;
    color: #FF4A4A;
    margin-left: 50px;
    margin-top: 20px;
`;
