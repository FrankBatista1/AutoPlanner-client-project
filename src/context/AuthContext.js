import { createContext, useEffect, useState } from "react";
import apiHelper from "../helpers/apiHelper";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState([])

  useEffect(() => {
    checkLogged();
  }, []);


const fetchUserData = async () => {
  const {uid} = await JSON.parse(localStorage.getItem('uid'))
  try {
    const { data } = await apiHelper.get(`/users/user/${uid}`);
    setUser(data)
  } catch (error) {
    localStorage.removeItem("jwtreservespot");
    localStorage.removeItem("uid");
    setLoggedIn(false);
  }
};

  const loginUser = async (user) => {
    try {
      const response = await apiHelper.post("/auth/login", user);
      const { data } = response;
      localStorage.setItem(
        "jwtreservespot",
        JSON.stringify({ token: data.token })
      );
      localStorage.setItem(
        "uid",
        JSON.stringify({ uid: data.uid })
      );
      setLoggedIn(true);
    } catch (error) {
      setError("Please check credentials");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };



  const checkLogged = () => {
    const tokenValue = localStorage.getItem('jwtreservespot');
    return tokenValue ? setLoggedIn(true) : setLoggedIn(false);
  };

  const logOutUser = () => {
    localStorage.removeItem("jwtreservespot");
    localStorage.removeItem("uid");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        error,
        user,
        fetchUserData,
        loginUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
