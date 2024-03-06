import { Box } from "@mui/system";
import NavberPageUser from "../../appbar/user/navber_user";
import "../boxscore/boxscore.css";
import { LineChart } from "@mui/x-charts/LineChart";
import { Grid } from "@mui/material";
import chu from "../../../assets/chu.png";
function BoxscorePage() {
  return (
    <>
      <div>
        <NavberPageUser></NavberPageUser>
      </div>
      <div className="main_boxscore">
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6} className="box_l">
              <div className="h1-center">
                <h1>NAME : Tle</h1>
                <div>
                  <img src={chu} alt="" />
                </div>
              </div>
            </Grid>
            <Grid xs={6} className="box_l">
              <div>
                <Box>
                  <div className="h1-center">
                    <h1>GRAPH</h1>
                  </div>
                  <div>
                    <LineChart
                      series={[
                        { curve: "linear", data: [0, 5, 2, 6, 3, 9.3] },
                        { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
                      ]}
                      width={550}
                      height={500}
                    />
                  </div>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default BoxscorePage;
