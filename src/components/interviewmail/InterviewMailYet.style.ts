import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #D0D2D7;
  background: #FFF;
  width: 1000px;
  height: 580px;
  margin-top: 30px;
  margin-left: 30px;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  margin-top: -50px;
`;

// 메일 전송을 완료해 주세요
export const Message = styled.div`
  margin-bottom: 20px;
  color: #404146;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
`;

export const SubMessage = styled.p`
  margin-bottom: 20px;
  color: var(--gray-03, #757575);
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
`;

// 메일 아이콘
export const ImageWrapper = styled.div`
  margin-bottom: 50px;
  font-size: 100px;
`;

// 메일 전송하기 버튼
export const Button = styled.button`
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  width: 352px;
  height: 49px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #696CEA;
  margin-top: 30px;
  font-weight: 600;
`;
