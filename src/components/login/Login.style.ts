import styled from 'styled-components';

export const Container = styled.div`
  width: 530px;
  height: 780px;
  flex-shrink: 0;
  margin: 49px auto;
`;

export const FormWrapper = styled.div`
  width: 541px;
  height: 651px;
  flex-shrink: 0;
  padding: 40px;
  border: 1px solid #D0D2D7;
  background: #FFF;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.div`
  color: #404146;
  font-family: Spartan;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  margin: 20px 0;
  margin-left: 30px;
  margin-top: 40px;
`;  

export const LoginInputForm = styled.form`
  width: 100%;
`;

export const LoginWrap = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const LoginLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 30px;
  margin-top: 40px;
`;

export const LoginLabelIcon = styled.div`
  width: 9px;
  height: 9px;
  background-color: #696CEA;
  border-radius: 30px;
  margin: auto 0;
`;

export const Label = styled.div`
  color: #404146;
  font-size: 16px;
  font-weight: 600;
  margin-left: 6px;
`;

export const InputWrap = styled.div`
  width: 100%;
`;

// 입력 박스
export const InputBox = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 11px;
  border: 1px solid #D0D2D7;
  background: #FFF;
  font-size: 14px;
  font-weight: 500;
  padding: 15px 18px;
  margin-top: 9px;
  color: #0D0D0D;

  &::placeholder {
    color: #D0D2D7; /* placeholder 색상 설정 */
  }
`;

// 에러 메시지
export const Error = styled.div`
  display: flex;
  color: #FF4A4A;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 40px;
`;

export const Button = styled.button<{ secondary?: boolean, disabled?: boolean}>`
  width: 400px;
  height: 45px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: ${({ secondary, disabled }) => 
    disabled ? '#ccc' : (secondary ? '#333' : '#696CEA')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${({ secondary, disabled }) => 
      disabled ? '#ccc' : (secondary ? '#555' : '#5757CE')};
  }
`;

export const Link = styled.a`
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  color: #404146;
  font-family: Spartan;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`;
