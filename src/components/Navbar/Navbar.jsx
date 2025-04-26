import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" ">
      <ul class="tabs  inline-flex h-auto items-center gap-[26px] shrink-0">
        <li class="tabs2 flex justify-center items-start  ">
          <Link to="/user" class=" text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-[20px] font-semibold leading-[normal]">
            Home
          </Link>
        </li>
        <li class="tabs3 flex justify-center items-start  ">
          <Link to="/allEvents" class="label2 text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-[20px] font-medium leading-[normal]">
            Events
          </Link>
        </li>
        <li class="tabs3 flex justify-center items-start  ">
          <Link to="/about" class="label2 text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-[20px] font-medium leading-[normal]">
            About
          </Link>
        </li>
        <li class="tabs3 flex justify-center items-start  ">
          <Link to="/contact" class="label2 text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-[20px] font-medium leading-[normal]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
