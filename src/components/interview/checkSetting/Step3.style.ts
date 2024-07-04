import styled from "styled-components";

// 헤더
export const StepHeader = styled.div`
    color: black;
    font-weight: 600;
    font-size: 35px;
    margin-top: 60px;
    margin-left: 60px;
`;

// 접근 허용 안내 문구
export const Step3Text = styled.div`
    color: #35393e;
    font-weight: 600;
    font-size: 14px;
    //margin-left: 60px;
    margin-top: 20px;
    //border-left: 3px solid #696CEA;
    padding: 5px 20px;
    line-height: 1.5;
    text-align: center;
`;

// text(넓은 하늘로의 비상을 꿈꾸며)
export const Step3Txt = styled.text`
    color: #696CEA;
`;

// 메인
export const StepMain = styled.div`
    margin: 10px 0px;
    padding: 0px 60px;
`;

// 녹화 중 표시(text)
export const Record = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.50);
    padding: 8px 13px;
    font-size: 13px;
    border-radius: 20px;
    color: white;
`;

// 녹화 중 아이콘
export const RecordTxt = styled.text<{recordState:boolean}>`
    margin-right: 10px;
    color: ${props => (props.recordState ? '#75A812' : '#FF4A4A')};
`;

// 카메라 컴포넌트
export const CameraComponent = styled.div`
    width: 630px;
    height: 300px;
    margin: 0px auto;
    position: relative;
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
    margin: 10px auto;
    display: flex;
    justify-content: center;
`;

// 녹화 시작.중지 버튼
export const RecordBtn = styled.div<{btnState:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid ${props => (props.btnState ? "#FF4A4A" : "#D0D2D7")};
    color: #FF4A4A;
    background-color: white;
    cursor: pointer;
    width: 65px;
    height: 65px;
`;

// 녹화 시작.중지 버튼 아이콘
export const RecordBtnIcon = styled.div`
    border-radius: 50px;
    border: none;
    width: 50px;
    height: 50px;
    color: #FF4A4A;
    background-color: #FF4A4A;
    cursor: pointer;
`;

// 다시 녹화 버튼
export const ReRecordBtn = styled.button<{btnState:boolean}>`
    padding: 10px 30px;
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    background-color: ${props => (props.btnState ? "#ff4f09" : "#696CEA")};
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #8285f2;
    }
`;

// 미리보기 비디오
export const ViewContainer = styled.div`
    width: 630px;
    height: 340px;
    margin: 10px auto;
`;
