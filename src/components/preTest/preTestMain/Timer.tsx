import React, { useState, useEffect } from 'react'
import * as T from './Timer.style'

function Timer() {
    const targetDate = new Date('2024-07-31 18:00:00').getTime() // 면접 날짜
    
    const [countDown, setCountDown] = useState(targetDate - new Date().getTime())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountDown(targetDate - new Date().getTime())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [targetDate])

    const getReturnValues = (countDown: number) => {
        // calculate time left
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
        const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
        
        return [
            String(days).padStart(2, '0'), 
            String(hours).padStart(2, '0'), 
            String(minutes).padStart(2, '0'), 
            String(seconds).padStart(2, '0')
        ]
    }

    const [days, hours, minutes, seconds] = getReturnValues(countDown)

    return (
        <T.TimerContainer>
            <T.TimerWrap>
                <T.TimerBox>{days}</T.TimerBox>
                <T.TimeText>DAYS</T.TimeText>
            </T.TimerWrap>  
            <T.TimerWrap>
                <T.TimerBox>{hours}</T.TimerBox>
                <T.TimeText>HOURS</T.TimeText>
            </T.TimerWrap>
            <T.TimerWrap>
                <T.TimerBox>{minutes}</T.TimerBox>
                <T.TimeText>MINUTES</T.TimeText>
            </T.TimerWrap>
            <T.TimerWrap>
                <T.TimerBox>{seconds}</T.TimerBox> 
                <T.TimeText>SECONDS</T.TimeText>
            </T.TimerWrap>         
        </T.TimerContainer>
    )
}

export default Timer
