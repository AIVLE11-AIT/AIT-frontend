import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 0px 0px 185px 0px;
  box-shadow: 0px 4px 15.9px 0px rgba(0, 0, 0, 0.05);
  background-color: transparent;    
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-row;
  gap: 2px;
  margin-bottom: 20px;
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border: none;
  cursor: pointer;
  color: #6D6D6D;
  font-family: "Abhaya Libre SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  color: var(--gray-01, #303030);
  font-family: "Abhaya Libre SemiBold";
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
  color: var(--red-01, #FF4A4A);
  font-family: "Abhaya Libre SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DetailsContainer = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid var(--gray-08, #F1F1F2);
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: var(--gray-02, #606060);
  font-family: "Abhaya Libre SemiBold";
  font-size: 13px;
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
