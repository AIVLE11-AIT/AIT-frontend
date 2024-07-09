import React from 'react';
import * as E from './ExplainRatio.style';

interface ExplainRatioProps {
  closeModal: () => void;
}

function ExplainRatio({ closeModal }: ExplainRatioProps) {
  return (
    <E.Overlay>
      <E.Container>
        <E.Header>
          <E.Title>평가 비율에 대해 궁금해요!</E.Title>
          <E.CloseButton onClick={closeModal}>닫기</E.CloseButton>
        </E.Header>
        <E.Description>
          <E.DescriptionPart1>
            인터비는 답변 분석, 음성 분석, 행동 분석 세 가지 분야에 대해 면접관이 
            <br/><E.DescriptionHighlight>직접 평가 비율을 선택</E.DescriptionHighlight> 하여 맞춤형으로 지원자들의 면접 결과를 제공합니다.
          </E.DescriptionPart1>
        </E.Description>
        <E.FeaturesWrapper>
          <E.Feature>
            <E.FeatureTitle>답변 분석</E.FeatureTitle>
            <E.FeatureDescription>답변 분석 설명</E.FeatureDescription>
          </E.Feature>
          <E.Feature>
            <E.FeatureTitle>음성 분석</E.FeatureTitle>
            <E.FeatureDescription>음성 분석 설명</E.FeatureDescription>
          </E.Feature>
          <E.Feature>
            <E.FeatureTitle>행동 분석</E.FeatureTitle>
            <E.FeatureDescription>행동 분석 설명</E.FeatureDescription>
          </E.Feature>
        </E.FeaturesWrapper>
      </E.Container>
    </E.Overlay>
  );
}

export default ExplainRatio;
