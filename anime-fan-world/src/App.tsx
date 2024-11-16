import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navleft from "./components/Navleft";
import Header from "./components/Header";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Navleft />
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
