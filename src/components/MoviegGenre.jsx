const MoviegGenre = ({ data }) => {
  return (
    <div className="mb-6">
      <h3 className="mb-2 md:text-lg">Genres</h3>
      <ul className="flex flex-wrap text-xs font-light md:text-sm">
        {data.map((genre, index) => (
          <li
            key={index}
            className="mr-2 mb-2 flex items-center justify-center rounded-md border-none text-[#FFF] bg-[#5865f2] py-px px-2 text-center font-medium"
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviegGenre;
