import React, { useEffect, useState } from 'react';
import * as I from './InterviewMakeForm.style';
import Select from "react-select";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ExplainRatio from './ExplainRatio'; // ExplainRatio 컴포넌트 임포트
import Papa from 'papaparse';
import moment from 'moment';
import * as XLSX from 'xlsx';
// 달력
import styles from './Calender.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from 'date-fns';

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
      startTime: string;
      endTime: string;
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
      console.log("file", file);
      if (file) {
        try {
            setFileName(file.name); // 파일 이름 업데이트
			const jsonData = await convertExcelToJSON(file);
            setJsonFile(jsonData);

			console.log(jsonData);
        } catch (error) {
         console.error('Error parsing CSV file:', error);
        }
      } else {
        setFileName(""); // 파일이 없을 경우 파일 이름 초기화
        setValue("fileUpload", null as any); // 파일 업로드 필드 초기화
      }
   };
   
   const convertExcelToJSON = async (file: File): Promise<InterviewerDTO[]> => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();

			reader.onload = (event: ProgressEvent<FileReader>) => {
				const data = new Uint8Array(event.target?.result as ArrayBuffer);
				const workbook = XLSX.read(data, {
					type: 'array',
					cellDates: true,
					codepage: 65001 // UTF-8 인코딩
				});

				const sheetName = workbook.SheetNames[0];
				const worksheet = workbook.Sheets[sheetName];

				const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

				const jsonResult = jsonData.slice(2).map((row: any) => {
					const name = row[0] || '';
					const email = row[1] || '';
					const birth = row[2] ? moment(row[2]).format('YYYY-MM-DDTHH:mm:ss') : '';
					const cover_letter = row[3] || '';
	
					// 유효성 검사
					const isValidName = name.trim() !== '';
					const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
					const isValidBirth = moment(birth, 'YYYY-MM-DDTHH:mm:ss', true).isValid();
					const isValidCoverLetter = cover_letter.trim() !== '';
	
					// 유효한 경우만 객체를 반환
					if (isValidName && isValidEmail && isValidBirth && isValidCoverLetter) {
						return {
							name,
							email,
							birth,
							cover_letter
						} as InterviewerDTO;
					} else {
						return null; // 유효하지 않은 행은 null로 반환
					}
				});

				const validRows = jsonResult.filter((row): row is InterviewerDTO => row !== null);
				if (validRows.length === 0) {
					alert('CSV 파일의 형식이 유효하지 않거나 이메일 형식이 올바르지 않습니다.');
					reject(new Error('CSV 유효성 에러'));
					window.location.reload();
					return;
				}
            	resolve(validRows); // 유효한 행을 반환
			};

			reader.onerror = (error) => {
				reject(error); // 에러 발생 시 reject
			};

			reader.readAsArrayBuffer(file);
		});
	};


   // 완료 버튼 클릭 시
   const navigate = useNavigate(); // 페이지 이동 변수
   const onValid = async (data: FormValue) => {
      //console.log(jsonFile);

        try {
		   if (!jsonFile) {
			setError("fileUpload", { type: "manual", message: "파일을 선택하세요." });
			return;
		}
         
		// Prepare JSON data
		const value = {
			name: data.interviewTitle,
			//start_date: data.startTime,
         start_date: `${formattedDate1}` + "T" + data.startTime,
			end_date: `${formattedDate2}` + "T" + data.endTime,
         passingScore: parseInt(data.passingScore),
			context_per: parseInt(data.answer.split(' ')[0]),
			voice_per: parseInt(data.voice.split(' ')[0]),
			action_per: parseInt(data.action.split(' ')[0]),
			language: data.interviewType,
			occupation: selectedOption ? selectedOption.label : '',
			companyQnas: [
				{ question: data.question1},
				{ question: data.question2},
			{ question: data.question3}
			],
			interviewers: []
		};

      console.log(value);
         
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

   const [selectedDate1, setSelectedDate1] = useState<Date | null>(new Date()); // 시작날짜 선택 변수
   const [selectedDate2, setSelectedDate2] = useState<Date | null>(new Date()); // 종료날짜 선택 변수
   function formatDate(date:any) {
      // toISOString()은 'YYYY-MM-DDTHH:mm:ss.sssZ' 형식으로 반환되므로, 날짜 부분만 추출
      return date.toISOString().split('T')[0];
   }
   const formattedDate1 = formatDate(selectedDate1);
   const formattedDate2 = formatDate(selectedDate2);
   const YEARS = Array.from({ length: getYear(new Date()) + 1 - 2000 }, (_, i) => getYear(new Date()) + i);
   const MONTHS = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
   ];

   // 유효성 검사 규칙 설정
   const getQuestionValidationRules = (interviewType: string) => {
      if (interviewType === 'eng') {
         return {
            required: "질문은 필수 입력입니다.",
            maxLength: {
               value: 200,
               message: "200자 이내로 입력해 주세요.",
            },
            pattern: {
               value: /^[a-zA-Z0-9\s?!,.@#$%^&*()_+\-=\[\]{}|\\:;"'<>,./]*$/,
               message: "영어로 질문 입력을 해주세요.",
            },
         };
      } else {
         return {
            required: "질문은 필수 입력입니다.",
            maxLength: {
               value: 200,
               message: "200자 이내로 입력해 주세요.",
            },
            pattern: {
               value: /^[가-힣ㄱ-ㅎㅏ-ㅣ0-9\s?!,.@#$%^&*()_+\-=\[\]{}|\\:;"'<>,./]*$/,
               message: "한글로 질문 입력을 해주세요.",
            },
         };
      }
   };

   useEffect(() => {
      // 인터뷰 타입이 변경될 때 유효성 검사 업데이트
      const interviewType = watch("interviewType");
      if (interviewType === "eng") {
         setValue("interviewTitle", getValues("interviewTitle"), {
            shouldValidate: true,
            shouldDirty: true,
         });
      }
   }, [watch("interviewType")]);

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
                        value: watch("interviewType") === "eng" ? /^(?=.*[a-zA-Z]).{1,20}$/ : /^(?=.*[가-힣a-zA-Z]).{1,20}$/,
                        message: watch("interviewType") === "eng" ? "면접 이름을 영어로 적어주세요." : "면접 이름을 한글로 적어주세요.",
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
                        defaultChecked
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
                     accept='.xlsx'
                  />
                  <I.FileName hasFile={fileName}>
                     {fileName || "선택된 파일 없음"}
                  </I.FileName>
               </I.FileUploadContainer>
               <I.Error>{errors.fileUpload && <small role="alert">{errors.fileUpload.message}</small>}</I.Error>
               <I.ConfirmText>
                  <a href="/AIT지원자 정보 엑셀파일 양식.xlsx" download="AIT지원자 정보 엑셀파일 양식.xlsx">엑셀 파일 양식 다운로드↓</a>
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
                  <I.DateContainer>
                  <div className={styles.datePickerWrapper}>
                     <DatePicker
                        dateFormat='yyyy-MM-dd'
                        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
                        showYearDropdown
                        scrollableYearDropdown
                        shouldCloseOnSelect
                        yearDropdownItemNumber={100}
                        minDate={new Date()} // 오늘날짜 이후로만 선택 가능
                        selected={selectedDate1}
                        calendarClassName={styles.calenderWrapper}
                        dayClassName={(d) => (d.getDate() === selectedDate1!.getDate() ? styles.selectedDay : styles.unselectedDay)}
                        onChange={(date) => setSelectedDate1(date)}
                        className={styles.datePicker}
                        renderCustomHeader={({
                           date,
                           changeYear,
                           decreaseMonth,
                           increaseMonth,
                           prevMonthButtonDisabled,
                           nextMonthButtonDisabled,
                        }) => (
                           <div className={styles.customHeaderContainer}>
                              <div>
                              <span className={styles.month}>{MONTHS[getMonth(date)]}</span>
                              <select
                                 value={getYear(date)}
                                 className={styles.year}
                                 onChange={({ target: { value } }) => changeYear(+value)}
                                 >
                                 {YEARS.map((option) => (
                                    <option key={option} value={option}>
                                    {option}
                                    </option>
                                 ))}
                              </select>
                           </div>
                           <div>
                           <button
                              type='button'
                              onClick={decreaseMonth}
                              className={styles.monthButton}
                              disabled={prevMonthButtonDisabled}
                           >
                              &lt;
                           </button>
                           <button
                              type='button'
                              onClick={increaseMonth}
                              className={styles.monthButton}
                              disabled={nextMonthButtonDisabled}
                           >
                              &gt;
                           </button>
                           </div>
                        </div>
                     )}
                     />
                  </div>
                  <Controller
                     name="startTime"
                     control={control}
                     rules={{
                        required: "면접 기간 입력은 필수 입력입니다.",
                     }}
                     render={({ field }) => (
                        <I.InputMaskBox
                           id="startTime"
                           mask="99:99:99"
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
                  </I.DateContainer>
                  <I.PeriodLine />
                  <I.DateContainer>
                  <div className={styles.datePickerWrapper}>
                     <DatePicker
                        dateFormat='yyyy-MM-dd'
                        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
                        showYearDropdown
                        scrollableYearDropdown
                        shouldCloseOnSelect
                        yearDropdownItemNumber={100}
                        minDate={new Date()} // 오늘날짜 이후로만 선택 가능
                        selected={selectedDate2}
                        calendarClassName={styles.calenderWrapper}
                        dayClassName={(d) => (d.getDate() === selectedDate2!.getDate() ? styles.selectedDay : styles.unselectedDay)}
                        onChange={(date) => setSelectedDate2(date)}
                        className={styles.datePicker}
                        renderCustomHeader={({
                           date,
                           changeYear,
                           decreaseMonth,
                           increaseMonth,
                           prevMonthButtonDisabled,
                           nextMonthButtonDisabled,
                        }) => (
                           <div className={styles.customHeaderContainer}>
                              <div>
                              <span className={styles.month}>{MONTHS[getMonth(date)]}</span>
                              <select
                                 value={getYear(date)}
                                 className={styles.year}
                                 onChange={({ target: { value } }) => changeYear(+value)}
                                 >
                                 {YEARS.map((option) => (
                                    <option key={option} value={option}>
                                    {option}
                                    </option>
                                 ))}
                              </select>
                           </div>
                           <div>
                           <button
                              type='button'
                              onClick={decreaseMonth}
                              className={styles.monthButton}
                              disabled={prevMonthButtonDisabled}
                           >
                              &lt;
                           </button>
                           <button
                              type='button'
                              onClick={increaseMonth}
                              className={styles.monthButton}
                              disabled={nextMonthButtonDisabled}
                           >
                              &gt;
                           </button>
                           </div>
                        </div>
                     )}
                     />
                  </div>
                  <Controller
                     name="endTime"
                     control={control}
                     rules={{
                        required: "면접 기간 입력은 필수 입력입니다.",
                     }}
                     render={({ field }) => (
                        <I.InputMaskBox
                           id="endTime"
                           mask="99:99:99"
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
                  </I.DateContainer>
                  <I.PeriodError>
                     {(errors.startTime || errors.endTime) && (
                        <small role="alert">
                           {errors.startTime?.message || errors.endTime?.message}
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
                        render={({ field }) => (
                           <I.RatioInputBox
                              id="answer"
                              mask="99 / 100"
                              alwaysShowMask={true}
                              {...register("answer", {
                                 required: "평가 비율 입력은 필수 입력입니다.",
                                 validate: validateTotalPercentage,
                              })}
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
                        render={({ field }) => (
                           <I.RatioInputBox
                              id="voice"
                              mask="99 / 100"
                              alwaysShowMask={true}
                              {...register("voice", {
                                 required: "평가 비율 입력은 필수 입력입니다.",
                                 validate: validateTotalPercentage,
                              })}
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
                        render={({ field }) => (
                           <I.RatioInputBox
                              id="action"
                              mask="99 / 100"
                              alwaysShowMask={true}
                              {...register("action", {
                                 required: "평가 비율 입력은 필수 입력입니다.",
                                 validate: validateTotalPercentage,
                              })}
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
               placeholder="200자 이내로 입력해 주세요."
               {...register("question1", getQuestionValidationRules(watch("interviewType")))}
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
               placeholder="200자 이내로 입력해 주세요."
               {...register("question2", getQuestionValidationRules(watch("interviewType")))}
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
               placeholder="200자 이내로 입력해 주세요."
               {...register("question3", getQuestionValidationRules(watch("interviewType")))}
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
