import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  border-radius: 10px;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Icon = styled.div<{ size: number }>`
  img {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }
`;

// 진행 중인 면접이 없습니다.
export const Message = styled.div`
  color: #404146;
  font-size: 20px;
  font-weight: 600;
  padding: 200px 10px;
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
  align-self: flex-start;
`;

export const ResultMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px 0px 40px;
`;
