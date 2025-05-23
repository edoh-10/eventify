

import "./specialyForYou.css"
import React from 'react'
import { GoArrowRight } from "react-icons/go";

function SpecialyForYou({goToInterest}) {
  return (
    <div className="ForYoubgImg w-[83%] mx-auto h-[340px] mb-[16vh]">
        <div className="flex flex-col items-center">
            <h2 className="font-[Montserrat] font-[700] text-[40px] mt-[90px]">
                Events specially created for you!
            </h2>
            <p>Get event suggestions tailored to your interests! Don't let your favorite events slip away.</p>
            <button className="border-solid border-2 border-[#2B293D] bg-[#2B293D] mt-4 rounded-md" onClick={goToInterest}>
                <button className="py-[12px] mx-[38px] flex items-center text-[32px] font-[Open Sans] text-[#FFE047]">Get Started <GoArrowRight className="ml-2 text-[#FFE047]"/></button>
            </button>
        </div>
    </div>
  )
}

export default SpecialyForYou