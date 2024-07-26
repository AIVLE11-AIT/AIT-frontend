import styled from 'styled-components';

// 전체 컨테이너
export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 45px auto;
`;

// 로그인 box
export const FormWrapper = styled.div`
    width: 460px;
    height: 550px;
    flex-shrink: 0;
    padding: 40px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    border-radius: 30px;
    text-align: center;

    @media screen and (max-width: 600px){
        width: 330px;
        height: 540px;
    }
`;


// 제목
export const Title = styled.div`
    color: #404146;
    font-size: 35px;
    font-weight: 600;
    text-align: left;
    margin: 20px 0px 0px 15px;

    @media (max-width: 600px) {
        margin-left: 3px;
        font-size: 27px;
        margin-top: 15px;
    }
`;  

// 로그인 폼
export const LoginInputForm = styled.form`
    width: 100%;
    margin-top: 40px;
`;

// 로그인 폼 입력 container
export const LoginWrap = styled.div`
    width: 100%;
`;

// 입력 내용 제목 박스
export const LoginLabel = styled.div`
    display: flex;
    align-items: center;
    margin-left: 17px;
    margin-bottom: 15px;
    margin-top: 25px;

    @media (max-width: 600px) {
        margin-left: 0px;
    }
`;

// 입력 내용 제목 아이콘
export const LoginLabelIcon = styled.div`
  width: 7px;
  height: 7px;
  background-color: #696CEA;
  border-radius: 30px;
  margin: auto 0;
`;

// 입력 내용 제목 text
export const Label = styled.div`
    color: #404146;
    font-size: 15px;
    font-weight: 600;
    margin-left: 8px;

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const InputWrap = styled.div`
    width: 100%;
    display: flex;
    margin-left: 16px;

    @media (max-width: 600px) {
        margin-left: 0px;
    }
`;

// 입력 박스
export const InputBox = styled.input`
    width: 350px;
    height: 45px;
    border-radius: 11px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    font-size: 13.5px;
    font-weight: 400;
    padding: 15px 18px;
    color: #0D0D0D;

    &::placeholder {
      color: #D0D2D7; /* placeholder 색상 설정 */
    }
      
    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

// 에러 메시지
export const Error = styled.div`
    display: flex;
    color: #FF4A4A;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 25px;
    height: 5px;

    @media (max-width: 600px) {
        margin-left:px;
        font-size: 9px;
    }
`;

// 버튼 컨테이너
export const BtnContainer = styled.div`
    margin-top: 15px;
`;

export const Button = styled.button<{ secondary?: boolean, disabled?: boolean}>`
    width: 350px;
    height: 45px;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    color: white;

    background: ${({ secondary, disabled }) => 
      disabled ? '#ccc' : (secondary ? '#404146' : '#696CEA')};
    cursor: pointer;

    &:hover {
      background: ${({ secondary, disabled }) => 
        disabled ? '#ccc' : (secondary ? '#555' : '#5757CE')};
    }

    @media (max-width: 600px) {
        font-size: 14px;
        height: 40px;
    }    
`;

// 비밀번호 찾기 컨테이너
export const FindPwContainer = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 18px;

    @media (max-width: 600px) {
        margin-right: 5px;
    }
`;

// 비밀번호 찾기
export const Link = styled.div`
    display: flex;
    align-items: center;
    color: #404146;
    font-size: 14px;
    font-weight: 500;
    margin-left: auto;

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

// 비밀번호 찾기 화살표 아이콘
export const FindPwIcon = styled.img`
    margin-left: 5px;
    width: 16px;
    height: 16px;
`;  
