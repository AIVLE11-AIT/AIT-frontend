import React, { useEffect, useState } from 'react';
import * as I from './InterviewMakeForm.style';
import Select from "react-select";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ExplainRatio from './ExplainRatio'; // ExplainRatio 컴포넌트 임포트
import Papa from 'papaparse';
import moment from 'moment';

const customStyles = {
	control: (provided: any) => ({// 닫혀 있을 때 select box
	  ...provided,
	  margin: '15px auto 0px 15px',
	  width: '350px',
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
		question1: string;
		question2: string;
		question3: string;
		jobGroup: string;
		passingScore: string;
	};

	type InterviewerDTO = {
		name: string;
		email: string;
		birth: string;
		cover_letter: string;
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
	} = useForm<FormValue>({ mode: 'onSubmit' });

	// 파일 이름 출력 함수(완성)
	const [fileName, setFileName] = useState<string>("");
	// const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [jsonFile, setJsonFile] = useState<any[]>([]);

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		console.log(file);
		if (file) {
		  try {
			const jsonData = await parseCSVToJSON(file);
			setJsonFile(jsonData);
	  
			// setSelectedFile(file);
			setFileName(file.name);
		  } catch (error) {
			console.error('Error parsing CSV file:', error);
		  }
		} else {
		//   setSelectedFile(null);
		  setFileName("");
		  setValue("fileUpload", null as any);
		}
	  };
	// 이메일 형식 검사를 위한 정규 표현식
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// csv -> json 변환
	const parseCSVToJSON = (file: File): Promise<any> => {
		return new Promise((resolve, reject) => {
			Papa.parse(file, {
				header: true,
				encoding: "UTF-8",
				skipEmptyLines: true,
				complete: (results) => {
					// CSV 데이터 유효성 검사 및 InterviewerDTO 형식으로 변환
					const isValidData = results.data.every((row: any) => {
						const isValidEmail = emailRegex.test(row.email); // 이메일 유효성 검사
						return (
							typeof row.name === 'string' &&
							typeof row.email === 'string' &&
							isValidEmail &&  // 이메일 형식 유효성 검사
							typeof row.birth === 'string' &&
							typeof row.cover_letter === 'string'
						);
					});

					if (!isValidData) {
						alert('CSV 파일의 형식이 유효하지 않거나 이메일 형식이 올바르지 않습니다.');
						reject(new Error('CSV 유효성 에러'));
						return;
					}

					const data: InterviewerDTO[] = results.data.map((row: any) => ({
						name: row.name,
						email: row.email,
						birth: moment(row.birth).format('YYYY-MM-DDTHH:mm:ss'),
						cover_letter: row.cover_letter
					}));
					resolve(data);
				},
				error: (error) => {
					reject(error);
				}
			});
		});
	};


	// 완료 버튼 클릭 시
	const navigate = useNavigate(); // 페이지 이동 변수
	const onValid = async (data: FormValue) => {
		console.log(jsonFile);

        try {
			if (!jsonFile) {
				setError("fileUpload", { type: "manual", message: "파일을 선택하세요." });
				return;
			}
			
            // Prepare JSON data
            const value = {
                name: data.interviewTitle,
                start_date: data.start,
                end_date: data.end,
                context_per: parseInt(data.answer),
                voice_per: parseInt(data.voice),
                action_per: parseInt(data.action),
                language: data.interviewType,
				occupation: selectedOption ? selectedOption.label : '',
                companyQnas: [
                    { question: data.question1},
                    { question: data.question2},
					{ question: data.question3}
                ],
                interviewers: []
            };
			
			const formData = new FormData();
            const interviewersBlob = new Blob([JSON.stringify(jsonFile)], { type: "application/json" });
            formData.append("InterviewerDTO", interviewersBlob);
			

            const jsonBlob = new Blob([JSON.stringify(value)], { type: "application/json" });
            formData.append("InterviewGroupDTO", jsonBlob);

            // Axios 백엔드 전송
            const response = await axios.post(`/interviewGroup/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: sessionStorage.getItem('isLogin'),
                },				

            });

            //console.log('Success:', response.data.id);
			navigate(`/interview-make-complete/${response.data.id}`);

        } catch (error) {
            console.error('Failed:', error);

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
	
	// 입력 시 색 변환 변수(완료)
	const [interviewTitleColor, setInterviewTitleColor] = useState('#D0D2D7');
	const [question1, setQuestion1] = useState('#D0D2D7');
	const [question2, setQuestion2] = useState('#D0D2D7');
	const [question3, setQuestion3] = useState('#D0D2D7');
	const [passScoreColor, setPassScoreColor] = useState('#D0D2D7');

	// select form 구현(완료)
	const jobGroup = [
		{ value: "Management", label: "관리" },
		{ value: "SalesMarketing", label: "영업마케팅" },
		{ value: "PublicService", label: "공공서비스" },
		{ value: "R&D", label: "연구 개발(R&D)" },
		{ value: "ICT", label: "IT/통신" },
		{ value: "Design", label: "디자인" },
		{ value: "ProductionManufacturing", label: "생산제조" }
	];

	// 직군 선택 select 변수 타입(완료)
	type OptionType = {
		value: string;
		label: string;
	};
	// 직군 선택 select 변수 값(완료)
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(jobGroup[0]);
	// 직군 선택 select 함수(완료)
    const handleSelectChange = (newValue: OptionType | null) => {
        setSelectedOption(newValue); // 선택된 옵션 업데이트
    };

	const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 변수

	return (
		<div>
		<I.MakeInputForm onSubmit={handleSubmit(onValid)}>
			<I.Title>STEP1. 면접 정보 입력</I.Title>
			<I.MakeWrapBox>
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
								value="kor"
								checked
								{...register("interviewType", { required: true })}
							/>
						</I.InputRadioBox>
						<I.RadioButtonLabel>외국인 채용</I.RadioButtonLabel>
						<I.InputRadioBox>
							<I.InputRadio
								id="interviewType-foreign"
								type="radio"
								value="eng"
								{...register("interviewType", { required: true })}
							/>
						</I.InputRadioBox>
					</I.InputRadioGroup>
				</I.MakeInputWrap>
			</I.MakeWrapBox>
			
			<I.MakeWrapBox>
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

				{/* 지원자 정보 파일 업로드*/}
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
			</I.MakeWrapBox>

			{/*면접 기간 입력*/}
			<I.MakeWrapBox>
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
									mask="9999-99-99T99:99:99"
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
									mask="9999-99-99T99:99:99"
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
											const value = e.target.value;
											const numericValue = value.split(' ')[0]; // '99 / 100'에서 '99'만 추출
											field.onChange(numericValue);
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
											const value = e.target.value;
											const numericValue = value.split(' ')[0]; // '99 / 100'에서 '99'만 추출
											field.onChange(numericValue);
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
											const value = e.target.value;
											const numericValue = value.split(' ')[0]; // '99 / 100'에서 '99'만 추출
											field.onChange(numericValue);
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
					<I.ConfirmText onClick={() => setIsModalOpen(true)}>평가 비율에 대해 궁금해요!</I.ConfirmText>
				</I.MakeInputWrap>
			</I.MakeWrapBox>

			{/*면접 이름 입력*/}
			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>합격 기준 점수*</I.Label>
					<I.LabelText>합격 기준 점수를 입력해 주세요.</I.LabelText>
				</I.LabelContainer>
				<I.InputBox
					id="passingScore"
					type="text"
					placeholder="합격 기준 점수를 입력해 주세요."
					{...register("passingScore", {
						required: "합격 기준 점수는 필수 입력입니다.",
						pattern: {
							value: /^(0?[1-9]|[1-9][0-9])$/i,
							message: "면접 기준 점수 형식에 맞지 않습니다.",
						},
					})}
					inputColor={passScoreColor === '#D0D2D7' ? '#0D0D0D' : passScoreColor}
					borderColor={passScoreColor === '#D0D2D7' ? '#D0D2D7' : '#404146'}
					onChange={(e) => {
						setPassScoreColor(e.target.value ? '#0D0D0D' : '#D0D2D7');
					}}
				/>
				<I.Error>{errors.passingScore && <small role="alert">{errors.passingScore.message}</small>}</I.Error>
			</I.MakeInputWrap>

			<I.Title>STEP2. 면접 질문 입력</I.Title>
			{/* 질문 입력 */}
			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>질문 1*</I.Label>
					<I.LabelText>첫 번째 질문을 입력해 주세요.</I.LabelText>
				</I.LabelContainer>
				<I.QInputBox
					id="question1"
					placeholder="100자 이내로 입력해 주세요."
					{...register("question1", {
						required: "질문1은 필수 입력입니다.",
						maxLength: {
							value: 100,
							message: "100자 이내로 입력해 주세요.",
						},
					})}
					inputColor={question1 === '#D0D2D7' ? '#0D0D0D' : question1}
					borderColor={question1 === '#D0D2D7' ? '#D0D2D7' : '#404146'}
					onChange={(e) => {
						setQuestion1(e.target.value ? '#0D0D0D' : '#D0D2D7');
					}}
				/>
				<I.Error>{errors.question1 && <small role="alert">{errors.question1.message}</small>}</I.Error>
			</I.MakeInputWrap>

			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>질문 2*</I.Label>
					<I.LabelText>두 번째 질문을 입력해 주세요.</I.LabelText>
				</I.LabelContainer>
				<I.QInputBox
					id="question2"
					placeholder="100자 이내로 입력해 주세요."
					{...register("question2", {
						required: "질문2은 필수 입력입니다.",
						maxLength: {
							value: 100,
							message: "100자 이내로 입력해 주세요.",
						},
					})}
					inputColor={question2 === '#D0D2D7' ? '#0D0D0D' : question2}
					borderColor={question2 === '#D0D2D7' ? '#D0D2D7' : '#404146'}
					onChange={(e) => {
						setQuestion2(e.target.value ? '#0D0D0D' : '#D0D2D7');
					}}
				/>
				<I.Error>{errors.question2 && <small role="alert">{errors.question2.message}</small>}</I.Error>
			</I.MakeInputWrap>

			<I.MakeInputWrap>
				<I.LabelContainer>
					<I.LabelIcon/>
					<I.Label>질문 3*</I.Label>
					<I.LabelText>세 번째 질문을 입력해 주세요.</I.LabelText>
				</I.LabelContainer>
				<I.QInputBox
					id="question3"
					placeholder="100자 이내로 입력해 주세요."
					{...register("question3", {
						required: "질문3은 필수 입력입니다.",
						maxLength: {
							value: 100,
							message: "100자 이내로 입력해 주세요.",
						},
					})}
					inputColor={question3 === '#D0D2D7' ? '#0D0D0D' : question3}
					borderColor={question3 === '#D0D2D7' ? '#D0D2D7' : '#404146'}
					onChange={(e) => {
						setQuestion3(e.target.value ? '#0D0D0D' : '#D0D2D7');
					}}
				/>
				<I.Error>{errors.question3 && <small role="alert">{errors.question3.message}</small>}</I.Error>
			</I.MakeInputWrap>

			<I.SubmitWrap>
				<I.SignUpBtn type="submit">완료</I.SignUpBtn>
			</I.SubmitWrap>
		</I.MakeInputForm>
		{isModalOpen && <ExplainRatio closeModal={() => setIsModalOpen(false)} />}
		</div>
	);
}

export default InterviewMakeForm;
