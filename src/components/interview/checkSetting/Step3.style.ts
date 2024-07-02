import styled from "styled-components";

// 헤더
export const StepHeader = styled.div`
    color: black;
    font-weight: 600;
    font-size: 35px;
    margin-top: 45px;
    margin-left: 60px;
    display: flex;
`;

// 접근 허용 안내 문구
export const Step3Text = styled.div`
    color: #35393e;
    font-weight: 600;
    font-size: 14px;
    margin: auto 0px 0px 0px;
    padding: 0px 20px;
`;

// 메인
export const StepMain = styled.div`
    margin: 30px 0px;
    padding: 0px 60px;
`;

// 녹화 중 표시
export const Record = styled.div<{recordState:boolean}>`
    font-weight: 600;
    color: ${props => (props.recordState ? 'green' : '#868f9d')};
    margin-bottom: 10px;
`;

// 카메라 컴포넌트
export const CameraComponent = styled.div`
    width: 500px;
    height: 280px;
    margin: 0px auto;
`;

// 카메라
export const Camera = styled.video`
    width: 100%;  /* 컨테이너의 너비에 맞게 설정 */
    height: 100%;  /* 컨테이너의 높이에 맞게 설정 */
    background-color: #000;
    object-fit: cover;  /* 비디오를 컨테이너에 맞게 조정 */
    border: 2px solid #D0D2D7;
    border-radius: 5px;
`;