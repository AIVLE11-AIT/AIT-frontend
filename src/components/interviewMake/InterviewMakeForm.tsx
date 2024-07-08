import React, { useEffect, useState } from 'react';
import * as I from './InterviewMakeForm.style';
import Select from "react-select";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const customStyles = {
	control: (provided: any) => ({// 닫혀 있을 때 select box
	  ...provided,
	  margin: '15px auto 0px auto',
	  width: '90%',
	  height: '45px',
	  border: '2px solid #D0D2D7',
	  borderRadius: '11px',
	  padding: '0px 0px 0px 5px',
	  boxShadow: 'none',
	  '&:hover': {
		borderColor: '#0D0D0D',
		cursor: 'pointer'
	  },
	}),
	option: (provided: any, state: any) => ({// 열려 있을 때 select box
	  ...provided,
	  backgroundColor: state.isSelected ? '#696CEA' : 'white',
	  color: state.isSelected ? 'white' : '#D0D2D7',
	  '&:hover': {
		backgroundColor: '#696CEA',
		color: 'white',
		cursor: 'pointer'
	  },
	}),
};
  
 
function InterviewMakeForm() {
	// 백엔드 연결 시 사용할 변수명 및 타입 정의
	type FormValue = {
		interviewTitle: string;
		interviewType: string;
		start: string;
		end: string;
		fileUpload: FileList;
		answer: string;
		voice: string;
		action: string;
	};

	// select 변수 타입 정의
	type ValueType = { value: string; label: string };

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

	const navigate = useNavigate(); // 페이지 이동 변수

	// 빈칸 유효성 검사(버튼 활성화)
	const watchAll = watch();
	const [isActive, setIsActive] = useState(false); // 버튼 활성화 변수
	useEffect(() => {
		const allValuesFilled = Object.values(watchAll).every(value => value);

		if(fileName !== "")
			setIsActive(allValuesFilled);
	}, [watchAll]);

	const onValid = async (data: FormValue) => {
        try {
			if (!selectedFile || !selectedFile[0]) {
				setError("fileUpload", { type: "manual", message: "파일을 선택하세요." });
				return;
			}
	
			console.log("업로드할 파일:", data.fileUpload[0].name);

            const formData = new FormData();
            if (data.fileUpload) {
                formData.append('file', data.fileUpload[0]);
            }

            // Prepare JSON data
            const value = {
                name: data.interviewTitle,
                start_date: "2024-07-02T00:00:00",
                end_date: "2024-07-10T23:59:59",
                context_per: 33,
                voice_per: 33,
                action_per: 34,
                languag: "eng",
                companyQnas: [
                    { question: "지원동기", answer: "" },
                    { question: "입사 포부", answer: "뼈를 묻겠습니다" }
                ],
                interviewers: []
            };

            // Convert JSON to Blob
            const jsonBlob = new Blob([JSON.stringify(value)], { type: "application/json" });
            formData.append("InterviewGroupDTO", jsonBlob);

            // Send POST request with Axios
            const response = await axios.post(`/interviewGroup/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: sessionStorage.getItem('isLogin') || '',
                },
            });

            console.log('Success:', response.data);

        } catch (error) {
            console.error('Failed:', error);

        }
    };

	// 파일 이름 출력 함수(완성)
	const [fileName, setFileName] = useState("");
    const [selectedFile, setSelectedFile] = useState<File[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile([file]);
            setFileName(file.name);

        } else {
            setFileName("");
            setSelectedFile([]);
            setValue("fileUpload", null as any);
        }
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
	
	// 입력 시 색 변환 변수
	const [interviewTitleColor, setInterviewTitleColor] = useState('#D0D2D7');

	// select
	const jobGroup = [
		{ value: "Management", label: "관리" },
		{ value: "SalesMarketing", label: "영업마케팅" },
		{ value: "PublicService", label: "공공서비스" },
		{ value: "R&D", label: "연구 개발(R&D)" },
		{ value: "ICT", label: "IT/통신" },
		{ value: "Design", label: "디자인" },
		{ value: "ProductionManufacturing", label: "생산제조" }
	]

	const [selectedOption, setSelectedOption] = useState<ValueType | null>(jobGroup[0]);
	const handleSelectChange = (newValue: ValueType | null, actionMeta: any) => {
        setSelectedOption(newValue);
    };

	  
	return (
		<I.MakeInputForm onSubmit={handleSubmit(onValid)}>
			{/*면접 이름 입력*/}
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
			
			{/*면접 유형 선택(내국인, 외국인)*/}
			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>면접 유형*</I.Label>
					<I.LabelText>면접 유형을 선택해 주세요.</I.LabelText>
				</I.LabelContainer>
				<I.InputRadioGroup>
                    <I.RadioButtonLabel>내국인 채용</I.RadioButtonLabel>
					<I.InputRadioBox>
						<I.InputRadio
							id="interviewType-domestic"
							type="radio"
							value="domestic"
							{...register("interviewType", { required: true })}
						/>
					</I.InputRadioBox>
                    <I.RadioButtonLabel>외국인 채용</I.RadioButtonLabel>
					<I.InputRadioBox>
						<I.InputRadio
							id="interviewType-foreign"
							type="radio"
							value="foreign"
							{...register("interviewType", { required: true })}
						/>
					</I.InputRadioBox>
                </I.InputRadioGroup>
			</I.MakeInputWrap>
			
			{/*면접 직군 선택*/}
			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>면접 직군*</I.Label>
					<I.LabelText>면접 직군을 선택해 주세요.</I.LabelText>
				</I.LabelContainer>
				<Select options={jobGroup} //위에서 만든 배열을 select로 넣기
					value={selectedOption}
					onChange={handleSelectChange}
					styles={customStyles}
					/> 
			</I.MakeInputWrap>

			{/*면접 기간 입력*/}
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
						accept='.csv'
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
