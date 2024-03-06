import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootPage from "./page/root/Root";
import ErrorPage from "./page/error/Error";
import LoginPage from "./page/login/Login";
import SingupPage from "./page/signup/Signup";
import HomePage from "./page/home/Home";
import ProfilePage from "./page/user/profile/profile";
import UploadpicturePage from "./page/user/uploadpicture/uploadpicture";
import BoxscorePage from "./page/user/boxscore/boxscore";
import AdminHomePage from "./page/admin/adminhome/adminhome";
import ProfileUserpage from "./page/admin/peofileuser/profileuser";
import EditpicturePage from "./page/user/editpicture/editpicture";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/login", element: <LoginPage></LoginPage> },
      { path: "/signup", element: <SingupPage></SingupPage> },
      { path: "/profile", element: <ProfilePage></ProfilePage> },
      {
        path: "/uploadpicture",
        element: <UploadpicturePage></UploadpicturePage>,
      },
      { path: "/boxscore", element: <BoxscorePage></BoxscorePage> },
      { path: "/admin", element: <AdminHomePage></AdminHomePage> },
      { path: "/profileuser", element: <ProfileUserpage></ProfileUserpage> },
      { path :"/editpicture",element:<EditpicturePage></EditpicturePage>}
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
