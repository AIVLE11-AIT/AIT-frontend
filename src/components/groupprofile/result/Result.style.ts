import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0px 0px;
  }
`;

export const Box = styled.div`
  width: 400px;
  flex-shrink: 0;
  padding: 25px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  border-radius: 26px;
  border: 2px solid var(--gray-08, #F1F1F2);
  background: var(--white, #FFF);
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  color: var(--gray-01, #303030);
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  color: #404146;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 8px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  border: none;
`;

// 삭제 버튼
export const DeleteButton = styled(Button)`
  background: #D0D2D7;
  color: white;
  font-size: 13px;
  font-weight: 500;
  padding: 5px 12px 6px 13px;
  border: 2px solid #D0D2D7;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 4px 10px 5px 11px;
  }
`;

// 수정 버튼
export const EditButton = styled(Button)`
  background: white;
  color: #404146;
  border: 2px solid #404146;
  font-size: 13px;
  font-weight: 500;
  padding: 5px 12px 6px 13px;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 4px 10px 5px 11px;
  }
`;

export const Icon = styled.div<{ size: number }>`
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    margin-right: 10px;
  }
`;
