import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext.jsx";
import TryLogin from "./../../components/login/TryLogin.jsx";

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  //   if (!isLoggedIn) {
  //     return <TryLogin />;
  //   }
  return <div>Home</div>;
};

export default Home;
