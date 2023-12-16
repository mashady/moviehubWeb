import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import Collections from "../components/Collections";

const Search = () => {
  const { state } = useLocation();
  const { id, term } = state;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  if (loading) {
    setTimeout(() => setLoading(false), 3000);
    return <Loading />;
  }

  return (
    <div className="contr px-6">
      <Collections search={true} results={id.results} />

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
