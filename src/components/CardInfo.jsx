const CardInfo = ({ title, type, year }) => {
  return (
    <div className="mt-2 mb-1 flex text-[11px] font-light text-app-grey md:text-[13px] flex-col">
      <div className="mt-1 flex text-[11px] font-light text-app-grey md:text-[13px]">
        <p className="">{year}</p>
        {/**
         * <div className='flex items-center px-[6px] before:content-["•"]'>
          <p className="pl-1 pr-1 capitalize ">{type}</p>
        </div>
         * 
         */}
      </div>
      <h2 className="text-ellips cursor-pointer w-[150px] truncate text-lg font-bold capitalize text-app-pure-white sm:w-[180px] md:w-[200px] lg:w-[268px]">
        {title}
      </h2>
    </div>
  );
};

export default CardInfo;
