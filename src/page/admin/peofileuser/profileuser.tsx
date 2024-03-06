import { Box } from "@mui/system";

import "../peofileuser/profileuser.css";
import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import "../../appbar/css/appbar.css";
function ProfileUserpage() {
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
      <div className="mainprofileuser">
        <div>
          <Box className="boxprofile">
            <div className="pro-flex">
              <List className="pro_user_email" style={{ marginTop: "10px" }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ width: 50, height: 50 }}>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    Name : <br />
                    Email :{" "}
                  </ListItemText>
                </ListItem>
              </List>
            </div>
            <div>
              <Box>
                <Grid
                  container
                  spacing={{ xs: 2, md: 2 }}
                  columns={{ xs: 4, sm: 8, md: 8 }}
                >
                  {Array.from(Array(5)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <h1>img 1</h1>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}

export default ProfileUserpage;
