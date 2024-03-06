import { Box } from "@mui/system";
import "../adminhome/adminhome.css";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import "../../appbar/css/appbar.css"
function AdminHomePage() {
  const navigateprofileuser = useNavigate();
  const navigatehome = useNavigate();
  const navigatelogin = useNavigate();

  function navigateToProfileuser() {
    navigateprofileuser("/profileuser");
  }
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
      <div className="mainadmin">
        <div>
          <Box className="boxadmin">
            <Box className="box_header_user">
              <div className="h1_admin">
                <h1>USER</h1>
              </div>
            </Box>
            <div>
              <div className="layout-box-user">
                <div onClick={navigateToProfileuser}>
                  <List
                    className="box-user"
                    style={{ marginTop: "10px", cursor: "pointer" }}
                  >
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
                <div onClick={navigateToProfileuser}>
                  <List
                    className="box-user"
                    style={{ marginTop: "10px", cursor: "pointer" }}
                  >
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
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
export default AdminHomePage;
