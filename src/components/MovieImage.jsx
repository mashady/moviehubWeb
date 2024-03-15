import { useState } from "react";

const MovieImage = ({ data, handleImageLoading }) => {
  const [imageLoading, setImageLoading] = useState(true);
  console.log(imageLoading);
  return (
    <div className="lg:w-2/5 justify-center flex md:pr-8 mb-6">
      <div className=" relative">
        <div
          className={
            !imageLoading
              ? ""
              : "absolute top-0 w-full h-full rounded-md skelton-image bg-gradient-to-r from-indigo-500"
          }
        ></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${data}`}
          alt="alt"
          className={
            !imageLoading
              ? "w-[350px] h-[530] rounded-md"
              : "w-[350px] h-[530] rounded-md opacity-0 "
          }
          onLoad={() => setImageLoading(false)}
        />
      </div>
    </div>
  );
};

export default MovieImage;
