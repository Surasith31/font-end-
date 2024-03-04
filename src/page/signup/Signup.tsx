import { Button, CardContent, TextField } from "@mui/material";
import { Box } from "@mui/material";
import NavbarPagels from "../appbar/login-signup/navber_ls";
import "../signup/Signup.css";
import { useNavigate } from "react-router-dom";

function SingupPage() {
  const navigatelogin = useNavigate();

  function navigateToLogin() {
    navigatelogin("/login");
  }
  return (
    <>
      <div>
        <NavbarPagels></NavbarPagels>
      </div>
      <div className="main-s">
        <div>
          <Box className="box1">
            <Box sx={{ backgroundColor: "#D9D9D9" }} className="card1">
              <CardContent>
                <div>
                  <h1 className="ch1">SIGN UP</h1>
                </div>
                <div>
                  <div>Avater</div>
                </div>
                <div className="bgflex">
                  <div>
                    <h2 className="ch2">USER NAME</h2>
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
                    <h2 className="ch2">EMAIL</h2>
                    <div>
                      <TextField
                        type="email"
                        placeholder="email"
                        variant="outlined"
                        className="textw"
                      ></TextField>
                    </div>
                  </div>
                  <div>
                    <h2 className="ch2">PASSWORD</h2>
                    <div>
                      <TextField
                        type="password"
                        placeholder="password"
                        variant="outlined"
                        className="textw"
                      ></TextField>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="sbt">
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
                  onClick={navigateToLogin}
                >
                  SING UP
                </Button>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
export default SingupPage;
