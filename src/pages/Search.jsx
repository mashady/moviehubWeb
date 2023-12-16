import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//import Collections from "../components/Collections";
import Loading from "../components/Loading";

import Pagination from "../components/Pagination";
import Collections from "../components/Collections";
const Search = () => {
  //const [page, setPage] = useState(2);
  const { state } = useLocation();
  const { id, term } = state;

  console.log(id);
  console.log(term);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  if (loading) {
    setTimeout(() => setLoading(false), 3000);
    return <Loading />;
  }
  /*
  if (loadingFromPagination) {
    setLoading(true);
  }*/
  return (
    <div className="contr px-6">
      <Collections search={true} results={id.results} />
      {/**
      <h1 className="text-3xl ">Found 0 results for 'term'</h1>

       * 
       * Search Page ****>
       * **just cotain a collection of item redered from date get from tmdb
       * **pagination to control the amout of data come from the server
       */}
      {id.total_pages === 1 ? null : (
        <Pagination
          pageNumber={id.page}
          term={term}
          totalPages={id.total_pages}
          setLoading={setLoading}
        />
      )}
    </div>
  );
};

export default Search;
