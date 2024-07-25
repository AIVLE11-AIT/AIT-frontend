import styled from "styled-components";

export const PeopleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;  /* 작은 화면에서도 레이아웃이 깨지지 않도록 flex-wrap 추가 */

    @media (max-width: 768px) {
        margin: 0 10px; /* 작은 화면에서 좌우 여백을 줌 */
    }
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
    width: 300px;
    @media (max-width: 768px) {
        width: 100%;  /* 작은 화면에서 박스가 화면에 꽉 차게 함 */
        margin: 20px 0; /* 상하 마진 조정 */
        padding: 20px;  /* 패딩 조정 */
    }
    width: 280px;
`;

export const PartText = styled.div`
    color: #696CEA;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 14px; /* 작은 화면에서 폰트 크기 조정 */
    }
`;

export const Image = styled.div`
    margin: 20px auto;
    width: 200px;
    height: 200px;
    margin: 20px auto;
`;

export const Img = styled.img<{ margin: string, width: string }>`
    width: ${(props) => props.width};
    height: 230px;
    margin-left: ${(props) => props.margin};
    position: absolute;
    z-index: 0;
`;

export const Name = styled.div`
    font-size: 17px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    font-weight: 500;
    border-radius: 10px;
    padding: 10px;
    margin: 30px auto 0px auto;
    width: 170px;
    background-color: #696CEA;
    color: white;
    position: relative;
    z-index: 1;
`;