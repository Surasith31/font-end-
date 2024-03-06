import {
  AppBar,
  Button,
  Grid,
  IconButton,
  TextField,
  Toolbar,
} from "@mui/material";
import "../login/Login.css";
import bg from "../../assets/bg1.png";
import chu from "../../assets/chu.png";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";


function LoginPage() {
  const navigateSignup = useNavigate();
  const navigateHome = useNavigate();
  const navigatelogin = useNavigate();

  function navigateToLogin() {
    navigatelogin("/login");
  }
  function navigateToSingup() {
    navigateSignup("/signup");
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
      <div>
        <div className="bggif">
          <Box className="mainbg">
            <Grid container spacing={0}>
              <Grid xs={6}>
                <img src={bg} className="img1" />
              </Grid>
              <Grid xs={6}>
                <div className="bg1">
                  <div>
                    <img src={chu} className="img2" />
                    <h1 className="h1">LOGIN</h1>
                  </div>
                  <div className="bg2 ">
                    <div className="padding">
                      <TextField
                        type="email"
                        label="EMAIL"
                        variant="outlined"
                        InputLabelProps={{
                          style: {
                            color: "#000000",
                            fontFamily: "fontTaviraj",
                          },
                        }}
                      ></TextField>
                    </div>
                    <div className="padding">
                      <TextField
                        type="password"
                        label="PASSWORD"
                        variant="outlined"
                        InputLabelProps={{
                          style: {
                            color: "#000000",
                            fontFamily: "fontTaviraj",
                          },
                        }}
                      ></TextField>
                    </div>
                  </div>
                  <div className="bg3">
                    <Button
                      variant="text"
                      size="large"
                      className="bt1"
                      sx={{
                        fontFamily: "fontTaviraj",
                        fontSize: "22px",
                        textDecoration: "underline",
                        color: "#000000",
                        opacity: "0.4",
                      }}
                      onClick={navigateToSingup}
                    >
                      SING UP
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      className="bt2"
                      sx={{
                        fontFamily: "fontYatraOne",
                        color: "white",
                        backgroundColor: "#4F6F52",
                        borderRadius: "10px",
                        fontSize: "28px",
                        "&:hover": {
                          backgroundColor: "#00db00",
                        },
                      }}
                      onClick={() => {
                        navigateToHome();
                        alert("Login สำเร็จ");
                      }}
                    >
                      LOGIN
                    </Button>
                  </div>
                  <div></div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
