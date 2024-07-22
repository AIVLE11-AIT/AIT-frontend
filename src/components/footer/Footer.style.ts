import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #272727;
  padding: 10px 20px 100px 20px;
`;

export const FooterTitle = styled.h4`
  margin: 50px auto 70px auto;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(91deg, #C794E7 -16.62%, #696CEA 26.43%, #A077FF 68.84%, #484CF8 111.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FooterSectionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto; 
  gap: 20px;
`;

export const FooterSection = styled.div`
  margin: 20px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  text-align: left;
 `;

 export const FooterText = styled.p`
  margin: 7px 0;
  color: #FFF;
  font-size: 13px;
`;

export const FooterSubTitle = styled.div`
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: pointer;
`;
