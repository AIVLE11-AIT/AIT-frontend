import styled from "styled-components";

// 회원가입 div
export const SignUpForm = styled.div`
    width: 530px;
    height: 900px;
    flex-shrink: 0;
    border-radius: 30px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin: 49px auto;

    @media (max-width: 750px) {
        width: 350px;
    }
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

    @media (max-width: 750px) {
        font-size: 12px;
    }
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

    @media (max-width: 750px) {
        width: 25px;
        height: 25px;
    }
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
    margin-left: 60px;
    color: #404146;
    font-size: 35px;
    font-weight: 600;

    @media (max-width: 750px) {
        font-size: 25px;
        margin-left: 45px;
        margin-top: 50px;
    }
`;

// 회원가입 input form
export const SignUpInputForm = styled.form`
    margin-top: 50px;
`;

// Sign Up wrap
export const SignUpWrap = styled.div`
    margin-left: 60px;
    margin-top: 20px;

    @media (max-width: 600px) {
        margin-left: 40px;
        margin-left: 30px;
    }
`;

// 회원가입 label
export const SignUpLabel = styled.div`
    display: flex;
`;

// 회원가입 라벨 아이콘
export const SignUpLabelIcon = styled.div`
    width: 8px;
    height: 8px;
    background-color: #696CEA;
    border-radius: 30px;
    margin: auto 0;
`;

// 라벨 text
export const Label = styled.div`
    color: #404146;
    font-size: 15px;
    font-weight: 600;
    margin-left: 10px;

    @media (max-width: 700px) {
        font-size: 14px;
    }
`;

// input wrap
export const InputWrap = styled.div`
    display: flex;

    @media (max-width: 750px) {
        width: 290px;
    }
`;

// 입력 박스
export const InputBox = styled.input`
    width: 300px;
    height: 45px;
    border-radius: 11px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    font-size: 14px;
    font-weight: 400;
    padding: 15px 18px;
    margin-top: 12px;
    color: #0D0D0D;

    &::placeholder {
        color: #D0D2D7;/* placeholder 색상 설정 */

    @media (max-width: 750px) {
        font-size: 11px;
        height: 40px;
    }
`;

// 인증번호 버튼
export const CheckNumBtn = styled.div<{ toggle: boolean }>`
    height: 45px;
    border-radius: 11px;
    background: #D0D2D7;
    display: flex;
    width: 112px;
    margin: auto auto 0 10px;
    font-weight: 600;
    color: white;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.toggle ? `#696CEA` : `#D0D2D7`)};
    cursor: pointer;

    &:hover{
        background: ${(props) => (props.toggle ? `#696CEA` : `gray`)};
    }

    @media (max-width: 750px) {
        font-size: 9px;
    }
`;

// 에러 메시지
export const Error = styled.div`
    color: #FF4A4A;
    font-size: 12px;
    margin-top: 8px;
    height: 10px;
    
    @media (max-width: 600px) {
        font-size: 8px;
    }
`;

// 버튼 wrap
export const SubmitWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

// 이전 버튼
export const BackBtn = styled.button`
    display: flex;
    width: 110px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 3px solid #696CEA;
    color:  #696CEA;
    background-color: white;
    font-size: 15px;
    font-weight: 600;
    margin-right: 12px;

    @media (max-width: 600px) {
        width: 90px;
        height: 35px;
        font-size: 13px;
    }
`;

// 완료 버튼
export const SignUpBtn = styled.button<{ toggle: boolean }>`
    display: flex;
    width: 110px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: ${(props) => (props.toggle ? `#696CEA` : `#D0D2D7`)};
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 600;

    @media (max-width: 600px) {
        width: 90px;
        height: 35px;
        font-size: 13px;
    }
`;