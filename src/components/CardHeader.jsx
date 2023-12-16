const CardHeader = ({ title, handleSeeMore }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-semibold text-white text-3xl">{title}</h1>
      <span
        onClick={handleSeeMore}
        className=" uppercase text-[12px] font-semibold text-[#00a8fc] cursor-pointer hover:underline"
      >
        see more
      </span>
    </div>
  );
};

export default CardHeader;
