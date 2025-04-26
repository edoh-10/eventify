

import React from 'react'
// import EventsCard from '../eventsCard/EventsCard'
import { EventCard } from '../eventsCard/EventsCard';
import OnlineData from '../../utils/bestOnlineEventsData'

function BestOnlineEvents({handleDisplay}) {
    const styleEventsCard = [
        "flex flex-wrap w-full mx-auto justify-between",
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
  return (
    <div className='w-[83%] mx-auto mb-[15vh]'>
        <div className='mb-[50px]'>
            <h2 className='font-[Montserrat] font-[700] text-[20px] '>Discover Best of Online Events</h2>
        </div>
        <div>
            <EventCard Content={OnlineData} styleDiv={styleEventsCard} handleDisplay={handleDisplay}/>
        </div>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center py-18px w-[610px] h-[50px] border-solid border-2 border-black'>
                <button className='font-[Open Sans] font-[600] text-[20px]'>See More</button>
            </div>
        </div>
    </div>
  )
}

export default BestOnlineEvents