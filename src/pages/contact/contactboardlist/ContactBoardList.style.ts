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
  align-items: flex-start;
  text-align: center;
  padding: 40px;
  width: 1260px;
  height: 630px;
  border-radius: 30px;
  border: 1px solid #d0d2d7;
  background: #fff;
  position: relative;
`;

export const Title = styled.h1`
  color: #0d0d0d;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: left;
  align-self: flex-start;
  margin-left: 20px;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  gap: 20px;
`;

export const SearchInput = styled.input`
  width: 75%;
  height: 46px;
  padding: 0 20px 0 40px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 25px;
  outline: none;
  box-sizing: border-box;
  margin: 0 auto;
  align-self: flex-start;
  margin-left: 10px;
`;

export const CreateButton = styled.button`
  height: 46px;
  padding: 0 20px;
  border: none;
  border-radius: 25px;
  background-color: #696cea;
  cursor: pointer;
  margin-left: 20px;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

export const SearchInputIcon = styled.img`
  position: absolute;
  left: 20px;
  width: 22px;
  height: 22px;
`;

export const TotalPost = styled.div`
  color: #0d0d0d;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  text-align: left;
  align-self: flex-start;
  margin-left: 20px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const ColGroup = styled.colgroup``;

export const TableHead = styled.thead`
  background-color: #f4f4f4;
  border-bottom: 2px solid #d0d2d7;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableHeader = styled.th`
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #333;
  border-bottom: 1px solid #d0d2d7;
`;

export const TableBody = styled.tbody`
`;

export const TableCell = styled.td`
  padding: 15px;
  text-align: center;
  font-size: 14px;
  color: #666;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
`;

export const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;  
  display: flex;
  justify-content: center;
`;

export const Pagination = styled.div`
  display: flex;
`;

export const PageNumber = styled.div<{ active?: boolean }>`
  padding: 10px 0px;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#696cea' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  text-align: center;

  &:hover {
    background-color: #5757d1;
    color: #fff;
  }
`;
