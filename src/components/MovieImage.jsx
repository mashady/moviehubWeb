const MovieImage = ({ data }) => {
  console.log(data);
  return (
    <div className="lg:w-2/5 justify-center flex md:pr-8 mb-6">
      <img
        src={`https://image.tmdb.org/t/p/original/${data}`}
        alt="alt"
        className="w-[350px] h-[530] rounded-md"
      />
    </div>
  );
};

export default MovieImage;
