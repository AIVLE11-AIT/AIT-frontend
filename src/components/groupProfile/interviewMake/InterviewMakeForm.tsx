import React, { useEffect, useState } from 'react'
import * as I from './InterviewMakeForm.style';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function InterviewMakeForm() {
	type FormValue = {
		interviewTitle: string;
		start: string,
		end: string,
		fileUpload: FileList;
		answer: string;
		voice: string;
		action: string;
	}
  
	const {
	register,
	handleSubmit,
	watch,
	setError,
	resetField,
	clearErrors,
	getValues,
	formState: { errors },
	} = useForm<FormValue>({ mode: 'onBlur' })
  
  
	//다음 버튼 활성화    
	const [isActive, setIsActive] = useState(false);
	const watchAll = Object.values(watch());
	const navigate = useNavigate();

	useEffect(() => {
		if (watchAll.every((el) => el)) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [watchAll]);
  
	// 회원가입
	const onValid = (data: FormValue) => {

		// 회원가입 api
		axios({
		url: `/signup/register`,
		method: 'post',
		})
		.then((response) => {
		console.log(response.data);
		navigate('/login');
		}) .catch((error) => {
		console.log('실패');
		console.error('AxiosError:', error);
		});
	}
  
	//값이 비정상적으로 입력되었을 때 실행되는 함수(완료)
	const onError = (error: any) => {
	console.log('onError called with error:', error);
	};

	// 파일업로드 명 표시 함수
	const [fileName, setFileName] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("");
        }
    };

	return (
		<>
		<I.MakeInputForm onSubmit={handleSubmit(onValid, onError)}>
			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>면접 이름*</I.Label>
					<I.LabelText>면접 이름을 입력해 주세요.</I.LabelText>
				</I.LabelContainer>

				<I.InputBox
					id="email"
					type="text"
					placeholder="20자 이내로 입력해 주세요."
					{...register("interviewTitle", {
					required: "면접 이름은 필수 입력입니다.",
					pattern: {
						value: /^(?=.*[가-힣])(?=.*\d)|(?=.*[a-zA-Z])(?=.*\d){1,20}$/i,
						message: "면접 이름 형식에 맞지 않습니다.",
					},
					})}
				/>
				<I.Error>{errors.interviewTitle && <small role="alert">{errors.interviewTitle.message}</small>}</I.Error>
			</I.MakeInputWrap>
	
			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>면접 기간*</I.Label>
					<I.LabelText>면접 가능한 날짜, 시간 범위를 설정해 주세요.</I.LabelText>
				</I.LabelContainer>
				<I.MaskBoxContainer>
					<I.InputMaskBox
						mask="9999 년  99 월  99 일  99 HH  99 MM  99 SS"
						alwaysShowMask={true}
						{...register("start", {
							required: "면접 기간은 필수 입력입니다.",
						})}
					/>
					<I.Error>{errors.start && <small role="alert">{errors.start.message}</small>}</I.Error>
					<I.PeriodLine/>
					<I.InputMaskBox
						mask="9999 년  99 월  99 일  99 HH  99 MM  99 SS"
						alwaysShowMask={true}
						{...register("end", {
							required: "면접 기간은 필수 입력입니다.",
						})}
					/>
				</I.MaskBoxContainer>
				<I.Error>{errors.end && <small role="alert">{errors.end.message}</small>}</I.Error>
			</I.MakeInputWrap>
	
			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>지원자 정보 파일*</I.Label>
				</I.LabelContainer>
				<I.FileText>csv파일을 다운받아 작성 후 업로드 해주세요.</I.FileText>
				<I.FileUploadContainer>
					<I.FileUploadLabel htmlFor="fileUpload">파일 선택</I.FileUploadLabel>
					<I.HiddenInput
						id="fileUpload"
						type="file"
						{...register("fileUpload", {
							required: "파일을 선택하세요.",
							validate: {
								fileSizeCheck: (value) => {
									return value[0].size < 10485760 || "10MB 이하의 파일을 선택하세요.";
								}
							}
						})}
						onChange={handleChange}
					/>
					{fileName && (<I.FileName>{fileName}</I.FileName>) || (<I.FileName>선택된 파일 없음</I.FileName>)}
				</I.FileUploadContainer>
				<I.Error>{errors.fileUpload && <small role="alert">{errors.fileUpload.message}</small>}</I.Error>
			</I.MakeInputWrap>
	
			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>평가 비율 선택*</I.Label>
					<I.LabelText>평가 비율을 입력해 주세요.</I.LabelText>
				</I.LabelContainer>

				<I.RatioContainer>
					<div>
						<I.RatioTitle>답변 분석</I.RatioTitle>
						<I.RatioInputBox
							id="answer"
							mask="99 / 100"
							alwaysShowMask={true}
							{...register("answer", {
								required: "평가 비율 입력은 필수 입력입니다.",
							})}
						/>
					</div>
					<div>
						<I.RatioTitle>음성 분석</I.RatioTitle>
						<I.RatioInputBox
							id="voice"
							mask="99 / 100"
							alwaysShowMask={true}
							// input의 기본 config를 작성
							{...register("voice", {
								required: "평가 비율 입력은 필수 입력입니다.",
							})}
						/>
					</div>
					<div>
						<I.RatioTitle>행동 분석</I.RatioTitle>
						<I.RatioInputBox
							id="action"
							mask="99 / 100"
							alwaysShowMask={true}
							// input의 기본 config를 작성
							{...register("action", {
								required: "평가 비율 입력은 필수 입력입니다.",
							})}
						/>
					</div>
				</I.RatioContainer>
				<I.Error>
					{errors.answer && errors.voice && errors.action && 
					<small role="alert">{errors.answer.message}</small> &&
					<small role="alert">{errors.voice.message}</small> &&
					<small role="alert">{errors.action.message}</small>}
				</I.Error>
			</I.MakeInputWrap>
	
			<I.SubmitWrap>
				<I.SignUpBtn type="submit" toggle={isActive}>다음</I.SignUpBtn>
			</I.SubmitWrap>
			</I.MakeInputForm>
		</>
  	)
}

export default InterviewMakeForm