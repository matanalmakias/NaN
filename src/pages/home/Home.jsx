import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext.jsx";
import TryLogin from "./../../components/login/TryLogin.jsx";
import BusinessList from "../../components/businesses/BusinessList.jsx";
import CategoryList from "../../components/businesses/CategoryList.jsx";
import StartProcess from "../../components/process/StartProcess.jsx";
const Home = () => {
  const [showProcess, setShowProcess] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  //   if (!isLoggedIn) {
  //     return <TryLogin />;
  //   }
  return (
    <div>
      <button
        onClick={() => setShowProcess((s) => !s)}
        className="rounded m-3 p-3 h5 btn-primary bg-light"
      >
        קבל הצעת מחיר מבעלי מקצוע בזמן קצר!
      </button>
      {showProcess && <StartProcess />}
      <CategoryList />
      <BusinessList />
    </div>
  );
};

export default Home;
