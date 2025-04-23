// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// event content data
import ContentData from "../../utils/popularEventsContentData";
import { Dot, DotIcon } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import EventsCard from "../eventsCard/EventsCard";


import React from "react";

function ContentCardsScrollArrows() {
  return (
    <div className="flex  w-full mx-auto justify-between">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
      >
        {ContentData.map((list2) => (
          <SwiperSlide key={list2.id}>
            <div key={list2.id} className="w-[420px] h-[440px]">
              <div className="flex flex-col relative">
                <span className="absolute bg-[#FFF] p-1 rounded-full flex justify-center items-center top-2 right-2">
                  {" "}
                  {list2.imgStart}{" "}
                </span>
                <img
                  src={list2.img}
                  alt={list2.titre}
                  className="w-[420px] h-[230px]"
                />
                <span className="absolute bg-[#FFE047] p-1 bottom-0 rounded-r-[6px]">
                  {list2.category}
                </span>
              </div>
              <div className="flex pt-2 ">
                <div className="flex flex-col px-4 text-center font-[Montserrat] font-[26px] font-[700]">
                  <span className="text-[#4539B4]"> {list2.dateM} </span>
                  <span> {list2.dateJ} </span>
                </div>
                <div className="flex flex-col font-[Open Sans]">
                  <h3 className="font-[24px] font-[600]"> {list2.titre} </h3>
                  <p className="mt-1 font-[18px] font-[400] ">
                    {" "}
                    {list2.adress}{" "}
                  </p>
                  <span className="mt-1 font-[18px] font-[400]">
                    {" "}
                    {list2.time}{" "}
                  </span>
                  <div className="flex items-center mt-1">
                    <span className="flex">
                      {" "}
                      <span className="mr-2 transform -rotate-45">
                        {list2.priceIcon}
                      </span>{" "}
                      <span>{list2.price}</span>
                    </span>{" "}
                    <DotIcon />{" "}
                    <span className="flex items-center">
                      {" "}
                      <span className="mr-1">{list2.interestedIcon}</span>{" "}
                      <span>{list2.interested}</span>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ContentCardsScrollArrows;
