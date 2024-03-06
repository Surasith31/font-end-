import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import NavberPageUser from "../appbar/user/navber_user";
import bg from "../../assets/bg1.png";
import "../home/Home.css";
import { useNavigate } from "react-router-dom";
import ImageIcon from "@mui/icons-material/Image";

function HomePage() {
  const navigatescore = useNavigate();

  function navigateToBoxscore() {
    navigatescore("/boxscore");
  }

  return (
    <>
      <div>
        <NavberPageUser></NavberPageUser>
      </div>
      <div>
        <div className="mainhome">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={9.7}>
                <div className="home-h1">
                  <h1>ชอบใครมากกว่ากัน ?</h1>
                </div>
                <div>
                  <Box className="boxcenter">
                    <Stack direction="row" spacing={2}>
                      <div>
                        <Box className="boxcard">
                          <div>
                            <h2 className="home-h1 ">Name</h2>
                          </div>
                          <div>
                            <img src={bg} className="imgw" />
                          </div>
                          <div className="h2-st">
                            <h2>50</h2>
                          </div>
                        </Box>
                      </div>
                      <div className="home-h1">
                        <h1>OR</h1>
                      </div>
                      <div>
                        <Box className="boxcard">
                          <div>
                            <h2 className="home-h1 ">Name</h2>
                          </div>
                          <div>
                            <img src={bg} className="imgw" />
                          </div>
                          <div className="h2-st">
                            <h2>50</h2>
                          </div>
                        </Box>
                      </div>
                    </Stack>
                  </Box>
                </div>
              </Grid>
              <Grid xs={2.3} className="layout_top10_main">
                <div className="layout-top10">
                  <div>
                    <div className="home-top10">
                      <div>
                        <h2>TOP 10 !!</h2>
                      </div>
                      <div className="btmy">
                        <Button
                          variant="outlined"
                          color="inherit"
                          size="large"
                          onClick={() => {
                            navigateToBoxscore();
                          }}
                        >
                          MY
                        </Button>
                      </div>
                    </div>
                    <div>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                      <List className="top10_box" style={{ marginTop: "10px" }}>
                        <ListItem>
                          <h3 style={{ marginRight: "10px" }}>1.</h3>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 50, height: 50 }}>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>
                            ชื่อ : <br />
                            โดย: <br />
                            คะเเนน :{" "}
                          </ListItemText>
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div></div>
    </>
  );
}
export default HomePage;
