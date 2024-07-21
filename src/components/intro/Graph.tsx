import React from 'react'

function Graph() {
  return (
    <>
    <table>
        <thead>
            <tr>
                <th style={{ color: '#404146', fontSize: '20px', textAlign: 'center', padding: '10px', verticalAlign: 'middle' }}>
                비교 항목
                </th>
                <th style={{ color: '#696CEA', fontSize: '20px', textAlign: 'center', padding: '10px', verticalAlign: 'middle' }}>
                AIT
                </th>
                <th style={{ color: 'gray', fontSize: '20px', textAlign: 'center', padding: '10px', verticalAlign: 'middle' }}>
                A사
                </th>
                <th style={{ color: 'gray', fontSize: '20px', textAlign: 'center', padding: '10px', verticalAlign: 'middle' }}>
                B사
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{ color: '#404146', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle', fontWeight: '400' }}>
                    영상 면접
                </td>
                <td style={{ color: '#696CEA', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo"></img>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo"></img>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo"></img>
                </td>
            </tr>
            <tr>
                <td style={{ color: '#404146', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle', fontWeight: '400' }}>
                    행동 분석
                </td>
                <td style={{ color: '#696CEA', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo"></img>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo"></img>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo"></img>
                </td>
            </tr>
            <tr>
                <td style={{ color: '#404146', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle', fontWeight: '400' }}>
                    음성 분석
                </td>
                <td style={{ color: '#696CEA', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo"></img>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo"></img>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo"></img>
                </td>
            </tr>
            <tr>
                <td style={{ color: '#404146', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle', fontWeight: '400' }}>
                    답변 분석
                </td>
                <td style={{ color: '#696CEA', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo"></img>
                    <div style={{ fontWeight: '400', marginTop: '10px', fontSize:'15px' }}>응시자 답변의 맥락을 분석 및 평가</div>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo"></img>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                </td>
            </tr>
            <tr>
                <td style={{ color: '#404146', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle', fontWeight: '400' }}>
                    STT<br/>(Speech-to-Text)
                </td>
                <td style={{ color: '#696CEA', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo"></img>
                    <div style={{ fontWeight: '400', marginTop: '10px', fontSize:'15px' }}>98.4%의 정확도</div>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck2.svg'} alt="Logo"></img>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                </td>
            </tr>
            <tr>
                <td style={{ color: '#404146', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle', fontWeight: '400' }}>
                    영어 면접
                </td>
                <td style={{ color: '#696CEA', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo"></img>
                    <div style={{ fontWeight: '400', marginTop: '10px', fontSize:'15px' }}>영어 답변 AI분석 가능</div>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                </td>
            </tr>
            <tr>
                <td style={{ color: '#404146', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle', fontWeight: '400' }}>
                    기업 맞춤형
                </td>
                <td style={{ color: '#696CEA', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo"></img>
                    <div style={{ fontWeight: '400', marginTop: '10px', fontSize:'15px' }}>분석 비율 직접 조정 가능</div>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                </td>
            </tr>
            <tr>
                <td style={{ color: '#404146', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle', fontWeight: '400' }}>
                    자소서 기반 질문
                </td>
                <td style={{ color: '#696CEA', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                    <img src={process.env.PUBLIC_URL + '/images/IntroCheck1.svg'} alt="Logo"></img>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                </td>
                <td style={{ color: '#D0D2D7', fontSize: '18px', textAlign: 'center', padding: '20px 10px', verticalAlign: 'middle' }}>
                </td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default Graph