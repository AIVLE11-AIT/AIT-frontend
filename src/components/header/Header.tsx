import * as H from './Header.style';
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    // 로고 클릭 시
    const onClickLogoBtn = () => {
        navigate('/');
    }

    // 로그아웃 버튼 클릭 시
    const onClickLogoutBtn = () => {
        sessionStorage.removeItem('isLogin');
        navigate('/');
    }

    // 로그인 버튼 클릭 시
    const onClickLoginBtn = () => {
        navigate('/login');
    }

    const handleContactButtonClick = () => {
        if (sessionStorage.getItem('isLogin')) {
            navigate('/contact-board-list');
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            <H.HeaderDiv>
                <H.LogoDiv onClick={onClickLogoBtn}>
                    <img src={process.env.PUBLIC_URL + '/images/Logo.svg'} alt="Logo"></img>
                </H.LogoDiv>
                <H.HeaderWrap>
                    <H.HeaderContent>서비스 소개</H.HeaderContent>
                    <H.HeaderContent onClick={handleContactButtonClick}>문의하기</H.HeaderContent>
                    {sessionStorage.getItem('isLogin') === null ? (
                    <H.LoginBtn onClick={onClickLoginBtn}>
                        <H.LoginBtnText>Login</H.LoginBtnText>
                    </H.LoginBtn>) : (
                    <H.LoginBtn onClick={onClickLogoutBtn}>
                        <H.LoginBtnText>Logout</H.LoginBtnText>
                    </H.LoginBtn>
                    )}
                </H.HeaderWrap>
            </H.HeaderDiv>

            <Outlet />
        </>
    );
}

export default Header;
