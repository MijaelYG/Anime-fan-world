import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navleft from "./components/Navleft";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navleft />
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
