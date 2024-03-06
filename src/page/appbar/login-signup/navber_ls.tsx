import "../../appbar/css/appbar.css";
import logo from "../../../assets/logo.png";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

function NavbarPagels() {
  const navigatehome = useNavigate();
  const navigatelogin = useNavigate();

  function navigateToHome() {
    navigatehome("/");
  }
  function navigateToLogin() {
    navigatelogin("/login");
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
    </>
  );
}
export default NavbarPagels;
