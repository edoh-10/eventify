
import "./createEvent.css"
import React from 'react'
import { CalendarPlus2 } from 'lucide-react';
import CreateEventBtn from "../CreateEventBtn/CreateEventBtn";

function CreateEventCTA({goToEditPage}) {
  const eventAddIcon = <CalendarPlus2 />;

  const style1 = [
    "bg-[#FFE047] flex justify-center items-center w-full md:w-[14vw] rounded-md"
  ]

  const style2 = [
    "flex items-center py-[16px] px-[32px] text-[20px] font-[Open Sans] font-[600] "
  ];
  return (
    <div className='createEventBg h-auto pb-10'>
      <div className="w-[83%] mx-auto flex flex-wrap items-center justify-center">
        <div className="mt-12 md:w-auto mr-[20vw]">
          <h2 className="text-[#FFE047] text-[28px] font-[500] font-[Montserrat] ">Create an event with Eventify</h2>
          <p className="font-[Open Sans] font-[400] text-[#FFE047] text-[16px] md:w-[60%]">Got a show, event, activity or a great experience ? Partner with us & get listed on Eventify</p>
        </div>
          <div className=" flex justify-center w-full md:w-auto  mt-12 ">
          <CreateEventBtn Icon={eventAddIcon} style1={style1} style2={style2} goToEditPage={goToEditPage}/>
          </div>
      </div> 
    </div>
  )
}

// -mr-[10vw] ml-[4vw]

export default CreateEventCTA