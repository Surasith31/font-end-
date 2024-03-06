import { useNavigate } from "react-router-dom";
import "../profile/profile.css";
import "../../appbar/css/appbar.css"
import {
  CardContent,
  TextField,
  Button,
  Avatar,
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import { useRef, ChangeEvent } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
function ProfilePage() {
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
  const navigatehome = useNavigate();
  const navigatelogin = useNavigate();
  const navigateprofile = useNavigate();
  const navigateuploadpicture = useNavigate();

  function navigateToLogin() {
    navigatelogin("/login");
  }
  function navigateToProfile() {
    navigateprofile("/profile");
  }
  function navigateToUploadPicture() {
    navigateuploadpicture("/uploadpicture");
  }
  function navigateToHome() {
    navigatehome("/");
  }
  return (
    <>
      <div>
        <Box>
          <AppBar position="fixed" style={{ backgroundColor: "#12372A" }}>
            <Toolbar>
              <div className="fg">
                <img src={logo} className="logo" />
              </div>
              <div>
                <IconButton onClick={navigateToHome}>
                  <HomeIcon color="primary" className="bticon"></HomeIcon>
                </IconButton>

                <IconButton onClick={navigateToUploadPicture}>
                  <AddPhotoAlternateIcon
                    color="primary"
                    className="bticon"
                  ></AddPhotoAlternateIcon>
                </IconButton>
                <IconButton onClick={navigateToProfile}>
                  <AccountCircleIcon
                    color="primary"
                    className="bticon"
                  ></AccountCircleIcon>
                </IconButton>
                <IconButton onClick={navigateToLogin}>
                  <LoginIcon color="primary" className="bticon"></LoginIcon>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div className="main-sp">
        <div>
          <Box className="box1p">
            <CardContent>
              <div>
                <h1 className="ch1p">PROFILE</h1>
              </div>
              <div>
                <div>
                  <Avatar
                    alt="Remy Sharp"
                    src=""
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
              <div className="bgflexp">
                <div>
                  <h2 className="ch2p">USER NAME</h2>
                  <div>
                    <TextField
                      type="email"
                      placeholder="username"
                      variant="outlined"
                      className="textw"
                      onClick={handleAvatarClick}
                    ></TextField>
                  </div>
                </div>
                <div>
                  <h2 className="ch2p">PASSWORD</h2>
                  <div>
                    <TextField
                      type="password"
                      placeholder="password"
                      variant="outlined"
                      className="textw"
                    ></TextField>
                  </div>
                </div>
                <div>
                  <h2 className="ch2p">CONFIRM PASSWORD</h2>
                  <div>
                    <TextField
                      type="password"
                      placeholder="confirm password"
                      variant="outlined"
                      className="textw"
                    ></TextField>
                  </div>
                </div>
              </div>
            </CardContent>
            <div className="sbtp">
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
                onClick={navigateToHome}
              >
                UP DATE
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
