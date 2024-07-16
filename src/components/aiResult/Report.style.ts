import styled from "styled-components";

// 메인 컨테이너
export const Main = styled.div`
    display: flex;
    margin-top: 20px;
`;
// 정보 컨테이너
export const Container = styled.div`
    width: 370px;
    height: 274px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin-right: 10px;
`;

// 정보 박스 text(행동 분석 결과...)
export const ContainerText = styled.div`
    color: #404146;
    font-size: 14px;
`;

// 정보 박스 title
export const ContainerTitle = styled.div`
    font-weight: 700;
    font-size: 35px;
    margin-top: 12px;
    color: #292D42;
`;

// 막대그래프 전체 컨테이너
export const BarGraph = styled.div`
    display: flex;
    justify-content: center;
`;

// 막대그래프 컨테이너
export const BarBox = styled.div<{ margin: string }>`
    text-align: center;
    margin: 0px ${(props) => (props.margin)};
`;

// 막대그래프 relative
export const BarContainer = styled.div<{ width: string }>`
  width: ${(props) => (props.width)}; /* Width of the bar container */
  height: 120px; /* Height of the bar container */
  display: inline-block;
  vertical-align: bottom;
  position: relative;
  top: 15px;
`;

// 막대그래프 absolute
export const Bar = styled.div<{ score: number, total: number, color:string }>`
  width: 100%; /* Bar width 100% of container */
  height: ${(props) => (props.score / props.total) * 100}% /* Bar height based on score */;
  background-color: ${(props) => (props.color)}; /* Green color for the bar */
  position: absolute;
  bottom: 0;
  transition: height 0.3s ease-in-out; /* Smooth height transition */
  border-radius: 5px;
`;

// 바 label
export const BarLabel = styled.div`
  text-align: center;
  margin-top: 25px;
  font-size: 12px;
  color: #333;
  line-height: 1.3;
`;

// 최종레포트 컨테이너
export const ReportBox = styled.div`
    width: 1130px;
    padding: 30px 35px;
    border-radius: 10px;
    border: 1px solid #D0D2D7;
    background: #FFF;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 50px;
    line-height: 1.7;
`;

// 최종레포트 제목 박스
export const ReportTitle = styled.div`
    margin-bottom: 15px;
    font-size: 17px;
    color: #292D42;
`;

export const ReportText = styled.div`
    font-size: 50px;
    font-weight: 700;
`;