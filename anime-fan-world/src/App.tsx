import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navleft from "./components/Navleft";
import Header from "./components/Header";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  const Location = useLocation();

  const ubicacionpath = Location.pathname !== "/Login" && Location.pathname !== "/Register";

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
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
