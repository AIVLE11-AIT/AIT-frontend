import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: 100px;

  @media (max-width: 700px) {
    margin-top: -100px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  padding: 40px;
  width: 90%;
  max-width: 1260px;
  height: auto;
  border-radius: 30px;
  border: 1px solid #d0d2d7;
  background: #fff;
  position: relative;
`;

export const Title = styled.h1`
  color: #0d0d0d;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
  text-align: left;
  align-self: flex-start;
  margin-left: 20px;

  @media (max-width: 700px) {
    font-size: 24px;
    margin-bottom: 30px;
    margin-left: 0px;
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #333;
  width: 20%;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  ::placeholder {
    color: #999;
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  height: 300px;
  resize: none;
  ::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: #696cea;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background-color: #0056b3;
  }
`;