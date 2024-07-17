import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  width: 1260px;
  height: 630px;
  border-radius: 30px;
  border: 1px solid #D0D2D7;
  background: #FFF;
`;

export const Logo = styled.div`
  margin-top: 150px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: #0D0D0D;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  width: 540px;
  height: 46px;
  padding: 0 20px 0 40px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 25px;
  outline: none;
  box-sizing: border-box;
  margin: 0 auto;
  cursor: pointer;
`;

export const SearchInputIcon = styled.img`
  position: absolute;
  left: 330px;
  width: 22px;
  height: 22px;
`;
