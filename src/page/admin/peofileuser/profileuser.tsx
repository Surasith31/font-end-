import { Box } from "@mui/system";
import NavberAdminPage from "../../appbar/admin/navber_admin";
import "../peofileuser/profileuser.css";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
function ProfileUserpage() {
  return (
    <>
      <div>
        <NavberAdminPage></NavberAdminPage>
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
