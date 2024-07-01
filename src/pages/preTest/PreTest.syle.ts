import styled from "styled-components";

// 사용 방법 헤더
export const Header = styled.div`
    margin-top: 88px;
`;

// 사용 방법 헤더 text1
export const HeaderText1 = styled.div`
    color: #6D6D6D;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`;

// 사용 방법 헤더 text2
export const HeaderText2 = styled.div`
    color: #404146;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-top: 40px;
`;

// 사용 방법 헤더 text3
export const HeaderText3 = styled.div`
    color: #404146;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-top: 39px;
    line-height: 1.3;
`;

export const StartBtn = styled.div`
    display: flex;
    width: 352px;
    height: 49px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: #696CEA;
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    margin: 0 auto 100px auto;
    transition: background-color 0.3s ease; // 부드러운 색 전환을 위한 transition 추가

    &:hover {
        background: #8184ea; // 마우스를 올렸을 때 조금 연한 색
    }
`;