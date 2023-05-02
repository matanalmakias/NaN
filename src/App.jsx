import "./App.css";
import AuthContext from "./../../mirimaadanim/frontend/src/context/AuthContext";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div dir="rtl" className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
