import { useRoutes } from "react-router-dom";
import User from "../Components/AxiosFetch/Post";
import Loginform from "../Components/LoginForm/Login";
import View from "../Components/View/Views";
// import Add from "../Components/View/Addpost";
import COMMENT from "../Components/comments";
//import Add from "../Components/addpost";
const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/us", element: <User /> },
    { path: "/", element: <Loginform /> },
    { path: "/us/View", element: <View /> },
    // { path: "/us/AddPost", element: <Add /> },
    { path: "/us/COMMENT", element: <COMMENT /> } // ...
  ]);
  return routes;
};

export default AppRoutes;
