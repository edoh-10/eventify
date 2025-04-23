

import React from 'react'

function NewsLetters() {
  return (
    <div className='bg-[#FFE047] h-[230px] mt-[8vh] w-full'>
      <div className='w-[83%] mx-auto flex itmes-center justify-between'>
        <div className='w-[55%] mt-[8vh]'>
          <h2 className='font-[Montserrat] font-[500] text-[36px] '>Subscribe to our Newsletter</h2>
          <p className='font-[Open Sans] font-[400] text-[24px] '>Receive our weekly newsletter & updates whith new events from your favourite organizers & venues.</p>
        </div> 
        <div className='w-[43%] mt-[14vh]'>
          <form action="" className='flex'>
            <div className='w-[24vw] h-[6vh] border-solid border-[1px] border-[#2B293D] rounded-l-[6px] '>
              <input type="text" placeholder='Enter your e-mail address' className='w-full h-full pl-4 rounded-l-[6px]' />
            </div>
            <div className='text-[#FFE047] bg-[#2B293D] flex items-center w-[8vw] justify-center '>
              <input type="submit" value="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsLetters