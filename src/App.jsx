import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarleft from "./components/Navbarleft";
import Home from "./pages/Home";
import Header from "./components/header";

function App() {
  return (
    <>
      <Navbarleft />
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
    </>
  );
}

export default App;
