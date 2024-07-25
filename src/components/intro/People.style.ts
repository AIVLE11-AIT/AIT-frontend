import styled from "styled-components";

export const PeopleContainer = styled.div`
    display: flex;
    justify-content: center;
`;

// 사람 박스
export const PeopleBox = styled.div`
    margin: 30px;
    padding: 30px 40px 40px 40px;
    background-color: white;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 500;
    box-shadow: 1px 4px 10px 3px #E2E2FA;
    width: 280px;
`;

export const PartText = styled.div`
    color: #696CEA;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
`;

export const Image = styled.div`
    margin: 20px auto;
    width: 200px;
    height: 200px;
`;

export const Img = styled.img<{margin: string, width: string}>`
    width: ${(props) => props.width};
    height: 230px;
    margin-left: ${(props) => props.margin};
    position: absolute;
    index: 0;
`;

export const Name = styled.div`
    font-size: 17px;
    text-align: center;
    font-weight: 500;
    border-radius: 10px;
    padding: 10px;
    margin: 30px auto 0px auto;
    width: 170px;
    background-color: #696CEA;
    color: white;
    position: relative;
    index: 1;
`;