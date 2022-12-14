import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Upload from "./Upload";

import CloseIcon from '@mui/icons-material/Close';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

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
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

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
  cursor:pointer;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;
//
const Searches = styled.div`
padding:180px;
display: flex;
align-items: center;
justify-content: space-between;
color: ${({ theme }) => theme.text};
`;

const Buttons = styled.div`
  padding:20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.text}
  `;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#828282;
  border-radius: 50%;
  color: white;
  width:35px;
  height:35px;
`

const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder="?????????????? ????????????"
              onChange={(e) => setQ(e.target.value)}
            />
              <SearchOutlinedIcon onClick={()=>navigate(`/search?q=${q}`)}/>
          </Search>
          <Searches>
            <KeyboardIcon/>
            <CloseIcon/>
          </Searches>
          
          <Div>
              <KeyboardVoiceIcon/>
          </Div>
          <Buttons>
            <NotificationsActiveIcon/>
          </Buttons>
          <Buttons>
            <VideoCameraBackIcon/>
          </Buttons>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <Avatar src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;