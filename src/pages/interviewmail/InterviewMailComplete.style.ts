import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const Message = styled.h1`
  color: #000;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SubMessage = styled.p`
  margin-bottom: 20px;
  text-align: center;
  color: var(--black, #000);
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  width: 352px;
  height: 49px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #696CEA;
  font-family: "Abhaya Libre SemiBold";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
