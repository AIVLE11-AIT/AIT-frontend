import React, { useEffect, useState } from 'react';
import * as Q from './Question.style';

function Question() {
    // 질문 배열
    const questions = [
        '안녕하세요? 만나서 만갑습니다.',
        '먼저, 자기소개를 말해주세요.',
        '하하하.'
        // 다음 질문들 추가
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        // 첫 번째 질문은 2초 간격으로 보여줌
        if (currentQuestionIndex === 0) {
        const timeout1 = setTimeout(() => {
            setCurrentQuestionIndex(1);
        }, 2000); // 2초 후에 다음 질문으로 넘어감

        return () => clearTimeout(timeout1);
        } else {
        // 그 이후의 질문은 1분 40초 (100초) 후에 보여줌
        const timeout2 = setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
        }, 100000); // 100초 후에 다음 질문으로 넘어감

        return () => clearTimeout(timeout2);
        }
    }, [currentQuestionIndex, questions.length]);

    return (
        <Q.QContainer>
        <Q.QBox>{questions[currentQuestionIndex]}</Q.QBox>
        </Q.QContainer>
    );
}

export default Question;
