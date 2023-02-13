import { Box,Button, TextField, ThemeProvider,Grid } from '@mui/material'
import {IconButtonProps} from '@mui/material/IconButton'
import {styled} from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';



// # MUI
// ?  Material User Interface 
// ?  구글의 머터리얼 디자인을 구현하는 오픈 소스 '리액트 컴포넌트' 라이브러리  
// ?  인스톨 즉시 배포 환경에서 사용할 수 있는 사전 구축된 컴포넌트의 모음
//?   디자인적으로 아름답고 다양한 사용자 정의 옵션을 제공 

// ?  npm install @mui/material @emotion/react @emotion/styled 을 먼저 인스톨 해줘야 한다

// # Mui styled method
// ? mui component들의 style을 지정해주는 메서드 
const CustomIconButton = styled(IconButton)<IconButtonProps>(({theme})=>({
  color: theme.palette.primary.dark
}));
// # Mui createTheme method
// ? 새로운 mui theme를 생성하는 메서드 
// const theme = createTheme({
   
//       palette: {
//         primary:{
//            main:'#ffff00'
//       },


//       secondary:{
//         main: '#00ff00'
//       }
//     }
// });

// const CustomIconButton2 = styled(IconButton)<IconButtonProps>(({})=>({
//   color: theme.palette.secondary.main
// }));


export default function Mui() {

      const [buttonDisabled,setButtonDisabled] = useState<boolean>(true);

  return (
    <>
      {/* 
      // # Button Component
      // ? import {Button} from "@mui/material";
      // ? import Button from "@mui/material/Button";
      // ^ Attribute (Props)
      // ^ 1. variant : 버튼의 형태('text','contained','outlined')
      // ? text: 문자로만 표기한 버튼 
      // ? contained: 배경색이 지정된 버튼 
      // ? outlined : 테두리만 지정된 버튼 
      // ^ 기존적으로 인라인 방식 
      // */} 
        <Button variant = 'text'>Text Button</Button>
        <Button variant = 'contained'>Contained Button</Button>
        <Button variant ='outlined'>Outlined Button</Button>

        {/* 
        // ? Mui의 Button Component는 기본적으로 inline 방식(한개의 횡에 옆으로 나열 )
        // ? Block 형식은 한 횡을 다 차지 
        // ^ 2.  fullWidth
        // ? Button Component를 Block 형태로 지정(가로 사이즈 100% )

        
        */}
        <Button fullWidth>FullWidth Button</Button>
        {/* 
        // # 3. disable 
        // ? 버튼을 사용하지 못하도록 막아주는 Props
         */}
          
         <Button variant='contained' disabled=  {true}>Disabled True Button</Button>
         <Button variant = 'contained' disabled={buttonDisabled} fullWidth>Disabled False Button</Button>

         <Button variant='contained' disabled=  {buttonDisabled}>Disabled True Button</Button>
         <Button onClick={()=>setButtonDisabled(!buttonDisabled)}>Click!</Button>

         {/* 
        //  # 4. sizes
        // ? Button size를 지정되어 있는 사이즈로 지정할 때 
        // ? small,medium,large
         */}

         <Button variant = 'contained' size='small'>Small Button</Button>
         <Button variant = 'contained' size='medium'>Medium Button</Button>
         <Button variant = 'contained' size='large'>Large Button</Button>
         
         
         {/*
        //  # 5. Icon (startIcon, endIcon, )
        // ? Button 내부에서 시작 혹은 종료 지점에 Icon을 추가하고 싶을 떄 지정 
        // ? 값 : Icon Component 
        // ! npm install @mui/icons-material 을 추가해야 MUI Icon을 사용할 수 있음 
        // ! package.json에서 확인 가능 
         
          */}
          <Button variant='outlined' startIcon={<DeleteIcon/>} >Delete</Button>
          <Button variant='contained' endIcon={<SearchIcon/>}>Search</Button>
          {/* 
          // # IconButton 
          // ^ Button을 Icon으로만 구성하고자 할떄 사용하는 컴포넌트 
          // ? Button Component의 모든 기능을 사용 가능 
          // ? 자식 컴포넌트에 Icon Component가 와야함 
          // ? import {IconButton} from '@mui/material'
          // ? import IconButton from '@mui/material/IconButton'
          
          
          */}
          <IconButton>
              <NotificationsActiveOutlinedIcon/>

          </IconButton>
          {/* 
            //^ Color 
            // ? 아이콘의 색깔을 지정해 준다 
            // ? default,primary,success..
            // ?  "inherit" | "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined
          */}

          <IconButton color='primary'>
            <NotificationsActiveOutlinedIcon/>


          </IconButton>
          <IconButton color='error'>
            <NotificationsActiveOutlinedIcon/>


          </IconButton>

          {/* 
            // ^ color customizing
          */}

      {/* <CustomIconButton2 >
        <NotificationsActiveOutlinedIcon />


      </CustomIconButton2> */}


      {/* 
      // # createTheme 메서드로 생성한 커스텀 테마를 
      // ? 해당 컴포넌트 자손들에게 모두 적용되도록 하는 컴포넌트 
      
      
      */}

      {/* <ThemeProvider theme={theme}>
        <IconButton color='primary'>
          <NotificationsActiveOutlinedIcon />


        </IconButton>


      </ThemeProvider> */}

      <br/>

      {/* 
      // # TextField Component 
      // import {TextField} from '@mul/material'
      // ? import TextField from '@mui/material/TextField';
      // ^ Props
      // ^ 1. variant
      // ? 값: 'outlined', 'filled','standard'
      
      */}

      <TextField variant = 'outlined'/>
      <TextField variant = 'filled'/>
      <TextField variant = 'standard'/>

      {/* 
      // # Box Component
      // ? HTMl의 div 태그와 일맥상통
      // ? import { Box } from '@mui/material';
      // ? import Box from '@mui/material/Box';
      // ^ Props
      // ^ 1.  components
      // ^ 2.  
      // ?  Box Component의 속성을 변경 - 모든 html태그로 변경 
      
      
      */}
      <Box component = 'h3'>Hello MUI</Box>
      <Box component = 'a' href='http://naver.com'>Naver</Box>


      {/* 
      
      // # Grid Component
      // ? 공간을 12등분하여 자식 item을 구분 
      // ? 반응형 웹 구현에 기준 
      // ? import {Grid} from '@mui/material'
      // ? import Grid from '@mui/material/Grid'
      // ^ Props
      // ^ 1. container 
      // ? 해당 Component의 공간을 12등분으로 나눠줌
      // ^ 2. item 
      // ? 12등분으로 나눠진 공간에 배치될 요소  
      // ^ spacing
      // ? item간의 간격 지정 - 
      // ^ 4. xs,sm,md,lg,xl
      // ? xs -576px < width 
      // ? sm - 576px >= width
      // ? md - 768px <= width
      // ? lg - 992px <= width
      // ? xl - 1200px <= width
      
      */}

      <Grid container spacing={1} >
        <Grid item xs={12} md={6} xl={4}>
            <Box sx={{height:'100px',backgroundColor:'red'}}></Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
            <Box sx={{height:'100px',backgroundColor:'Blue'}}></Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
            <Box sx={{height:'100px',backgroundColor:'Orange'}}></Box>
        </Grid>
      </Grid>
    
    
    </>
  )
}
