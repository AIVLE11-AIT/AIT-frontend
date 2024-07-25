import React from 'react'
import * as H from './Footer.style';
import { useNavigate } from 'react-router-dom';

function Footer() {

    const navigate = useNavigate();
    // 서비스 이용약관 클릭 시
    function onClickTermsOfService(){
        navigate('/terms-of-service');
    }
    // 서비스 이용약관 클릭 시
    function onClickPrivacyPolicy(){
        navigate('/privacy-policy');
    }

    function onClickLink(){
        window.location.href = 'https://www.instagram.com/ait.official_?igsh=enloZ2YzMHVreGR4&utm_source=qr';
    }
  return (
    <div>
        <H.Footer>
            <H.FooterTitle>
                기업 맞춤형 인재를 뽑기 위한
                <br />
                단 하나의 솔루션
            </H.FooterTitle>
            <H.FooterSectionsWrapper>
                <H.FooterSection>
                    <H.FooterSubTitle>도입 문의</H.FooterSubTitle>
                    <H.FooterText>Lead | &nbsp;&nbsp;이미지</H.FooterText>
                    <H.FooterText>Tel | &nbsp;&nbsp;010-1234-5678</H.FooterText>
                    <H.FooterText>E-mail | &nbsp;&nbsp;jpg@naver.com</H.FooterText>
                </H.FooterSection>
                <H.FooterSection>
                    <H.FooterSubTitle>공식 계정</H.FooterSubTitle>
                    <H.FooterText onClick={onClickLink}>Instagram | &nbsp;&nbsp;@ait.official_</H.FooterText>
                    <H.FooterText>E-mail | &nbsp;&nbsp;aitech0311@gmail.com</H.FooterText>
                </H.FooterSection>
                <H.FooterSection>
                    <H.FooterSubTitle onClick={onClickTermsOfService}>서비스 이용 약관</H.FooterSubTitle>
                </H.FooterSection>
                <H.FooterSection>
                    <H.FooterSubTitle onClick={onClickPrivacyPolicy}>개인정보처리방침</H.FooterSubTitle>
                </H.FooterSection>
            </H.FooterSectionsWrapper>
        </H.Footer>
    </div>
  )
}

export default Footer;