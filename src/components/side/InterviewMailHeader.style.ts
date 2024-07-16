import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 330px;
  height: 580px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #D0D2D7;
  background: #FFF;
  margin-top: 30px;
  margin-left: 50px;
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
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// 면접 제목
export const Title = styled.h1`
  margin-bottom: 10px;
  color: black;
  font-size: 22px;
  font-weight: 600;
  padding: 20px 10px;
  line-height: 1.3;
`;

export const DetailsContainer = styled.div`
  padding: 10px;
  border-radius: 15px;
  border: 2px solid var(--gray-08, #F1F1F2);
  padding: 15px 20px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0px;
  color: var(--gray-02, #606060);
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Icon = styled.div<{ size: number }>`
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

// 뒤로가기 버튼
export const BackBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid #696CEA;
  box-shadow: 0px 0px 3.13px 0px #696CEA;
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 6px 0px;
  cursor: pointer;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const BackBtnArrow = styled.img`
  width: 15px;
  height: 15px;
`;