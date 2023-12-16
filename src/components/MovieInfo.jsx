import React from "react";

const MovieInfo = ({ data }) => {
  return (
    <div className="mb-6 flex items-center justify-between text-left text-sm lg:w-10/12 lg:text-lg">
      <div>
        <p className="mb-1 text-[#949ba4]">Length</p>
        <p>{data.runtime} min.</p>
      </div>
      <div>
        <p className="mb-1 text-[#949ba4]">Language</p>
        <p>{renderLanguage(data.spoken_languages)}</p>
      </div>
      <div>
        <p className="mb-1 text-[#949ba4]">Release Date</p>
        <p>{data.release_date}</p>
      </div>
      <div>
        <p className="mb-1 text-[#949ba4]">Status</p>
        <p>{data.status}</p>
      </div>
    </div>
  );
};

export default MovieInfo;

export function renderLanguage(languages) {
  if (languages.length !== 0) {
    return languages[0].name;
  } else {
    return "N/A";
  }
}
