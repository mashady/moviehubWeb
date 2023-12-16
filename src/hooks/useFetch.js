import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // https://api.themoviedb.org/3/movie/901362?language=en-US   /// deatils for movie id
  // https://api.themoviedb.org/3/search/movie?query=tt&include_adult=false&language=en-US&page=1  // search  20% spacing
  // 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' /// now playing with pg n

  const options = {
    method: "GET",
    url: endpoint,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmI0OTlhOTlmYTU5MDBiNjFkMTgxOTE3ZDBkNDdhNyIsInN1YiI6IjY1NjM2MmYwN2RmZGE2NTkzMjY1YTNkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h8ApO6AOrN20N_-68defSJ4dd6kJV9OjEeJwN9Cv8qA",
    },
  };

  const dataMinning = async () => {
    setLoading(true);

    try {
      const res = await axios.request(options);
      setData(res.data);
      setResults(res.data.results);
      console.log(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(function () {
        setLoading(false);
      }, 1700);
    }
  };

  useEffect(() => {
    dataMinning();
  }, []);

  //const reMinning = () => {};

  return { data, loading, error, results };
};

export default useFetch;
