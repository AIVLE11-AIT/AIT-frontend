import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
`;

export const Message = styled.h1`
  margin-bottom: 10px;
  color: var(--gray-01, #303030);
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SubMessage = styled.p`
  margin-bottom: 20px;
  color: var(--gray-03, #757575);
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 30px;
`;

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
  border-radius: 30px;
  background: #696CEA;
  margin-top: 30px;
`;
