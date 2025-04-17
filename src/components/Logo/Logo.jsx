

import React from 'react'
import logo from "../../assert/logoImage/ticket.png"

function Logo() {
  // const style = {
  //   // _lightgray_50%_/_cover_no-repeat]
  // }
  return (
    <div className="flex">
      <img src={logo} alt=""/>
      <div class="eventify text-[#ffe047] text-[48px]"> Eventify </div>
    </div>
  )
}

export default Logo