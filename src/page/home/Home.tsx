import { Button, Grid, IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import NavberPageUser from "../appbar/user/navber_user";
import FavoriteIcon from "@mui/icons-material/Favorite";
import bg from "../../assets/bg1.png";
import "../home/Home.css";
function HomePage() {
  function n1() {}

  return (
    <>
      <div>
        <NavberPageUser></NavberPageUser>
      </div>
      <div>
        <div className="mainhome">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={10}>
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
                            <img src={bg} className="imgw" onClick={n1} />
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
              <Grid xs={2} sx={{ border: "1px solid red" }}>
                <div className="layout-top10">
                  <div>
                    <div className="home-top10">
                      <div>
                        <h2>TOP 10 !!</h2>
                      </div>
                      <div className="btmy">
                        <Button>MY</Button>
                      </div>
                    </div>
                    <div className="layout-box">
                      <Box className="box-top10">1</Box>
                      <Box className="box-top10">2</Box>
                      <Box className="box-top10">3</Box>
                      <Box className="box-top10">4</Box>
                      <Box className="box-top10">5</Box>
                      <Box className="box-top10">6</Box>
                      {/* <Box className="box-top10">7</Box>
                    <Box className="box-top10">8</Box>
                    <Box className="box-top10">9</Box>
                    <Box className="box-top10">10</Box>                 */}
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
