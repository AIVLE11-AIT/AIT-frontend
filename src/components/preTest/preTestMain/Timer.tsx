import React, { useState, useEffect } from 'react';
import * as T from './Timer.style';
import { interviewEndAtom, interviewStartAtom } from '../../../recoil/groupProfileAtoms';
import { useRecoilValue } from 'recoil';

interface TimerProps {
  language?: string;
}

function Timer({ language }: TimerProps) {
  const start_date = useRecoilValue(interviewStartAtom);
  const end_date = useRecoilValue(interviewEndAtom);
  const targetDate = new Date(start_date).getTime();
  const endDate = new Date(end_date).getTime();

  const [countDown, setCountDown] = useState(targetDate - new Date().getTime());
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      if (now >= endDate) {
        setStatus('end');
        clearInterval(intervalId);
      } else if (now >= targetDate) {
        setStatus('started');
        clearInterval(intervalId);
      } else {
        setCountDown(targetDate - now);
        setStatus('');
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, endDate]);

  const getReturnValues = (countDown: number) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [
      String(days).padStart(2, '0'),
      String(hours).padStart(2, '0'),
      String(minutes).padStart(2, '0'),
      String(seconds).padStart(2, '0')
    ];
  };

  const [days, hours, minutes, seconds] = getReturnValues(countDown);

  return (
    <T.TimerContainer>
      {status === 'loading' && <T.StatusText>{language === 'eng' ? 'Loading...' : '로딩 중...'}</T.StatusText>}
      {status === 'end' && <T.StatusText>{language === 'eng' ? 'The interview has ended.' : '면접이 종료되었습니다.'}</T.StatusText>}
      {status === 'started' && <T.StatusText>{language === 'eng' ? 'The interview has started. Please begin your interview!' : '면접이 시작되었습니다:) 면접 응시를 시작해 주세요!'}</T.StatusText>}
      {status === '' && (
        <>
          <T.TimerWrap>
            <T.TimerBox>{days}</T.TimerBox>
            <T.TimeText>{language === 'eng' ? 'DAYS' : '일'}</T.TimeText>
          </T.TimerWrap>
          <T.TimerWrap>
            <T.TimerBox>{hours}</T.TimerBox>
            <T.TimeText>{language === 'eng' ? 'HOURS' : '시간'}</T.TimeText>
          </T.TimerWrap>
          <T.TimerWrap>
            <T.TimerBox>{minutes}</T.TimerBox>
            <T.TimeText>{language === 'eng' ? 'MINUTES' : '분'}</T.TimeText>
          </T.TimerWrap>
          <T.TimerWrap>
            <T.TimerBox>{seconds}</T.TimerBox>
            <T.TimeText>{language === 'eng' ? 'SECONDS' : '초'}</T.TimeText>
          </T.TimerWrap>
        </>
      )}
    </T.TimerContainer>
  );
}

export default Timer;
