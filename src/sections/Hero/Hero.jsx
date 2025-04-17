import React from "react";
import "./hero.css";
import { Search, MapPin } from "lucide-react";

function Hero({handleChangeTexte, searchText }) {
  return (
    <div className="bgImg h-[578px] relative w-full">
      <div className="inline-flex flex-col justify-end items-center gap-[40px]  pl-[230px] pr-[231px] pt-[180px] pb-[120px] w-full">
        <div class="w-[1300px]">
          <span>
            <span className="text-[48px] font-[Montserrat] not-italic font-[700] text-[#FFF]">
              {" "}
              Don’t miss out!
              <br />
              Explore the{" "}
            </span>
            <span className="text-[48px] font-[Montserrat] not-italic font-[700] text-[#FFE047]">
              {" "}
              vibrant events{" "}
            </span>
            <span className="text-[48px] font-[Montserrat] not-italic font-[700] text-[#FFF]">
              {" "}
              happening locally and globally.{" "}
            </span>
          </span>
        </div> 
        <div>
          <form action="" className="flex w-full">
            <div className="">
              <label htmlFor="search"  className="relative">
                <Search className="absolute ml-2 mt-[0.7rem]"/>
              </label>
              <input value={searchText} onChange={handleChangeTexte} type="text" id="searh" className=" border-solid border-r-[2px] border-black w-[50rem] h-[6vh] pl-12 rounded-l-[10px] " placeholder="Search events, category, location,..."/>
            </div>
            <div>
              <label htmlFor="locate" className="relative">
                <MapPin className="absolute ml-1 mt-[0.7rem]"/>
              </label>
              <select name="" id="locate" className="w-[10rem] h-[6vh] pl-8 rounded-r-[10px] ">
                <option value="">Cotonou</option>
                <option value="">calavi</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
