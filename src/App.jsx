import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import SeeMore from "./pages/SeeMore";

import Navbar from "./components/Navbar";

function App() {
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
