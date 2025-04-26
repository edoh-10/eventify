import React from 'react'
import Header from '../../sections/Header/Header'
import Footer from '../../sections/Footer/Footer'
import InterestedData from '../../utils/interestedEventData'
import { EventCard } from '../../components/eventsCard/EventsCard'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

function InterestedEventsPage() {
  const navigate = useNavigate();
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
    <div>
      <Header/>
      <div className='w-[88%] mx-auto my-10'>
        <div className='mb-4'>
        <button onClick={() => navigate(-1)} className='absolute left-4 top-[12%]'><IoArrowBackOutline size={25} /></button>
        <h2 className='text-[20px] font-[700]'>Interested Events</h2>
        </div>
        <div>
        <EventCard Content={InterestedData} styleDiv={styleEventsCard}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default InterestedEventsPage 