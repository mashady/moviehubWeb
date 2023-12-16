import useFetch from "../hooks/useFetch";
import Collections from "./Collections";
import { useNavigate, useLocation } from "react-router-dom";

const NowPlaying = () => {
  const navigate = useNavigate();
  let apiEndpoint =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US";
  const { results, data } = useFetch(`${apiEndpoint}&page=1`);
  const limittedResults = results.slice(0, 4); // slice the array to make a limit of items in future wwe will use condition
  const handleSeeMore = () => {
    console.log("See More");
    console.log("data", data);
    navigate(`/more/now-playing`, {
      state: { id: data, api: apiEndpoint, param: "now-playing" },
    });
  };

  return (
    <>
      <Collections
        title="Now Playing"
        results={limittedResults}
        handleSeeMore={handleSeeMore}
      />
    </>
  );
};

export default NowPlaying;
