import { Box, Button, TextField } from "@mui/material";
import NavberPageUser from "../../appbar/user/navber_user";
import "../editpicture/editpicture.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function EditpicturePage() {
  const navigateback = useNavigate();

  function navigateToback() {
    navigateback(-1);
  }
  return (
    <>
      <div>
        <NavberPageUser></NavberPageUser>
      </div>
      <div className="main-edit">
        <Box className="proedit">
          <Button color="inherit" onClick={navigateToback}>
            <ArrowBackIcon></ArrowBackIcon>
          </Button>
          <Box className="imgcenter">
            <div>
              <img src="src\assets\bg1.png" width={200} />
            </div>
            <div>
              <TextField
                type="email"
                placeholder="Name"
                variant="outlined"
                className="namee"
              ></TextField>
            </div>
            <div className="laybt">
              <Button variant="contained" sx={{ width: "100px" }}>
                Edit
              </Button>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
}
export default EditpicturePage;
