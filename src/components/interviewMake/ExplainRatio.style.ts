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

export const Container = styled.div`
  padding: 20px;
  width: 951px;
  height: 619px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid var(--gray-08, #F1F1F2);
  background: var(--gray-09, #FBFBFB);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
`;

export const Title = styled.div`
  margin: 0;
  color: var(--black, #000);
  font-family: "Abhaya Libre SemiBold";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-bottom: 50px;
`;

export const DescriptionPart1 = styled.div`
  color: #272727;
  font-family: "Abhaya Libre Medium";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DescriptionHighlight = styled.span`
  color: #FF4A4A;
  font-family: "Abhaya Libre Medium";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #272727;
  text-align: right;
  font-family: "Abhaya Libre Medium";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  text-align: left;
  border-radius: 15px;
  border: 2px solid var(--gray-08, #F1F1F2);
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background: #FFE2E4;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 284px;
  height: 328px;
  flex-shrink: 0;
  opacity: 0.7;
`;

export const FeatureTitle = styled.div`
  margin: 10px 0 20px;
  color: #F22A36;
  font-family: "Abhaya Libre SemiBold";
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FeatureDescription = styled.div`
  margin: 0;
  color: #FF7C84;
  font-family: "Abhaya Libre SemiBold";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
