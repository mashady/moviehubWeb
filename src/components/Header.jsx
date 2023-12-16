const Header = () => {
  return (
    <section className="header">
      <div className="overlay"></div>
      <div className="headerMovie contr z-10 h-[100%] relative flex items-end p-10">
        <div>
          <h1 className="font-bold text-white text-4xl uppercase mb-2">
            batman
          </h1>
          <button className="btn px-6 py-3 mb-2 bg-[#5865f2] text-white rounded-md capitalize">
            watch now
          </button>
          <p className="text-white text-lg w-[400px]">
            The story of J. Robert Oppenheimer's role in the development of the
            atomic bomb during World War II.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
