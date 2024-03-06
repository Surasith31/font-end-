import {
  AppBar,
  Box,
  Button,
  IconButton,
  TextField,
  Toolbar,
} from "@mui/material";
import "../../appbar/css/appbar.css"
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "../editpicture/editpicture.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function EditpicturePage() {
  const navigateback = useNavigate();
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
  function navigateToback() {
    navigateback(-1);
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
      <div className="main-edit">
        <Box className="proedit">
          <Button color="inherit" onClick={navigateToback}>
            <ArrowBackIcon></ArrowBackIcon>
          </Button>
          <Box className="imgcenter">
            <div>
              <img src="src\assets\bg1.png" width={200} />
            </div>
            <div>
              <TextField
                type="email"
                placeholder="Name"
                variant="outlined"
                className="namee"
              ></TextField>
            </div>
            <div className="laybt">
              <Button variant="contained" sx={{ width: "100px" }}>
                Edit
              </Button>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
}
export default EditpicturePage;
