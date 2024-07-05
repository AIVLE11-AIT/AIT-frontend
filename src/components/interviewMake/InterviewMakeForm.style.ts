import InputMask from "react-input-mask";
import styled from "styled-components";

// input form
export const MakeInputForm = styled.form`
    margin-top: 50px;
`;

// Sign Up wrap
export const MakeInputWrap = styled.div`
    margin-top: 20px;
`;

// label box
export const LabelContainer = styled.div`
    display: flex;
`;

// 라벨 아이콘
export const LabelIcon = styled.div`
    width: 9px;
    height: 9px;
    background-color: #696CEA;
    border-radius: 30px;
    margin: auto 0;
`;

// 라벨 text
export const Label = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin-left: 10px;
`;

// 라벨 설명 text
export const LabelText = styled.div`
	color: gray;
	font-size: 12px;
	margin-left: 10px;
	margin-top: 5px;
	font-weight: 600;
	line-height: 1.2;
`;

// 라벨 설명 text
export const FileText = styled.div`
	color: gray;
	font-size: 12px;
	margin-left: 20px;
	margin-top: 11px;
	font-weight: 600;
`;

// 입력 박스
export const InputBox = styled.input`
	margin-left: 15px;
    width: 350px;
    height: 45px;
    border-radius: 11px;
    border: 2px solid #D0D2D7;
    background: #FFF;
    font-size: 14px;
    font-weight: 500;
    padding: 15px 18px;
    margin-top: 15px;
    color: #0D0D0D;

    &::placeholder {
        color: #D0D2D7;/* placeholder 색상 설정 */
    }
`;

// 면접 기간 입력 박스 컨테이너
export const MaskBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PeriodLine = styled.div`
	background-color: #D0D2D7;
	width:2px;
	height: 20px;
    margin-top: 15px;
`;

// 면접 기간 입력 박스
export const InputMaskBox = styled(InputMask)`
	margin-left: 7px;
	width: 350px;
	height: 45px;
	border-radius: 11px;
	border: 2px solid #D0D2D7;
	background: #FFF;
	font-size: 14px;
	font-weight: 500;
	padding: 15px 18px;
	margin-top: 15px;
	color: #D0D2D7;
`;

// 면접 기간 에러메시지 박스
export const PeriodError = styled.div`
    margin-left: -155px;
    color: #FF4A4A;
    font-size: 12px;
    margin-top: 10px;
    height: 10px;
`;

// 에러 메시지
export const Error = styled.div`
    color: #FF4A4A;
    font-size: 12px;
    margin-top: 9px;
    height: 10px;
	margin-left: 20px;
`;

// 비율 선택 컨테이너
export const RatioContainer = styled.div`
	display: flex;
	margin-top: 30px;
	justify-content: center;
`;

// 비율 선택 wrap
export const RatioTitle = styled.div`
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	color: #404146;
`;

// 비율 입력 input box
export const RatioInputBox = styled(InputMask)`
    width: 100px;
    height: 45px;
    border-radius: 11px;
    border: 2px solid #D0D2D7;
    background: #FFF;
    font-size: 15px;
    font-weight: 500;
	text-align: center;
    margin: 15px 12px 0px 12px;
    color: #D0D2D7;
`;

// 파일 업로드 컨테이너 스타일 정의
export const FileUploadContainer = styled.div`
    display: flex;
    margin-left: 15px;
    margin-top: 15px;
`;

// 파일 선택 버튼
export const FileUploadLabel = styled.label`
    width: 90px;
    height: 45px;
    border-radius: 11px;
    border: 2px solid #D0D2D7;
    background: #FFF;
    font-size: 14px;
    font-weight: 500;
    padding: 11px;
    color: #0D0D0D;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    &::placeholder {
        color: #D0D2D7;
    }
`;

// 파일 선택 기본 설정
export const HiddenInput = styled.input`
    display: none;
`;

// 파일 이름 박스
export const FileName = styled.div`
	width: 252px;
    height: 45px;
    border-radius: 11px;
    border: 2px solid #D0D2D7;
    background: #FFF;
    padding: 15px;
    color: #0D0D0D;
    display: flex;
    align-items: center;
    cursor: pointer;
	margin-left: 10px;
    font-size: 14px;
`;

// csv파일 다운로드, 면접 비율 정보 text
export const ConfirmText = styled.div`
	text-align: right;
	padding: 0px 20px 0px 0px;
	font-size: 12px;
	font-weight: 600;
	color: #696CEA;
	cursor: pointer;
`;

// 버튼 wrap
export const SubmitWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

// 완료 버튼
export const SignUpBtn = styled.button<{ toggle: boolean }>`
    display: flex;
    width: 380px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: ${(props) => (props.toggle ? `#696CEA` : `#D0D2D7`)};
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 600;
`;