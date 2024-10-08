import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    height: auto;
    padding: 20px;
  }
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #0d0d0d;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: left;
  align-self: flex-start;
  margin-left: 20px;

  @media (max-width: 768px) {
     margin-left: 0px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const BottomButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const ActionButton = styled.button`
  padding: 10px 20px;
  background-color: #696cea;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 13px;
  }
  
`;

export const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    vertical-align: top;
  }

  th {
    background-color: #f5f5f5;
    text-align: center;
  }

  td[colspan="3"] {
    text-align: left;
  }

  
`;

export const BottomTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 0px;
`;

export const BottomRow = styled.tr`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BottomStatusCell = styled.td`
  padding: 10px 20px;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  color: black;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

export const BottomCommentsCell = styled.td`
  padding: 10px 20px;
  background-color: #696cea;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Bottom = styled.th`
  display: flex;
  gap: 0px;
  margin-left: auto;
`;

export const BottomStatus = styled.th`
  padding: 10px 20px;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  color: black;
  font-size: 15px;
  font-weight: 500;
`;

export const BottomComments = styled.th`
  padding: 10px 20px;
  background-color: #696cea;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  &:first-child {
    text-align: center;
  }
`;

export const TableRow = styled.tr`
  justify-content: center;
  align-items: center;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: white;

  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TitleTableCell = styled(TableCell)`
  width: 65%;
`;

export const DateTableCell = styled(TableCell)`
  width: 20%;
`;

export const ContentTableRow = styled.tr`
  height: 250px;
`;

export const AnswerTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const RowTable = styled.tr`
  height: 30px;
`;

export const AnswerTitle = styled.th`
  padding: 10px;
  border: none;
  color: #0d0d0d;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  align-self: center;
`;

export const AnswerTableCell = styled.td`
  padding: 10px;
  border: none;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CenterTableCell = styled(TableCell)`
  text-align: center;
`;

export const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnswerTextArea = styled.textarea`
  height: 100px;
  width: 1050px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d0d2d7;
  font-size: 14px;
  resize: none;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #696cea;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  position: absolute;
  bottom: 50px;
  right: 70px;
  &:hover {
    background-color: #0056b3;
  }


`;

export const NoAnswerText = styled.div`
  color: #404146;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0;
  text-align: center;
  align-items: center;
  width: 100%;
`;

export const AnswerContainer = styled.div`
  height: 100px;
  width: 1050px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d0d2d7;
  font-size: 14px;
  text-align: left;
  margin-bottom: 20px;
  position: relative;
`;
