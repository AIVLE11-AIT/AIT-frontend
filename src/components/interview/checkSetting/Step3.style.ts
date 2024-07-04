import styled from "styled-components";

// 헤더
export const StepHeader = styled.div`
    color: black;
    font-weight: 600;
    font-size: 35px;
    margin-top: 45px;
    margin-left: 60px;
`;

// 접근 허용 안내 문구
export const Step3Text = styled.div`
    color: #35393e;
    font-weight: 600;
    font-size: 14px;
    margin-left: 60px;
    margin-top: 20px;
    border-left: 3px solid #696CEA;
    padding: 5px 20px;
    line-height: 1.5;
`;

// 메인
export const StepMain = styled.div`
    margin: 10px 0px;
    padding: 0px 60px;
`;

// 녹화 중 표시
export const Record = styled.div<{recordState:boolean}>`
    font-weight: 600;
    color: ${props => (props.recordState ? '#3CB371' : '#868f9d')};
    margin-bottom: 10px;
`;

// 카메라 컴포넌트
export const CameraComponent = styled.div`
    width: 630px;
    height: 300px;
    margin: 0px auto;
`;

// 카메라
export const Camera = styled.video<{border:string}>`
    width: 100%;  /* 컨테이너의 너비에 맞게 설정 */
    height: 100%;  /* 컨테이너의 높이에 맞게 설정 */
    background-color: #000;
    object-fit: cover;  /* 비디오를 컨테이너에 맞게 조정 */
    border: 2px solid ${(props) => props.border};
    border-radius: 5px;
`;

// 녹화 시작.중지 버튼 BOX
export const RecordBtnBox = styled.div`
    margin: 0px auto;
    display: flex;
    justify-content: center;
`;

// 녹화 시작.중지 버튼
export const RecordBtn = styled.button<{btnState:boolean}>`
    padding: 10px 30px;
    margin-top: 15px;
    border-radius: 5px;
    border: none;
    background-color: ${props => (props.btnState ? "#ff4f09" : "#696CEA")};
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
`;

// 미리보기 비디오
export const ViewContainer = styled.div`
    width: 630px;
    height: 340px;
    margin: 10px auto;
`;
