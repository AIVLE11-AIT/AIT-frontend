import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
`;

export const Box = styled.div`
  width: 400px;
  height: 200px;
  flex-shrink: 0;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  border-radius: 26px;
  border: 2px solid var(--gray-08, #F1F1F2);
  background: var(--white, #FFF);
`;

export const Title = styled.h2`
  color: var(--gray-01, #303030);
  font-family: "Abhaya Libre SemiBold";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  color: #404146;
  font-family: ABeeZee;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  height: 30px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 9px;
  border: none;
`;

export const DeleteButton = styled(Button)`
  background: #ccc;
  color: black;
  font-family: "Abhaya Libre SemiBold";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const EditButton = styled(Button)`
  background: #696cea;
  color: white;
  font-family: "Abhaya Libre SemiBold";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Icon = styled.div<{ size: number }>`
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;