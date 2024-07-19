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
            에잇은 답변 분석, 음성 분석, 행동 분석 세 가지 분야에 대해 면접관이 
            <br/><E.DescriptionHighlight>직접 평가 비율을 선택</E.DescriptionHighlight> 하여 맞춤형으로 지원자들의 면접 결과를 제공합니다.
          </E.DescriptionPart1>
        </E.Description>
        <E.FeaturesWrapper>
          <E.Feature>
            <E.FeatureTitle>답변 분석 📄</E.FeatureTitle>
            <E.FeatureDescription>감정 상태, 우수 답변과의 유사성, 답변의 적합성을 평가합니다. 감정 상태는 진정성과 태도를, 우수 답변과의 유사성은 답변의 질을, 답변의 적합성은 타당성과 관련성을 판단합니다.</E.FeatureDescription>
          </E.Feature>
          <E.Feature>
            <E.FeatureTitle>음성 분석 🗣️</E.FeatureTitle>
            <E.FeatureDescription>목소리 크기, 발화 속도, 습관어 사용을 평가합니다. 목소리 크기는 자신감과 명료성을, 발화 속도는 긴장도와 의사소통 능력을, 습관어 사용은 신뢰성과 준비도를 판단합니다.</E.FeatureDescription>
          </E.Feature>
          <E.Feature>
            <E.FeatureTitle>행동 분석 👋🏻</E.FeatureTitle>
            <E.FeatureDescription>시선 처리, 얼굴 위치, 감정 분석, 몸 위치, 손 위치를 평가합니다. 시선 처리는 주의력과 집중도를, 얼굴 위치는 자신감과 태도를, 감정 분석은 감정 상태를, 몸 위치와 손 위치는 자세와 표현력을 판단합니다.</E.FeatureDescription>
          </E.Feature>
        </E.FeaturesWrapper>
      </E.Container>
    </E.Overlay>
  );
}

export default ExplainRatio;
