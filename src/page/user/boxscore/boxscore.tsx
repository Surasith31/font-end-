import { Box } from "@mui/system";
import "../boxscore/boxscore.css";
import { LineChart } from "@mui/x-charts/LineChart";
import { AppBar, Grid, IconButton, Toolbar } from "@mui/material";
import chu from "../../../assets/chu.png";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useNavigate } from "react-router-dom";
import "../../appbar/css/appbar.css"

function BoxscorePage() {
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
      <div className="main_boxscore">
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6} className="box_l">
              <div className="h1-center">
                <h1>NAME : Tle</h1>
                <div>
                  <img src={chu} alt="" />
                </div>
              </div>
            </Grid>
            <Grid xs={6} className="box_l">
              <div>
                <Box>
                  <div className="h1-center">
                    <h1>GRAPH</h1>
                  </div>
                  <div>
                    <LineChart
                      series={[
                        { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
                        { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
                      ]}
                      width={550}
                      height={500}
                    />
                  </div>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
export default BoxscorePage;
