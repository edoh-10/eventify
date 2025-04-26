// import React from "react";
import "./hero.css";
// import { Search, MapPin } from "lucide-react";

// function Hero({handleChangeTexte, searchText }) {
//   return (
//     <div className="bgImg h-[578px] relative w-full">
//       <div className="inline-flex flex-col justify-end items-center gap-[40px]  pl-[230px] pr-[231px] pt-[180px] pb-[120px] w-full">
//         <div class="w-[1300px]">
//           <span>
//             <span className="text-[48px] font-[Montserrat] not-italic font-[700] text-[#FFF]">
//               {" "}
//               Don’t miss out!
//               <br />
//               Explore the{" "}
//             </span>
//             <span className="text-[48px] font-[Montserrat] not-italic font-[700] text-[#FFE047]">
//               {" "}
//               vibrant events{" "}
//             </span>
//             <span className="text-[48px] font-[Montserrat] not-italic font-[700] text-[#FFF]">
//               {" "}
//               happening locally and globally.{" "}
//             </span>
//           </span>
//         </div> 
//         <div>
//           <form action="" className="flex w-full">
//             <div className="">
//               <label htmlFor="search"  className="relative">
//                 <Search className="absolute ml-2 mt-[0.7rem]"/>
//               </label>
//               <input value={searchText} onChange={handleChangeTexte} type="text" id="searh" className=" border-solid border-r-[2px] border-black w-[50rem] h-[6vh] pl-12 rounded-l-[10px] " placeholder="Search events, category, location,..."/>
//             </div>
//             <div>
//               <label htmlFor="locate" className="relative">
//                 <MapPin className="absolute ml-1 mt-[0.7rem]"/>
//               </label>
//               <select name="" id="locate" className="w-[10rem] h-[6vh] pl-8 rounded-r-[10px] ">
//                 <option value="">Cotonou</option>
//                 <option value="">calavi</option>
//               </select>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;









import React from "react";

import { Search, MapPin } from "lucide-react";


function Hero({ handleChangeTexte, searchText }) {
  return (

    <div className="bgImg relative w-full min-h-[400px] md:h-[578px] bg-cover bg-center"> 

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>


      <div className="relative z-10 flex flex-col justify-center items-center gap-10 h-full px-4 py-16 sm:px-8 md:px-16 lg:px-20 xl:px-32">
        

        <div className="w-full max-w-4xl "> 

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat'] text-white">
            Don’t miss out!
            <br />
            Explore the{' '}
            <span className="text-[#FFE047]"> 
              vibrant events
            </span>{' '}
            happening locally and globally.
          </h1>
        </div>

        <div className="w-full max-w-3xl"> 

          <form action="" className="flex flex-col md:flex-row w-full items-center gap-2 md:gap-0">
            

            <div className="relative w-full md:flex-grow"> 
              <label htmlFor="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search size={20} /> 
              </label>
              <input 
                value={searchText} 
                onChange={handleChangeTexte} 
                type="text" 
                id="search" 
                className="w-full h-12 pl-10 pr-4 border-none rounded-md md:rounded-l-md md:rounded-r-none focus:ring-2 focus:ring-blue-500 outline-none text-gray-800" 
                placeholder="Search events, category, location,..."
              />
            </div>

            <div className="relative w-full md:w-auto"> 
              <label htmlFor="locate" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <MapPin size={20} /> 
              </label>

              <select 
                name="location" 
                id="locate" 
                className="w-full md:w-40 h-12 pl-10 pr-4 border-none rounded-md md:rounded-r-md md:rounded-l-none focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white text-gray-800"
              >

                <option value="" disabled selected>Location</option> 
                <option value="cotonou">Cotonou</option>
                <option value="calavi">Calavi</option>

              </select>

              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
