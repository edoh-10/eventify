import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mt-3 ml-12">
      <ul class="tabs inline-flex h-[60px] items-start gap-[26px] shrink-0">
        <li class="tabs2 flex justify-center items-start gap-2.5 p-2.5">
          <Link to="/user" class="text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-2xl font-semibold leading-[normal]">
            Home
          </Link>
        </li>
        <li class="tabs3 flex justify-center items-start gap-2.5 px-[10.5px] py-2.5">
          <Link to="/event" class="label2 text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-2xl font-medium leading-[normal]">
            Events
          </Link>
        </li>
        <li class="tabs3 flex justify-center items-start gap-2.5 px-[10.5px] py-2.5">
          <Link class="label2 text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-2xl font-medium leading-[normal]">
            About
          </Link>
        </li>
        <li class="tabs3 flex justify-center items-start gap-2.5 px-[10.5px] py-2.5">
          <Link class="label2 text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-2xl font-medium leading-[normal]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
