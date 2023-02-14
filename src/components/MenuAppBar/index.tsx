import {useState,MouseEvent, Dispatch, SetStateAction} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { PAGES } from 'src/constants';
import { VIEW } from 'src/enums';
import { Link, useNavigate } from 'react-router-dom';


// ! typescript에서는 함수를 매개변수로 쓸 수 있다 



function MenuAppBar() {
  // ! view state//
  //! 파일마다 함수들은 이름이 가더라도 다른 함수로 구별해야 한다 
 

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigator = useNavigate();
 

  const handleOpenNavMenu = (event:MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* 
              //? pages = [{'Naver','NaverSignIn'},{'Kakao','KakaoSignIn'}]
              //? pages = [{title: 'Naver',viewValue: 'naverSignIn'},{title: 'Kakao',viewValue:'KakaoSIgnIn'}]
              // ! 2차원 배열보다는 2번째 방법인 객체배열로 하는것이 더 직관적이고 다양한 타입이 올 수 있어서 장점이 더 많아 
              */}

              {PAGES.map((page) => (
                // ! key 뒤에는 구분자로 구분 할 수 있는 인자를 써서 
                <MenuItem key={page.title} >
                  <Link to={page.viewValue} style={{textAlign:'center'}}>{page.title}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {PAGES.map((page) => (
              <Link to={page.viewValue}>
                <Button
                  key={page.title}
                
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={()=>navigator(page.viewValue)}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Faker" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuAppBar;
