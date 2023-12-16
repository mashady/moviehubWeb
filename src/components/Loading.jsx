import LoaderSvg from "../assets/loader.svg";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full mt-10">
      <img src={LoaderSvg} alt="loader" width={100} height={100} />
    </div>
  );
};

export default Loading;
