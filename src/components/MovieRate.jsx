import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const MovieRate = ({ data }) => {
  console.log(data);
  return (
    <div className="mb-6 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
      <p className="mb-2 text-4xl font-medium md:mr-4 md:mb-0">{data}</p>
      <Rating
        className="align-center flex self-center"
        initialRating={data}
        emptySymbol={<FaRegStar />}
        fullSymbol={<FaStar />}
        readonly
      />
    </div>
  );
};

export default MovieRate;
export function renderRating(rating) {
  if (rating !== undefined) {
    return (rating / 2).toFixed(1);
  } else {
    return 0;
  }
}
