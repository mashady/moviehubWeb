import { useLocation, useNavigate } from "react-router-dom";

import MovieCast from "../components/MovieCast";
import MovieHeading from "../components/MovieHeading";
import MovieImage from "../components/MovieImage";
import MovieInfo from "../components/MovieInfo";
import MoviePlot from "../components/MoviePlot";
import MovieRate from "../components/MovieRate";
import MoviegGenre from "../components/MoviegGenre";

import useFetch from "../hooks/useFetch";

import { useEffect, useState } from "react";
import Loading from "../components/Loading";
const Details = () => {
  // here we will recieve the id of the movie
  const { state } = useLocation();
  const { id } = state;

  const { data } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div className="relative">
      <div className="contr px-6 ">
        <div className="flex flex-col md:flex-row">
          <MovieImage data={data.poster_path} />
          <div className="md:w-3/5 text-center md:text-left">
            <MovieHeading data={data} />
            <MovieRate data={renderRating(data.vote_average)} />
            <MovieInfo data={data} />
            <MoviegGenre data={data.genres} />
            <MoviePlot data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
export function renderRating(rating) {
  if (rating !== undefined) {
    return (rating / 2).toFixed(1);
  } else {
    return 0;
  }
}
