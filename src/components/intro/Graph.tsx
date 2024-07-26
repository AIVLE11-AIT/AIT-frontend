import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 20px 10px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
    color: #404146;
  }

  th {
    font-size: 20px;
  }

  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    th, td {
      font-size: 14px;
      padding: 10px 5px;
    }

    th {
      font-size: 16px;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

function Graph() {
  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>비교 항목</th>
            <th>AIT</th>
            <th>A사</th>
            <th>B사</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>영상 면접</td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo" /></td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo" /></td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo" /></td>
          </tr>
          <tr>
            <td>행동 분석</td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo" /></td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo" /></td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo" /></td>
          </tr>
          <tr>
            <td>음성 분석</td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo" /></td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo" /></td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo" /></td>
          </tr>
          <tr>
            <td>답변 분석</td>
            <td>
              <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo" />
              <div style={{ fontWeight: '400', marginTop: '10px', fontSize: '15px' }}>응시자 답변의 맥락을 분석 및 평가</div>
            </td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo" /></td>
            <td></td>
          </tr>
          <tr>
            <td>STT<br />(Speech-to-Text)</td>
            <td>
              <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo" />
              <div style={{ fontWeight: '400', marginTop: '10px', fontSize: '15px' }}>96.9%의 정확도</div>
            </td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo" /></td>
            <td></td>
          </tr>
          <tr>
            <td>영어 면접</td>
            <td>
              <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo" />
              <div style={{ fontWeight: '400', marginTop: '10px', fontSize: '15px' }}>영어 답변 AI분석 가능</div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>기업 맞춤형</td>
            <td>
              <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo" />
              <div style={{ fontWeight: '400', marginTop: '10px', fontSize: '15px' }}>분석 비율 직접 조정 가능</div>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>자소서 기반 질문</td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo" /></td>
            <td></td>
            <td><img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo" /></td>
          </tr>
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default Graph;
