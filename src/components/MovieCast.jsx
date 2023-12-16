const MovieCast = () => {
  return (
    <div className="mb-6">
      <div className="flex py-6 flex-nowrap gap-4 overflow-x-scroll scrlbar">
        <div className="bg-[red] w-[150px] h-[220px]">
          <img
            className="w-[100%] h-[180px] object-cover"
            src="https://image.tmdb.org/t/p/original//vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
