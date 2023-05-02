import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext.jsx";
import TryLogin from "./../../components/login/TryLogin.jsx";
import BusinessList from "../../components/businesses/BusinessList.jsx";
const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  //   if (!isLoggedIn) {
  //     return <TryLogin />;
  //   }
  return (
    <div>
      <BusinessList />
    </div>
  );
};

export default Home;
