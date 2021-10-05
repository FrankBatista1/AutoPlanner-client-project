import { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginPage from "./LoginPage";

const UserRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn)

  return (
    <Route {...rest} render={(props) => loggedIn ? (
          <Component  {...props}/>
        ) : (
          <Route pathname="/login" component={LoginPage}/>
    )}/>
  );
};

export default UserRoute;
