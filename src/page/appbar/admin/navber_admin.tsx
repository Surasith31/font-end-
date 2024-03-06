import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "../../appbar/css/appbar.css";

function NavberAdminPage() {
  const navigatehome = useNavigate();
  const navigatelogin = useNavigate();

  function navigateToHome() {
    navigatehome("/admin");
  }
  function navigateToLogin() {
    navigatelogin("/login");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{backgroundColor:"#12372A"}}>
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
    </>
  );
}
export default NavberAdminPage;
