import React from "react";

function SearchResultsCard({Content}) {
  return (
    <div className="flex w-[100%]">
        <div className="flex flex-wrap gap-[25px]">
        {Content.map((list2) => (
        <div key={list2.id} className="flex"> 
          <div className="flex">
          <div className="relative">
            <span className="absolute top-2 right-2 bg-[#FFF] p-1 rounded-full"> {list2.imgStart} </span>
            <img src={list2.img} alt={list2.titre} className="w-[290px] h-[168px] rounded-xl" />
            <span className="absolute bottom-0 left-0 bg-[#FFE047] p-1 w-auto font-[Open Sans] font-[600] text-[18px] rounded-bl-xl rounded-tr-xl">{list2.category}</span>
          </div>
          <div className=" w-[16rem] ml-2 truncate h-full"> 
            <div className="h-full ">
              <h3 className="mt-2"> {list2.titre} </h3>
              <p className="mt-2">{list2.dateM} {list2.dateJ} | {list2.adress} </p>
              <span className="mt-2"> {list2.time} </span>
              <div className="">
                <span className="flex mt-2">
                  <span className="mr-2">{list2.priceIcon}</span> <span>{list2.price}</span>
                </span>
              </div>
            </div>
          </div>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
}

export default SearchResultsCard;
