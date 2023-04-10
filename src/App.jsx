import { useContext } from "react";
import "./App.css";
import AuthContext from "./../../mirimaadanim/frontend/src/context/AuthContext";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
