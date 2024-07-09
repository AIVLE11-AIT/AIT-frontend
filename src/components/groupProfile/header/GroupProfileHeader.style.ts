import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const KTTitle = styled.div`
  text-align: right;
  font-size: 27px;
  color: var(--black, #000);
  font-weight: 600;
  margin-left: 80px;
`;

// 만들기 버튼
export const CreateButton = styled.button`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  color: #696CEA;
  cursor: pointer;
  border-radius: 10px;
  border: 1.7px solid #696CEA;
  background: white;
  font-size: 16px;
  font-weight: 600;
  margin-right: 85px;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  width: 350px;
  height: 1px;
  flex-shrink: 0;
  border-radius: 21px;
  background: var(--gray-06, #DFDFDF);
`;

export const Icon = styled.div<{ size: number }>`
  img {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }
  display: flex;
  align-items: center;
`;

// 맨 위 이동 버튼
export const FloatingButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 50px;
  background-color: #696CEA;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 10px 10px 50px 0px #9092F0;
`;

export const TopIcon = styled.img`
  filter: white;
`;