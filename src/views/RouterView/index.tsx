import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'




// # Router
// ? Server의 Resource 경로를 추적하고 있다가 해당 경로가 바뀌면 
// ? 지정된 경로의 Resource를 반환 해주는 역할 
// ? npm install react-router-dom 명령어 


// ? root 경로에 있는 index.tsx의 render 함수 내부에 
// ? <BrowserRouter> 로 App 컴포넌트를 감싸줘야 함 

// ^ Route 컴포넌트 
// ? Resource Path에 따라 보여주고자 하는 컴포넌트를 지정할 때 사용 

// ^ Link 컴포넌트
// ? Web 서버 내에서 특정한 Resource Path로 변경하고자 할때 사용 

// ^ useNavigate Hook 함수 
// ? Resource Path를 변경(이동) 시켜주는 훅 함수 
// ? import {useNavigate} from 'react-router-dom';

// ? const 네비게이터 함수명 = useNavigate();
// ? 네비게이터함수명(path);

// ?  Resource Path를 변경시키기 전에 특정 작업하고자 할때 사용됨

// ^ useParam Hook 함수
// ? Resource Path로부터 특정 값을 가져올때 사용 
// ? import {useParams } = 'react-router-dom';

// ? const {pathVariable명} = useParams();

export default function RouterView() {
  // ! Hook 함수는 함수형 컴포넌트의 최상단에 적는것은 무조건 
  const [path,setPath] = useState<string>('');
  const navigator = useNavigate();

  // ^ Resource Path(url 주소)로 부터 특정 값을 가져올 때 사용 
  const {pathValue} = useParams();

  const movePath = () =>{
    // ? path: qwer
    console.log(path);
    // ^ '/'를 붙이면 Root기준으로 움직여지고 
    //  ^ '/'를 붙이지 않으면  하면 현재 Path뒤에 '/'가 붙고 
    // ^ 경로가 추가되서 변경됨 
    if(path !==''&& path !=='main')
    navigator('/'+path);
  } 

  return (
    <>
      <Typography variant='h3'>{pathValue}</Typography>
      <Routes>
        {/* Route path가 test 이니까 localhost:3000/test 치면 Test Page가 나온다  */}
        <Route path='test' element={(<Typography variant='h3'>Test Page</Typography>)}></Route>
      </Routes>
      <Link to='/test'>test</Link>{'    '}
      <Link to='/'>main</Link>
      <TextField variant='filled' label='path' onChange={(event)=>setPath(event.target.value)}/>
      <Button variant='contained' onClick={movePath}>move!</Button>
    </>

  )
}
