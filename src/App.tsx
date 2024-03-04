import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootPage from "./page/root/Root";
import ErrorPage from "./page/error/Error";
import LoginPage from "./page/login/Login";
import SingupPage from "./page/signup/Signup";
import HomePage from "./page/home/Home";
import ProfilePage from "./page/profile/profile";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/login", element: <LoginPage></LoginPage> },
      { path: "/signup", element: <SingupPage></SingupPage> },
      { path: "/profile", element: <ProfilePage></ProfilePage> },
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
