import React, { useEffect, useState } from 'react'
import * as R from './Report.style';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface ReportData {
    action_score: string; // Adjust the type according to the actual structure
    voice_score: string;
    context_score: string;
    total_voice_level:string;
    total_voice_speed: string;
    total_voice_intj: string;

    total_eyetrack_gesture_score:string;
    total_face_gesture_score: string;
    total_face_emotion_score: string;
    total_body_gesture_score: string;
    total_hand_count_score: string;

    total_lsa_score: string;
    total_similarity_score: string;
    total_munmek_score: string;
    total_emotion_score: string;

    total_report: string;
    total_score: number;
  }
  
  function Report() {
    let { groupId, interviewerId } = useParams();
    const [report, setReport] = useState<ReportData | undefined>(undefined);

    useEffect(() => {
        axios({
          url: `/interviewGroup/${groupId}/interviewer/${interviewerId}/result/read`,
          method: 'get',
          headers: {
            Authorization: sessionStorage.getItem('isLogin'),
          },
        })
          .then((response) => {
            //console.log(response.data);
            setReport(response.data);
          })
          .catch((error) => {
            console.log('실패');
            console.error('AxiosError:', error);
          });
      }, []);
  return (
    <div>
        <R.Main>
            <R.Container>
                <R.ContainerText>행동 분석 결과</R.ContainerText>
                {report && <R.ContainerTitle>{report.action_score}/100</R.ContainerTitle>}
                {report && (
                    <R.BarGraph>
                        <R.BarBox margin="7px">
                            <R.BarContainer width="50px">
                                <R.Bar score={parseInt(report.total_eyetrack_gesture_score)} total={30} color="#696CEA"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_eyetrack_gesture_score}/30<br/>시선처리</R.BarLabel>    
                        </R.BarBox>   
                        <R.BarBox margin="7px">
                            <R.BarContainer width="50px">
                                <R.Bar score={parseInt(report.total_face_gesture_score)} total={30} color="#696CEA"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_face_gesture_score}/30<br/>얼굴움직임</R.BarLabel>    
                        </R.BarBox> 
                        <R.BarBox margin="7px">
                            <R.BarContainer width="50px">
                                <R.Bar score={parseInt(report.total_face_emotion_score)} total={20} color="#696CEA"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_face_emotion_score}/20<br/>표정분석</R.BarLabel>    
                        </R.BarBox>  
                        <R.BarBox margin="7px">
                            <R.BarContainer width="50px">
                                <R.Bar score={parseInt(report.total_body_gesture_score)} total={10} color="#696CEA"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_body_gesture_score}/10<br/>몸움직임</R.BarLabel>    
                        </R.BarBox>  
                        <R.BarBox margin="7px">
                            <R.BarContainer width="50px">
                                <R.Bar score={parseInt(report.total_hand_count_score)} total={10} color="#696CEA"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_hand_count_score}/10<br/>손움직임</R.BarLabel>    
                        </R.BarBox>     
                    </R.BarGraph>           
                )}
            </R.Container>

            <R.Container>
                <R.ContainerText>음성 분석 결과</R.ContainerText>
                {report && <R.ContainerTitle>{report.voice_score}/100</R.ContainerTitle>}
                {report && (
                    <R.BarGraph>
                        <R.BarBox margin="25px">
                            <R.BarContainer width="65px">
                                <R.Bar score={parseInt(report.total_voice_level)} total={100} color="#FFBC2A"/> {/*30, 40, 30 */}
                            </R.BarContainer>
                            <R.BarLabel>{report.total_voice_level}/30<br/>목소리크기</R.BarLabel>    
                        </R.BarBox>   
                        <R.BarBox margin="25px">
                            <R.BarContainer width="65px">
                                <R.Bar score={parseInt(report.total_voice_speed)} total={100} color="#FFBC2A"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_voice_speed}/40<br/>발화속도</R.BarLabel>    
                        </R.BarBox> 
                        <R.BarBox margin="25px">
                            <R.BarContainer width="65px">
                                <R.Bar score={parseInt(report.total_voice_intj)} total={100} color="#FFBC2A"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_voice_intj}/30<br/>습관어</R.BarLabel>    
                        </R.BarBox>   
                    </R.BarGraph>           
                )}
            </R.Container>

            <R.Container>
                <R.ContainerText>답변 분석 결과</R.ContainerText>
                {report && <R.ContainerTitle>{report.context_score}/100</R.ContainerTitle>}
                {report && (
                    <R.BarGraph>
                        <R.BarBox margin="15px">
                            <R.BarContainer width="55px">
                                <R.Bar score={parseInt(report.total_lsa_score)} total={25} color="#FF6C40"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_lsa_score}/25<br/>LSA점수</R.BarLabel>    
                        </R.BarBox>   
                        <R.BarBox margin="15px">
                            <R.BarContainer width="55px">
                                <R.Bar score={parseInt(report.total_similarity_score)} total={5} color="#FF6C40"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_similarity_score}/5<br/>유사도</R.BarLabel>    
                        </R.BarBox> 
                        <R.BarBox margin="15px">
                            <R.BarContainer width="55px">
                                <R.Bar score={parseInt(report.total_munmek_score)} total={40} color="#FF6C40"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_munmek_score}/40<br/>문맥분석</R.BarLabel>    
                        </R.BarBox>   
                        <R.BarBox margin="15px">
                            <R.BarContainer width="55px">
                                <R.Bar score={parseInt(report.total_emotion_score)} total={10} color="#FF6C40"/>
                            </R.BarContainer>
                            <R.BarLabel>{report.total_emotion_score}/10<br/>문장감정</R.BarLabel>    
                        </R.BarBox>   
                    </R.BarGraph>           
                )}
            </R.Container>
        </R.Main>
        {report && <R.ReportBox>
            <R.ReportTitle>
                최종 레포트
                <R.ReportText>{report.total_score}점</R.ReportText>
            </R.ReportTitle>
            {report.total_report}
        </R.ReportBox>}
    </div>
  )
}

export default Report