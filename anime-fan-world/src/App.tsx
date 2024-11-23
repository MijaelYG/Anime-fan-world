import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navleft from "./components/Navleft";
import Header from "./components/Header";
import Search from "./pages/Search";
import Login from "./pages/Login";

function App() {
  const Location = useLocation();

  const ubicacionpath = Location.pathname != "/Login";

  return (
    <>
      {ubicacionpath && (
        <>
          <Navleft />
          <Header />
        </>
      )}
      <div className={ubicacionpath ? "app":"applogin"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
