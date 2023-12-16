import useFetch from "../hooks/useFetch";
import Collections from "./Collections";
import { useNavigate, useLocation } from "react-router-dom";

const Upcomming = () => {
  const navigate = useNavigate();
  let apiEndpoint =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US";
  const { results, data } = useFetch(`${apiEndpoint}&page=1`);
  const limittedResults = results.slice(0, 4); // slice the array to make a limit of items in future wwe will use condition
  const handleSeeMore = () => {
    console.log("See More");
    console.log("data", data);
    navigate(`/more/popular`, {
      state: { id: data, api: apiEndpoint, param: "popular" },
    });
  };

  return (
    <>
      <Collections
        title="Upcoming"
        results={limittedResults}
        handleSeeMore={handleSeeMore}
      />
    </>
  );
};

export default Upcomming;
