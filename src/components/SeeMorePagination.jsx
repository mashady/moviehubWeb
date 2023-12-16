import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SeeMorePagination = ({
  pageNumber,
  term,
  totalPages,
  setLoading,
  api,
}) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(pageNumber);
  console.log(page);

  // options
  /*
  page != pageNumber
    ? console.log("no match", page)
    : console.log(" match", page);
*/

  const chnagePageData = async (page) => {
    console.log("page data changed", page, term);
    console.log(`${api}&page=${page}`);
    const options = {
      method: "GET",
      url: `${api}&page=${page}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmI0OTlhOTlmYTU5MDBiNjFkMTgxOTE3ZDBkNDdhNyIsInN1YiI6IjY1NjM2MmYwN2RmZGE2NTkzMjY1YTNkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h8ApO6AOrN20N_-68defSJ4dd6kJV9OjEeJwN9Cv8qA",
      },
    };

    try {
      const res = await axios.request(options);
      console.log(res.data);
      navigate(`/more/${term}`, {
        state: { id: res.data, param: term, api: api },
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (page != pageNumber) {
    chnagePageData(page);
    setLoading(true);
  }

  const handlePrevButton = async () => {
    setPage(page - 1);
  };
  const handleNextButton = async () => {
    setPage(page + 1);
    console.log(page);

    //console.log(page);
  };
  return (
    <div className="flex items-center justify-center p-6">
      <div className="inline-flex justify-center">
        <button
          onClick={() => handlePrevButton()}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l disabled:bg-gray-400"
          disabled={pageNumber == 1 ? true : false}
        >
          Prev
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-1">
          {pageNumber}
        </button>
        <button
          onClick={() => handleNextButton()}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r disabled:bg-gray-400"
          disabled={pageNumber == totalPages ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SeeMorePagination;
