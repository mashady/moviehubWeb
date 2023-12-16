import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgNotFound from "../assets/no-iamge.svg";
const CardCover = ({
  title,
  movieId,
  moviePoster,
  trending,
  movieBackDrop,
}) => {
  // frpm here we will send the id of the movie
  const navigate = useNavigate();
  const [imgLoad, setImgLoad] = useState(true);
  const handleImageLoad = () => {
    //https://image.tmdb.org/t/p/original//2pYgOBtBaFxAELQGj6p86vuIhhG.jpg
  };
  const hey = () => {
    let q = title
      .toLowerCase()
      .normalize("NFKD") // split accented characters into their base characters and diacritical marks
      .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
      .trim() // trim leading or trailing whitespace
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
      .replace(/\s+/g, "-") // replace spaces with hyphens
      .replace(/-+/g, "-");
    navigate(`/movie/${q}`, { state: { id: movieId } });
  };

  return (
    <div
      onClick={hey}
      className={
        trending
          ? "  relative h-[100%] md:h-[100%] lg:h-[100%] rounded-lg"
          : " relative h-[133px] md:h-[140px] lg:h-[174px] rounded-lg flex justify-center"
      }
    >
      <img
        src={
          movieBackDrop
            ? `https://image.tmdb.org/t/p/original/${movieBackDrop}`
            : moviePoster === null
            ? imgNotFound
            : `https://image.tmdb.org/t/p/original/${moviePoster}`
        }
        onLoad={() => setImgLoad(true)}
        className={
          moviePoster === null
            ? "rounded-lg cursor-pointer min-h-[80%] max-h-[80%] min-w-[80%] max-w-[80%]"
            : "rounded-lg cursor-pointer min-h-[100%] max-h-[100%] min-w-[100%] max-w-[100%] object-cover"
        }
      />
    </div>
  );
};

export default CardCover;
