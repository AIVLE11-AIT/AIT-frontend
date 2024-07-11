import React, { useEffect, useState } from 'react';
import * as I from './interviewerList.style';
import InterviewMailHeader from '../../components/side/InterviewMailHeader';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

interface Interviewer {
    id: number;
    name: string;
    email: string;
    // 다른 필요한 속성들
}

function InterviewerList() {
    let { index } = useParams();
    const [data, setData] = useState<Interviewer[]>([]);

    useEffect(() => {
        axios({
            url: `/interviewGroup/${index}/interviewer/readAll`,
            method: 'get',
            headers: {
                Authorization: sessionStorage.getItem('isLogin'),
            },
        })
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch((error) => {
            console.log('실패');
            console.error('AxiosError:', error);
        });
    }, [index]);

    const navigate = useNavigate();
    function onClickList(id: number) {
        navigate(`/interviewer-result/${index}/${id}`);
    }

    return (
        <I.Container>
            <InterviewMailHeader />
            <I.InterviewMain>
                <I.HeaderContainer>
                    <I.Title>지원자 리스트</I.Title>
                    <I.Subtitle>면접을 진행한 지원자 리스트입니다.</I.Subtitle>
                    <I.ListBox>
                        <I.ListHeaderBar />
                        {data.map((item) => (
                            <I.ListWrap key={item.id} onClick={() => onClickList(item.id)}>
                                <I.IdBox>{item.id}</I.IdBox>
                                <I.ContentBox>{item.name} &nbsp; ({item.email})</I.ContentBox>
                            </I.ListWrap>
                        ))}
                    </I.ListBox>
                </I.HeaderContainer>
            </I.InterviewMain>
        </I.Container>
    );
}

export default InterviewerList;
