import { useState } from 'react'
import KakaoSignIn from './views/KakaoSignIn';
import NaverSignIn from './views/NaverSignIn'

import {Link} from "react-router-dom";

import './App.css'
import MenuAppBar from './components/MenuAppBar';

export default function App() {
  const [view, setView] = useState<string>('');
  return (
    <div>
      {/* 화살표 함수 ()=>{} */}
      <MenuAppBar setView={setView}/>
      
      <div>
        {/* {view==='naverSignIn' && (<NaverSignIn />)}
        {view==='kakaoSignIn' && (<KakaoSignIn />)} */}
        {/* //# 삼항 비교 연산자  */}
        {/* //? 조건에 따라서 참일떄의 결과값과 거짓일떄의 결과값을 저장해서 
                해당하는 경우의 값을 반환 
                조건 ? 참일 떄의 결과값 : 거짓일 때의 결과값  */}
                {/* if(조건) {}else{} 와 삼항 연산자가 정확하게  일치 */} 
                
                {/* onclick 했을 때 view에 변수 들어가게 하는 함수나 기능은 어디에 있지? */}
                {view}
        {
          view ==='naverSignIn' ? (<NaverSignIn />) : 
          view ==='kakaoSignIn' ? (<KakaoSignIn />) : (<></>)
          // ^ <></>: 아무런 의미가 없는 빈 태그 하지만 꼭 채워야 할 때 
          // ^ 첫 화면은 빈 화면이고 클릭하면 네이버나 카카오 화면이 뜬다 
          // 첫 화면은 클릭을 안했기에 view 가 빈칸 이므로 삼항 연산자가 거짓이므로 카카오 화면이 뜬다 
        }
        
        
      </div>
    </div>
  )
}
