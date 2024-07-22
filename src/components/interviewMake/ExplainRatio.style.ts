import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 박스
export const Container = styled.div`
  padding: 50px 30px;
  width: 950px;
  height: 590px;
  border-radius: 10px;
  border: 2px solid var(--gray-08, #F1F1F2);
  background: var(--gray-09, #FBFBFB);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const Title = styled.div`
  margin: 0;
  color: var(--black, #000);
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
`;

// 설명 container
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-bottom: 30px;
`;

// 설명1 (에잇은~)
export const DescriptionPart1 = styled.div`
  color: #272727;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// 설명 강조 부분(직접 평가 비율을 선택)
export const DescriptionHighlight = styled.span`
  color: #696CEA;
  font-size: 16px;
  font-weight: 600;
`;

// 닫기 버튼
export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: gray;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
`;

// 개별 설명 박스 container
export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 835px;
  margin: 10px auto 0px auto;
`;

// 개별 설명 박스
export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background: #EDEDFB;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 270px;
  height: 328px;
`;

export const FeatureTitle = styled.div`
  margin: 10px 0 20px;
  color: #404146;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FeatureDescription = styled.div`
  color: #5C5C5C;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.7;
  margin-left: 5px;
  height: 180px;
`;
