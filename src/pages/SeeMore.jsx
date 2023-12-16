import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Loading from "../components/Loading";
import Collections from "../components/Collections";
import SeeMorePagination from "../components/SeeMorePagination";

const SeeMore = () => {
  const { state } = useLocation();
  const { id, api, param } = state;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    setTimeout(() => setLoading(false), 2000);
    return <Loading />;
  }
  return (
    <>
      <div className="contr px-6">
        <Collections search={true} results={id.results} />
        {id.total_pages === 1 ? null : (
          <SeeMorePagination
            pageNumber={id.page}
            term={param}
            totalPages={id.total_pages}
            setLoading={setLoading}
            api={api}
          />
        )}
      </div>
    </>
  );
};

export default SeeMore;
