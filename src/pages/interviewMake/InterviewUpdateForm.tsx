import React, { useEffect, useState } from 'react';
import * as I from './InterviewUpdateForm.style';
import Select from "react-select";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ExplainRatio from '../../components/interviewMake/ExplainRatio';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const customStyles = {
	control: (provided: any) => ({
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
	option: (provided: any, state: any) => ({
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

type OptionType = {
	value: string;
	label: string;
};

const jobGroup: OptionType[] = [
	{ value: "Management", label: "관리" },
	{ value: "SalesMarketing", label: "영업마케팅" },
	{ value: "PublicService", label: "공공서비스" },
	{ value: "R&D", label: "연구 개발(R&D)" },
	{ value: "ICT", label: "IT/통신" },
	{ value: "Design", label: "디자인" },
	{ value: "ProductionManufacturing", label: "생산제조" }
];

function InterviewUpdateForm() {
	let { groupId } = useParams();

	// 상태 변수
	const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [interviewTitleColor, setInterviewTitleColor] = useState('#D0D2D7');
	const [question1Color, setQuestion1Color] = useState('#D0D2D7');
	const [question2Color, setQuestion2Color] = useState('#D0D2D7');
	const [question3Color, setQuestion3Color] = useState('#D0D2D7');
	const [passScoreColor, setPassScoreColor] = useState('#D0D2D7');

	const navigate = useNavigate();

	type FormValue = {
		interviewTitle: string;
		interviewType: string;
		start: string;
		end: string;
		answer: string;
		voice: string;
		action: string;
		question1: string;
		question2: string;
		question3: string;
		jobGroup: string;
		passingScore: string;
	};

	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		control,
		formState: { errors },
	} = useForm<FormValue>({
		mode: 'onSubmit',
		defaultValues: {
			interviewTitle: '',
			interviewType: '',
			start: '',
			end: '',
			answer: '',
			voice: '',
			action: '',
			question1: '',
			question2: '',
			question3: '',
			jobGroup: '',
			passingScore: ''
		}
	});

	// 기존 데이터 불러오기
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/interviewGroup/${groupId}`, {
					headers: {
						Authorization: sessionStorage.getItem('isLogin'),
					},
				});
				const data = response.data;
				//console.log(data);
				setValue('interviewTitle', data.name || '');
				setValue('interviewType', data.language || '');
				setValue('start', moment(data.start_date).format('YYYY-MM-DDTHH:mm:ss') || '');
				setValue('end', moment(data.end_date).format('YYYY-MM-DDTHH:mm:ss') || '');
				setValue('answer', data.context_per.toString() || '');
				setValue('voice', data.voice_per.toString() || '');
				setValue('action', data.action_per.toString() || '');
				setValue('question1', data.companyQnas[0]?.question || '');
				setValue('question2', data.companyQnas[1]?.question || '');
				setValue('question3', data.companyQnas[2]?.question || '');
				setValue('passingScore', data.passingScore.toString() || '');

				const selectedJobGroup = jobGroup.find(group => group.label === data.occupation);
				setSelectedOption(selectedJobGroup || null);
        console.log("기존 데이터: ", data);
			} catch (error) {
				console.error('Failed to fetch data:', error);
			}
		};
		fetchData();
	}, [groupId, setValue]);

	// 직군 선택 select 함수
	const handleSelectChange = (newValue: OptionType | null) => {
		setSelectedOption(newValue);
	};

	// 평가 비율 유효성 검사 함수
	const validateTotalPercentage = () => {
		const answer = parseInt(getValues("answer") || "0", 10);
		const voice = parseInt(getValues("voice") || "0", 10);
		const action = parseInt(getValues("action") || "0", 10);
		const total = answer + voice + action;
		if (total !== 100 && voice > 0 && action > 0) {
			return "평가 비율의 합이 100이어야 합니다.";
		}
	};

	const onValid = async (data: FormValue) => {
		try {
			const value = {
				name: data.interviewTitle,
				start_date: data.start,
				end_date: data.end,
        passingScore: data.passingScore,
				context_per: parseInt(data.answer),
				voice_per: parseInt(data.voice),
				action_per: parseInt(data.action),
				language: data.interviewType,
				occupation: selectedOption ? selectedOption.label : '',				
        companyQnas: [
					{ question: "ㅇㅇㅇㅇ" },
					{ question: data.question2 },
					{ question: data.question3 },
				],
				interviewers: []
			};

      console.log(value);

			await axios.put(`/interviewGroup/${groupId}/update`, value, {
				headers: {
					Authorization: sessionStorage.getItem('isLogin'),
				},
			});

			alert('수정되었습니다.');
			navigate('/group-profile');
		} catch (error) {
			console.error('Failed:', error);
			alert('저장에 실패했습니다. 다시 시도해 주세요.');
		}
	};

	return (
		<div>
			<I.MakeInputForm onSubmit={handleSubmit(onValid)}>
				<I.Title>STEP1. 면접 정보 입력</I.Title>
				<I.MakeWrapBox>
					{/* 면접 이름 입력 */}
					<I.MakeInputWrap>
						<I.LabelContainer>
							<I.LabelIcon />
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

					{/* 면접 유형 선택(내국인, 외국인) */}
					<I.MakeInputWrap>
						<I.LabelContainer>
							<I.LabelIcon />
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
					{/* 면접 직군 선택 */}
					<I.MakeInputWrap>
						<I.LabelContainer>
							<I.LabelIcon />
							<I.Label>면접 직군*</I.Label>
							<I.LabelText>면접 직군을 선택해 주세요.</I.LabelText>
						</I.LabelContainer>
						<Select options={jobGroup}
							value={selectedOption}
							onChange={handleSelectChange}
							styles={customStyles}
						/>
					</I.MakeInputWrap>
				</I.MakeWrapBox>

				{/* 면접 기간 입력 */}
				<I.MakeWrapBox>
					<I.MakeInputWrap>
						<I.LabelContainer>
							<I.LabelIcon />
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
							<I.LabelIcon />
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
												const numericValue = value.split(' ')[0];
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
												const numericValue = value.split(' ')[0];
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
												const numericValue = value.split(' ')[0];
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

				{/* 합격 기준 점수 입력 */}
				<I.MakeInputWrap>
					<I.LabelContainer>
						<I.LabelIcon />
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
						<I.LabelIcon />
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
						inputColor={question1Color === '#D0D2D7' ? '#0D0D0D' : question1Color}
						borderColor={question1Color === '#D0D2D7' ? '#D0D2D7' : '#404146'}
						onChange={(e) => {
							setQuestion1Color(e.target.value ? '#0D0D0D' : '#D0D2D7');
						}}
					/>
					<I.Error>{errors.question1 && <small role="alert">{errors.question1.message}</small>}</I.Error>
				</I.MakeInputWrap>

				<I.MakeInputWrap>
					<I.LabelContainer>
						<I.LabelIcon />
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
						inputColor={question2Color === '#D0D2D7' ? '#0D0D0D' : question2Color}
						borderColor={question2Color === '#D0D2D7' ? '#D0D2D7' : '#404146'}
						onChange={(e) => {
							setQuestion2Color(e.target.value ? '#0D0D0D' : '#D0D2D7');
						}}
					/>
					<I.Error>{errors.question2 && <small role="alert">{errors.question2.message}</small>}</I.Error>
				</I.MakeInputWrap>

				<I.MakeInputWrap>
					<I.LabelContainer>
						<I.LabelIcon />
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
						inputColor={question3Color === '#D0D2D7' ? '#0D0D0D' : question3Color}
						borderColor={question3Color === '#D0D2D7' ? '#D0D2D7' : '#404146'}
						onChange={(e) => {
							setQuestion3Color(e.target.value ? '#0D0D0D' : '#D0D2D7');
						}}
					/>
					<I.Error>{errors.question3 && <small role="alert">{errors.question3.message}</small>}</I.Error>
				</I.MakeInputWrap>

				<I.SubmitWrap>
					<I.SignUpBtn type="submit">수정</I.SignUpBtn>
				</I.SubmitWrap>
			</I.MakeInputForm>
			{isModalOpen && <ExplainRatio closeModal={() => setIsModalOpen(false)} />}
		</div>
	);
}

export default InterviewUpdateForm;
