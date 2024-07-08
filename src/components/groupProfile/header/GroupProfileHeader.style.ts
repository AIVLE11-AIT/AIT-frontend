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
  font-family: ABeeZee;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--black, #000);
  font-family: "Abhaya Libre SemiBold";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 60px;
`;

export const CreateButton = styled.button`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  color: white;
  cursor: pointer;
  border-radius: 9px;
  border: 1.7px solid #696CEA;
  background: #696CEA;
  font-family: "Abhaya Libre SemiBold";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  width: 278.933px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 21px;
  background: var(--gray-06, #DFDFDF);
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 75px;
`;

export const Icon = styled.div<{ size: number }>`
  img {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
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
`;