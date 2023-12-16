import CardCover from "./CardCover";
import CardInfo from "./CardInfo";
import CardHeader from "./CardHeader";

const Collections = ({ title, results, search, handleSeeMore }) => {
  return (
    <div className={search ? "contr " : "contr  p-6 mt-6"}>
      {!search ? (
        <CardHeader title={title} handleSeeMore={handleSeeMore} />
      ) : null}
      {/**mske card body component  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-3 py-6 gap-6">
        {results.map((movie, id) => (
          <div key={id} className="relative">
            <CardCover
              trending={false}
              title={movie.title}
              movieId={movie.id}
              moviePoster={movie?.poster_path}
              movieBackDrop={movie?.backdrop_path}
            />
            <CardInfo
              title={movie.title}
              type={movie.media_type}
              year={renderYear(movie.release_date)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;

function renderYear(year) {
  if (!year) {
    return "N/A";
  } else {
    return year.substring(0, 4);
  }
}
