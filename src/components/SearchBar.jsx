import { useState } from "react";
import IconSearch from "./IconSearch";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const [searchText, setSearchText] = useState();
  const navigate = useNavigate();

  const handleChange = (i) => {
    setSearchText(i);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmI0OTlhOTlmYTU5MDBiNjFkMTgxOTE3ZDBkNDdhNyIsInN1YiI6IjY1NjM2MmYwN2RmZGE2NTkzMjY1YTNkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h8ApO6AOrN20N_-68defSJ4dd6kJV9OjEeJwN9Cv8qA",
      },
    };

    try {
      const res = await axios.request(options);
      navigate(`/search`, { state: { id: res.data, term: searchText } });
    } catch (error) {
      console.log(error);
    }
    console.log(searchText);
    setSearchText("");
  };
  return (
    <form className="flex grow " onSubmit={handleSubmit}>
      <IconSearch className="h-8 w-8 md:h-8 md:w-8 " />
      <input
        type="text"
        className="w-full border-b ml-5 mr-6 pb-[8px] text-lg  bg-inherit outline-none focus:border-[#949ba4] border-transparent"
        placeholder="Search for a movies or TV shows"
        onChange={(e) => handleChange(e.target.value)}
        value={searchText}
      />
      <button
        type="submit"
        className="text-capitalize mb-[8px] mr-6 flex items-center justify-center rounded-md bg-[#5865f2] py-2 px-3 text-md text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
