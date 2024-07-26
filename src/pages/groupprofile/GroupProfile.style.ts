import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  border-radius: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-direction: row; /* 아이콘들이 행으로 나열되도록 설정 */

  @media (max-width: 600px) {
    gap: 10px;
    flex-direction: row; /* 작은 화면에서도 행으로 나열되도록 유지 */
  }
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
  font-size: 16px; /* 폰트 크기 줄임 */
  font-weight: 600;
  padding: 200px 10px;

  @media (max-width: 600px) {
    font-size: 14px; /* 작은 화면에서 폰트 크기 더 줄임 */
    padding: 100px 10px;
  }
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    justify-content: center;
  }
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

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ResultMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px 0px 40px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;
