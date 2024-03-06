import "../../appbar/css/appbar.css";
import logo from "../../../assets/logo.png";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
function NavberPageUser() {
  const navigatehome = useNavigate();
  const navigatelogin = useNavigate();
  const navigateprofile = useNavigate();
  const navigateuploadpicture = useNavigate();

  function navigateToHome() {
    navigatehome("/");
  }
  function navigateToLogin() {
    navigatelogin("/login");
  }
  function navigateToProfile() {
    navigateprofile("/profile");
  }
  function navigateToUploadPicture() {
    navigateuploadpicture("/uploadpicture");
  }

  return (
    <>
      <div>
        <Box>
          <AppBar position="fixed" style={{backgroundColor:"#12372A"}}>
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
    </>
  );
}
export default NavberPageUser;
