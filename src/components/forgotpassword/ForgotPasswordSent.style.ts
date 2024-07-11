import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 90px auto;
`;

export const FormWrapper = styled.div`
  width: 590px;
  height: 410px;
  flex-shrink: 0;
  padding: 20px;
  border: 1px solid #d0d2d7;
  background: #fff;
  border-radius: 30px;
  text-align: center;
`;

export const Title = styled.div`
  text-align: center;
  margin: 30px 0px 0px 20px;
  color: var(--black, #000);
  font-family: ABeeZee;
  font-size: 22px;
  font-weight: 600;
  line-height: normal;
`;

export const SubTitle = styled.div`
  text-align: center;
  margin: 30px 0px 0px 20px;
  color: var(--black, #000);
  font-family: ABeeZee;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
`;

export const InputForm = styled.form`
  width: 100%;
  margin-top: 20px;
`;

export const EmailIconWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 100px;
`;

export const BtnContainer = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button<{ secondary?: boolean; disabled?: boolean }>`
  width: 400px;
  height: 46px;
  padding: 10px;
  margin: 13px 0;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #696cea;
  }
`;


