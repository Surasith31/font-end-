import {
  AppBar,
  Avatar,
  Button,
  CardContent,
  IconButton,
  TextField,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/material";

import "../signup/Signup.css";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useRef } from "react";
import logo from "../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";

function SingupPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    // ทำสิ่งที่คุณต้องการกับไฟล์ที่ถูกเลือก
    console.log("Selected File:", selectedFile);
  };
  const navigateHome = useNavigate();
  const navigatelogin = useNavigate();

  function navigateToLogin() {
    navigatelogin("/login");
  }
  function navigateToHome() {
    navigateHome("/");
  }
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" style={{ backgroundColor: "#12372A" }}>
            <Toolbar>
              <div className="fg">
                <img src={logo} className="logo" />
              </div>
              <div>
                <IconButton onClick={navigateToHome}>
                  <HomeIcon color="primary" className="bticon"></HomeIcon>
                </IconButton>

                <IconButton onClick={navigateToLogin}>
                  <LoginIcon color="primary" className="bticon"></LoginIcon>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className="main-s">
        <div>
          <Box className="box1">
            <CardContent>
              <div>
                <h1 className="ch1">SIGN UP</h1>
              </div>
              <div>
                <div>
                  <Avatar
                    alt="Remy Sharp"
                    sx={{
                      width: 200,
                      height: 200,
                      margin: "auto",
                      cursor: "pointer",
                      transition: "opacity 0.3s ease-in-out", // เพิ่ม transition เพื่อทำให้มันดูนุ่มนวล
                      ":hover": {
                        opacity: 0.6, // กำหนดค่า opacity เมื่อ hover
                      },
                    }}
                    onClick={handleAvatarClick}
                  ></Avatar>
                  <input
                    type="file"
                    ref={fileInputRef}
                    hidden
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="bgflex">
                <div>
                  <h2 className="ch2">USER NAME</h2>
                  <div>
                    <TextField
                      type="email"
                      placeholder="username"
                      variant="outlined"
                      className="textw"
                    ></TextField>
                  </div>
                </div>
                <div>
                  <h2 className="ch2">EMAIL</h2>
                  <div>
                    <TextField
                      type="email"
                      placeholder="email"
                      variant="outlined"
                      className="textw"
                    ></TextField>
                  </div>
                </div>
                <div>
                  <h2 className="ch2">PASSWORD</h2>
                  <div>
                    <TextField
                      type="password"
                      placeholder="password"
                      variant="outlined"
                      className="textw"
                    ></TextField>
                  </div>
                </div>
              </div>
            </CardContent>
            <div className="sbt">
              <Button
                variant="contained"
                size="large"
                sx={{
                  fontFamily: "fontYatraOne",
                  color: "white",
                  backgroundColor: "#4F6F52",
                  borderRadius: "10px",
                  fontSize: "22px",
                  marginBottom: "20px",
                  width: "30%",
                  "&:hover": {
                    backgroundColor: "#2c9200",
                  },
                }}
                onClick={navigateToLogin}
              >
                SING UP
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
export default SingupPage;
