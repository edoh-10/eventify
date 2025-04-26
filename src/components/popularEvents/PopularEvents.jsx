

import React from 'react'
// import EventsCard from '../eventsCard/EventsCard'
import { EventsCard } from '../eventsCard/EventsCard';
import ContentData from '../../utils/popularEventsContentData';
import { useState } from 'react';

function PopularEvents({handleDisplay}) {
    const styleEventsCard = [
        "flex flex-wrap gap-[10px] mx-auto justify-between",
        "w-[420px] h-[440px]",
        "flex flex-col relative",
        "absolute bg-[#FFF] p-1 rounded-full flex justify-center items-center top-2 right-2",
        "w-[420px] h-[230px]",
        "absolute bg-[#FFE047] p-1 bottom-0 rounded-r-[6px]",
        "flex pt-2 ",
        "flex flex-col px-4 text-center font-[Montserrat] font-[26px] font-[700]",
        "text-[#4539B4]",
        "flex flex-col font-[Open Sans]",
        "font-[24px] font-[600]",
        "mt-1 font-[18px] font-[400] ",
        "mt-1 font-[18px] font-[400]",
        "flex items-center mt-1",
        "flex",
        "mr-2 transform -rotate-45",
        "flex items-center",
        "mr-1",
      ];

      const btnTitre = [
        {
            id: "All",
            titre: "All",
            className: "mr-4 border-solid border-[1px] border-black  w-12 rounded-full"
        },
        {
            id: "Today",
            titre: "Today",
            className: "mr-4 border-solid border-[1px] border-black  w-20 rounded-full"
        },
        {
            id: "Tomorrow",
            titre: "Tomorrow",
            className: "mr-4 border-solid border-[1px] border-black  w-24 rounded-full"
        },
        {
            id: "Weekend",
            titre: "This Weekend",
            className: "mr-4 border-solid border-[1px] border-black  w-32 rounded-full"
        },
        {
            id: "Free",
            titre: "Free",
            className: "mr-4 border-solid border-[1px] border-black  w-12 rounded-full"
        }
      ];


    const [bgColor, setBgColor] = useState("All");

    const activColor = '#FFE047';
    const noColor = '#fff';


    const  btnFuncAndFilter = (index) => {
        // const newBg = bgColor.backgroundColor === `#fff` ? `#FFE047` : `#fff`;
        setBgColor(index);
        console.log("ok");
    };



  return (
    <div className='w-[83%] mx-auto mb-40 mt-24'>
        <div className='mb-10'>
            <div>
                <h2 className='font-[Montserrat] text-[20px] font-[700] mb-6'>Popular Events in Mumbai</h2>
            </div>
            <div className='flex items-center justify-start'>
                {btnTitre.map((btn, index) => (
                    <button style={{backgroundColor: btn.id === bgColor ? activColor : noColor}} onClick={() => btnFuncAndFilter(btn.id)}  key={btn.id} className={btn.className} >{btn.titre}</button>
                ))}
            </div>
        </div>
        <div>
            <EventsCard Content={ContentData} styleDiv={styleEventsCard} handleDisplay={handleDisplay} bgColor={bgColor}/> 
        </div>
        <div className='flex justify-center'>
            <div className='border-solid border-2 border-black flex justify-center w-[610px] h-[50px] items-center py-[18px] '>
            <button className='font-[Open Sans] text-[22px] font-[600]' >See More</button>
            </div>
        </div>
    </div>
  )
}

export default PopularEvents;