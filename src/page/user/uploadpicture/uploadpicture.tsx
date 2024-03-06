import { Box } from "@mui/system";
import NavberPageUser from "../../appbar/user/navber_user";
import "../uploadpicture/uploadpicture.css";
import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";

function UploadpicturePage() {
  const navigateedit = useNavigate();

  function navigateToEditPicture() {
    navigateedit("/editpicture");
  }
  return (
    <>
      <div>
        <NavberPageUser></NavberPageUser>
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
                    <div style={{marginTop:"20px",marginBottom:"20px"}}>
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
