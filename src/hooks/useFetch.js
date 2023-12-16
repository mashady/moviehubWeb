import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return { data, loading, error, results };
};

export default useFetch;
