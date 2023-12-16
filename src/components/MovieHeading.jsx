const MovieHeading = ({ data }) => {
  return (
    <div className="mb-6">
      <h1 className="text-5xl uppercase mb-3">{data.original_title}</h1>
      <h2 className="text-[#949ba4]">{data.tagline}</h2>
    </div>
  );
};

export default MovieHeading;
