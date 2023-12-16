import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import SeeMore from "./pages/SeeMore";

function App() {
  //console.log(data);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/more/:id" element={<SeeMore />} />
      </Routes>
    </>
  );
}

export default App;
