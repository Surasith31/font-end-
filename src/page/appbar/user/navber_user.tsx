import "../../appbar/css/appbar.css";
import logo from "../../../assets/logo.png";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";

function NavberPageUser() {
  const navigatehome = useNavigate();
  const navigatelogin = useNavigate();
  const navigateprofile = useNavigate();

  function navigateToHome() {
    navigatehome("/");
  }
  function navigateToLogin() {
    navigatelogin("/login");
  }
  function navigateToProfile() {
    navigateprofile("/profile");
  }

  return (
    <>
      <div>
        <Box className="nbu">
          <AppBar position="fixed">
            <Toolbar>
              <div className="fg">
                <img src={logo} className="logo" />
              </div>
              <div>
                <IconButton onClick={navigateToHome}>
                  <HomeIcon color="primary" className="bticon"></HomeIcon>
                </IconButton>
                <IconButton>
                  <InfoIcon color="primary" className="bticon"></InfoIcon>
                </IconButton>
                <IconButton>
                  <PhotoSizeSelectActualIcon
                    color="primary"
                    className="bticon"
                  ></PhotoSizeSelectActualIcon>
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
