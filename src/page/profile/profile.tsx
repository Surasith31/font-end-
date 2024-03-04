import { useNavigate } from "react-router-dom";
import NavberPageUser from "../appbar/user/navber_user";
import "../profile/profile.css";
import { CardContent, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

function ProfilePage() {
  const navigatehome = useNavigate();

  function navigateToHome() {
    navigatehome("/");
  }
  return (
    <>
      <div>
        <NavberPageUser></NavberPageUser>
      </div>
      <div className="main-sp">
        <div>
          <Box className="box1p">
            <Box sx={{ backgroundColor: "#D9D9D9" }} className="card1">
              <CardContent>
                <div>
                  <h1 className="ch1p">PROFILE</h1>
                </div>
                <div>
                  <div>Avater</div>
                </div>
                <div className="bgflexp">
                  <div>
                    <h2 className="ch2p">USER NAME</h2>
                    <div>
                      <TextField
                        type="email"
                        placeholder="username"
                        variant="outlined"
                        className="textw"
                      ></TextField>
                    </div>
                  </div>
                  <div>
                    <h2 className="ch2p">PASSWORD</h2>
                    <div>
                      <TextField
                        type="password"
                        placeholder="password"
                        variant="outlined"
                        className="textw"
                      ></TextField>
                    </div>
                  </div>
                  <div>
                    <h2 className="ch2p">CONFIRM PASSWORD</h2>
                    <div>
                      <TextField
                        type="password"
                        placeholder="confirm password"
                        variant="outlined"
                        className="textw"
                      ></TextField>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="sbtp">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    fontFamily: "fontYatraOne",
                    color: "white",
                    backgroundColor: "#4F6F52",
                    borderRadius: "10px",
                    fontSize: "22px",
                    width: "30%",
                    "&:hover": {
                      backgroundColor: "#2c9200",
                    },
                  }}
                  onClick={navigateToHome}
                >
                  UP DATE
                </Button>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
