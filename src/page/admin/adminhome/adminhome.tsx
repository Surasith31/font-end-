import { Box } from "@mui/system";
import "../adminhome/adminhome.css";
import NavberAdminPage from "../../appbar/admin/navber_admin";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";

function AdminHomePage() {
  const navigateprofileuser = useNavigate();

  function navigateToProfileuser() {
    navigateprofileuser("/profileuser");
  }

  return (
    <>
      <div>
        <NavberAdminPage></NavberAdminPage>
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
                  <List className="box-user" style={{ marginTop: "10px",cursor:"pointer" }}>
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
                  <List className="box-user" style={{ marginTop: "10px",cursor:"pointer" }}>
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
