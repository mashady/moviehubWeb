const MoviePlot = ({ data }) => {
  return (
    <div className="mb-6">
      <h3 className="mb-1 md:text-lg">Synopsis</h3>
      <p className="font-light text-[#949ba4]">{data.overview}</p>
    </div>
  );
};

export default MoviePlot;
