import styled from "styled-components";

// 메인
export const StepMain = styled.div`
    margin: 10px 0px;
    padding: 0px 60px;
`;

// 카메라 컴포넌트
export const CameraComponent = styled.div`
    width: 630px;
    height: 300px;
    margin: 0px auto;
    position: relative;
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
