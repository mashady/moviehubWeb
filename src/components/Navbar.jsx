import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className=" flex  z-100 items-center contr py-8 justify-around  top-0 w-[100%] z-20 mt-2">
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="flex items-center -mx-6">
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            <div className="flex items-center text-2xl font-bold text-white pb-[8px]">
              <Link to="/">movieshub</Link>
            </div>
          </div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
