import { Box } from "@mui/system";
import "../../appbar/css/appbar.css"
import "../uploadpicture/uploadpicture.css";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Toolbar,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useNavigate } from "react-router-dom";
import "../../appbar/css/appbar.css"

function UploadpicturePage() {
  const navigateedit = useNavigate();
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
  function navigateToEditPicture() {
    navigateedit("/editpicture");
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
      <div className="bgup">
        <div>
          <Box>
            <Grid container spacing={0} className="topgrid">
              <Grid xs={7} className="Grid_layout_1">
                <div className="h1_layout">
                  <h1>อัปโหลดรูปภาพ</h1>
                </div>
                <div>
                  <div className="box_upload">
                    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                      <Button variant="contained" component="label">
                        Upload Images
                        <input type="file" hidden />
                      </Button>
                    </div>
                    <div>
                      <TextField
                        type="email"
                        placeholder="Name"
                        variant="outlined"
                        className="textw"
                      ></TextField>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid xs={5} className="Grid_layout_2">
                <Box>
                  <div className="h1_layout">
                    <h1>รูปที่ตัวเอง</h1>
                  </div>
                  <div className="img_pd">
                    <List className="img_my" style={{ marginTop: "10px" }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 70, height: 70 }}>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                          ชื่อ : <br />
                          คะเเนน :{" "}
                        </ListItemText>
                        <div>
                          <Button
                            variant="contained"
                            sx={{
                              marginRight: "10px",
                              backgroundColor: "#D8D97D",
                            }}
                            onClick={navigateToEditPicture}
                          >
                            เเก้ไข
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#E44444" }}
                          >
                            ลบ
                          </Button>
                        </div>
                      </ListItem>
                    </List>
                    <List className="img_my" style={{ marginTop: "10px" }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 70, height: 70 }}>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                          ชื่อ : <br />
                          คะเเนน :{" "}
                        </ListItemText>
                        <div>
                          <Button
                            variant="contained"
                            sx={{
                              marginRight: "10px",
                              backgroundColor: "#D8D97D",
                            }}
                          >
                            เเก้ไข
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#E44444" }}
                          >
                            ลบ
                          </Button>
                        </div>
                      </ListItem>
                    </List>
                    <List className="img_my" style={{ marginTop: "10px" }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 70, height: 70 }}>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                          ชื่อ : <br />
                          คะเเนน :{" "}
                        </ListItemText>
                        <div>
                          <Button
                            variant="contained"
                            sx={{
                              marginRight: "10px",
                              backgroundColor: "#D8D97D",
                            }}
                          >
                            เเก้ไข
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#E44444" }}
                          >
                            ลบ
                          </Button>
                        </div>
                      </ListItem>
                    </List>
                    <List className="img_my" style={{ marginTop: "10px" }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 70, height: 70 }}>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                          ชื่อ : <br />
                          คะเเนน :{" "}
                        </ListItemText>
                        <div>
                          <Button
                            variant="contained"
                            sx={{
                              marginRight: "10px",
                              backgroundColor: "#D8D97D",
                            }}
                          >
                            เเก้ไข
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#E44444" }}
                          >
                            ลบ
                          </Button>
                        </div>
                      </ListItem>
                    </List>
                    <List className="img_my" style={{ marginTop: "10px" }}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar sx={{ width: 70, height: 70 }}>
                            <ImageIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                          ชื่อ : <br />
                          คะเเนน :{" "}
                        </ListItemText>
                        <div>
                          <Button
                            variant="contained"
                            sx={{
                              marginRight: "10px",
                              backgroundColor: "#D8D97D",
                            }}
                          >
                            เเก้ไข
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "#E44444" }}
                          >
                            ลบ
                          </Button>
                        </div>
                      </ListItem>
                    </List>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}

export default UploadpicturePage;
