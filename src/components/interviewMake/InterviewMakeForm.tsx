import React, { useEffect, useState } from 'react';
import * as I from './InterviewMakeForm.style';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function InterviewMakeForm() {
	type FormValue = {
		interviewTitle: string;
		start: string;
		end: string;
		fileUpload: FileList;
		answer: string;
		voice: string;
		action: string;
	};

	const {
		register,
		handleSubmit,
		watch,
		setError,
		setValue,
		getValues,
		control,
		formState: { errors },
	} = useForm<FormValue>({ mode: 'onBlur' });

	const [isActive, setIsActive] = useState(false);
	const watchAll = watch();
	const navigate = useNavigate();

	useEffect(() => {
		const allValuesFilled = Object.values(watchAll).every(value => value);
		setIsActive(allValuesFilled);
	}, [watchAll]);

	const onValid = (data: FormValue) => {
        if (!data.start) {
            setError("start", { type: "manual", message: "면접 기간은 필수 입력입니다." });
            return;
        }
	};

	const onError = (error: any) => {
		console.log('onError called with error:', error);
	};

	// 파일 이름 출력 함수(완성)
	const [fileName, setFileName] = useState("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		setFileName(file ? file.name : "");
	};

	// 평가 비율 유효성 검사 함수(완성)
	const validateTotalPercentage = () => {
		const answer = parseInt(getValues("answer") || "0", 10);
		const voice = parseInt(getValues("voice") || "0", 10);
		const action = parseInt(getValues("action") || "0", 10);
		const total = answer + voice + action;

		if(total !== 100 && voice > 0 && action > 0){
			return "평가 비율의 합이 100이어야 합니다.";
		}
	};
	
	const [interviewTitleColor, setInterviewTitleColor] = useState('#D0D2D7');
	  
	return (
		<I.MakeInputForm onSubmit={handleSubmit(onValid, onError)}>
			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>면접 이름*</I.Label>
					<I.LabelText>면접 이름을 입력해 주세요.</I.LabelText>
				</I.LabelContainer>
				<I.InputBox
					id="interviewTitle"
					type="text"
					placeholder="20자 이내로 입력해 주세요."
					{...register("interviewTitle", {
						required: "면접 이름은 필수 입력입니다.",
						pattern: {
							value: /^(?=.*[가-힣])|(?=.*[a-zA-Z])(?=.*\d)|(?=.*[가-힣])(?=.*\d).{1,20}$/i,
							message: "면접 이름 형식에 맞지 않습니다.",
						},
					})}
					inputColor={interviewTitleColor === '#D0D2D7' ? '#0D0D0D' : interviewTitleColor}
					borderColor={interviewTitleColor === '#D0D2D7' ? '#D0D2D7' : '#404146'}
					onChange={(e) => {
						setInterviewTitleColor(e.target.value ? '#0D0D0D' : '#D0D2D7');
					}}
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
					<Controller
						name="start"
						control={control}
						rules={{
							required: "면접 기간 입력은 필수 입력입니다.",
						}}
						render={({ field }) => (
							<I.InputMaskBox
								id="start"
								mask="9999 년  99 월  99 일  99 h:  99 m:  99 s"
								alwaysShowMask={true}
								{...field}
								onChange={(e) => {
									field.onChange(e);
								  }}
								inputColor={field.value ? '#404146' : '#D0D2D7'}
								borderColor={field.value ? '#404146' : '#D0D2D7'}
							/>
						)}
					/>
					<I.PeriodLine />
					<Controller
						name="end"
						control={control}
						rules={{
							required: "면접 기간 입력은 필수 입력입니다.",
						}}
						render={({ field }) => (
							<I.InputMaskBox
								id="end"
								mask="9999 년  99 월  99 일  99 h:  99 m:  99 s"
								alwaysShowMask={true}
								{...field}
								onChange={(e) => {
									field.onChange(e);
								  }}
								inputColor={field.value ? '#404146' : '#D0D2D7'}
								borderColor={field.value ? '#404146' : '#D0D2D7'}
							/>
						)}
					/>
					<I.PeriodError>
						{(errors.start || errors.end) && (
							<small role="alert">
								{errors.start?.message || errors.end?.message}
							</small>
						)}
					</I.PeriodError>
				</I.MaskBoxContainer>
			</I.MakeInputWrap>

			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>지원자 정보 파일*</I.Label>
				</I.LabelContainer>
				<I.FileText>csv파일을 다운받아 작성 후 업로드 해주세요.</I.FileText>
				<I.FileUploadContainer>
					<I.FileUploadLabel htmlFor="fileUpload" hasFile={fileName}>파일 선택</I.FileUploadLabel>
					<I.HiddenInput
						id="fileUpload"
						type="file"
						{...register("fileUpload", {
							required: "파일을 선택하세요.",
						})}
						onChange={handleChange}
						accept=".csv"
					/>
					<I.FileName hasFile={fileName}>
						{fileName || "선택된 파일 없음"}
					</I.FileName>
				</I.FileUploadContainer>
				<I.Error>{errors.fileUpload && <small role="alert">{errors.fileUpload.message}</small>}</I.Error>
				<I.ConfirmText>
					<a href="/AIT지원자 정보 csv파일 양식.csv" download="AIT지원자 정보 csv파일 양식.csv">csv파일 양식 다운로드↓</a>
				</I.ConfirmText>
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
						<Controller
							name="answer"
							control={control}
							rules={{
								required: "평가 비율 입력은 필수 입력입니다.",
								validate: validateTotalPercentage,
							}}
							render={({ field }) => (
								<I.RatioInputBox
									id="answer"
									mask="99 / 100"
									alwaysShowMask={true}
									{...field}
									onChange={(e) => {
										field.onChange(e);
									  }}
									inputColor={field.value ? '#404146' : '#D0D2D7'}
									borderColor={field.value ? '#404146' : '#D0D2D7'}
								/>
							)}
						/>
					</div>
					<div>
						<I.RatioTitle>음성 분석</I.RatioTitle>
						<Controller
							name="voice"
							control={control}
							rules={{
								required: "평가 비율 입력은 필수 입력입니다.",
								validate: validateTotalPercentage,
							}}
							render={({ field }) => (
								<I.RatioInputBox
									id="voice"
									mask="99 / 100"
									alwaysShowMask={true}
									{...field}
									onChange={(e) => {
										field.onChange(e);
									  }}
									inputColor={field.value ? '#404146' : '#D0D2D7'}
									borderColor={field.value ? '#404146' : '#D0D2D7'}
								/>
							)}
						/>
					</div>
					<div>
						<I.RatioTitle>행동 분석</I.RatioTitle>
						<Controller
							name="action"
							control={control}
							rules={{
								required: "평가 비율 입력은 필수 입력입니다.",
								validate: validateTotalPercentage,
							}}
							render={({ field }) => (
								<I.RatioInputBox
									id="action"
									mask="99 / 100"
									alwaysShowMask={true}
									{...field}
									onChange={(e) => {
										field.onChange(e);
									  }}
									inputColor={field.value ? '#404146' : '#D0D2D7'}
									borderColor={field.value ? '#404146' : '#D0D2D7'}
								/>
							)}
						/>
					</div>
				</I.RatioContainer>
				<I.Error>
					{(errors.answer || errors.voice || errors.action) && 
					(<small role="alert">{errors.answer?.message || errors.voice?.message || errors.action?.message}</small>)}
				</I.Error>
				<I.ConfirmText>평가 비율에 대해 궁금해요!</I.ConfirmText>
			</I.MakeInputWrap>

			<I.SubmitWrap>
				<I.SignUpBtn type="submit" toggle={isActive}>다음</I.SignUpBtn>
			</I.SubmitWrap>
		</I.MakeInputForm>
	);
}

export default InterviewMakeForm;
