import React from 'react';
import './style.css';

// ! 첫 문자 대문자로 적어야지 component로 인식 
// ! 1. div로 공간부터 크게 나누기 
export default function KakaoSignIn() {
    return (
        <div className='kakao-container'>
            {/*로그인 폼 레이아웃 */}
            <div className='kakao-login-form'>
                {/*로고 레이아웃 */}
                <div className='kakao-logo'>
                    <div className='kakao-logo-image'> </div>
                </div>
                
                {/* 로그인 레이아웃*/}
                <div className='kakao-login'>
                    {/*인풋 레이아웃 */}
                    <div className='kakao-input-layout'></div>
                    {/*아이디 인풋 */}
                    <div className="kakao-input-box">
                        <input className="kakao-input" type = "text" placeholder='카카오메일 아이디, 이메일, 전화번호'/>
                    </div>
                    {/*비밀번호 인풋  */}
                    <div className="kakao-input-box">
                        <input className="kakao-input" type = "password" placeholder='비밀번호'/>
                    </div>
                    {/*로그인 상태 유지  */}
                    <div className="kakao-checkbox-box">
                        <input className="kakao-checkbox" type = "checkbox"/>
                        {' 로그인 상태 유지'}
                    </div>
                    {/*버튼 레이아웃 */}
                    <div className='kakao-button-layout'></div>
                    {/* 로그인 버튼  */}
                    <button type = "button" className='kakao-login-button'>로그인</button>
                    <div className="kakao-divider"></div>
                    {/* QR코드 로그인  */}
                    <button type = "button" className="kakao-qr-button">QR코드 로그인</button>
                    {/*링크 레이아웃 */}
                    <div className='kakao-link-layout'>
                    {/* 회원가입 링크  */}
                        <a className="kakao-link" href = "https://accounts.kakao.com/weblogin/create_account?app_type=web&continue=https%3A%2F%2Fcs.kakao.com%2F&lang=ko">회원 가입  </a>
                        {/* 정보 찾기 링크  */}
                        <a className="kakao-link" href = "https://accounts.kakao.com/weblogin/find_password?app_type=web&continue=https%3A%2F%2Fcs.kakao.com%2F&lang=ko">정보 찾기</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
