import { useEffect, useState } from "react";
import CardCover from "./CardCover";
import CardHeader from "./CardHeader";
import useFetch from "../hooks/useFetch";
import { useNavigate, useLocation } from "react-router-dom";

const TrendingNow = ({}) => {
  const navigate = useNavigate();
  let apiEndpoint =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const { results, data } = useFetch(`${apiEndpoint}&page=1`);
  const limittedResults = results.slice(0, 8); // slice the array to make a limit of items in future wwe will use condition
  const handleSeeMore = () => {
    console.log("See More");
    console.log("data", data);
    navigate(`/more/trending`, {
      state: { id: data, api: apiEndpoint, param: "trending" },
    });
  };

  // const kk = results.slice(0, 8); // slice the array to make a limit of items
  return (
    <div className="contr  p-6 mt-6">
      <CardHeader title="Trending now" handleSeeMore={handleSeeMore} />
      <div className="flex py-6 flex-nowrap gap-4 overflow-x-scroll scrlbar">
        {limittedResults.map((movie, i) => (
          <div
            className="movie-card  w-[450px] h-[250px] rounded-lg shadow-md flex-none"
            key={i}
          >
            <CardCover
              trending={true}
              title={movie.title}
              movieId={movie.id}
              movieBackDrop={movie.backdrop_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
