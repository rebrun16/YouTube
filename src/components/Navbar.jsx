import React from 'react'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Link } from "react-router-dom";
const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius:25px;
  color: ${({ theme }) => theme.text};
`;
const Searches = styled.div`
padding:180px;
display: flex;
align-items: center;
justify-content: space-between;
color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;
const Buttons = styled.div`
  padding:20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Введите запрос'/>
          <SearchIcon/>
        </Search>
        <Searches>
            <KeyboardIcon/>
            <KeyboardVoiceIcon/>
        </Searches>
        <Buttons>
          <VideoCameraBackIcon/>
        </Buttons>
        <Buttons>
          <NotificationsActiveIcon/>
        </Buttons>
        <Link to="signin" style={{textDecoration:"none"}}>
          <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar
