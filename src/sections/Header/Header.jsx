import React from "react";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import CreateEventBtn from "../../components/CreateEventBtn/CreateEventBtn";
import LoginBtn from "../../components/LoginBtn/LoginBtn";
import SignUpBtn from "../../components/SignUpBtn/SignUpBtn";
import Main from "../Main/Main";
import Order from "../../components/Order/Order";
import { IoTicketSharp } from "react-icons/io5";
import { MdOutlineStarBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { getLoggedInUser } from "../../utils/AuthData";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Header({handleDisplay, handleLog}) {
  const navigate = useNavigate();

  


  const handlechange = (e) => {
    const seRoute = e.target.value;
    // if(seRoute !== "") {
    //   navigate(seRoute);
    // }
    if(seRoute === "1" ){
      navigate("/interest");
    }else if(seRoute === "2"){
      navigate("/profil");
    }else if(seRoute === "3"){
      localStorage.removeItem("loggedInUser");
      alert("Déconnecté !");
      navigate("/home")
      
    }
  };

  // initialistion de getLoggedInUser à userLogIn
  const userLogIn = getLoggedInUser();

  const style1 = [
    "label-button inline-flex justify-center items-center gap-2.5 px-5 py-2.5"
  ];

  const style2 = [
    "label text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-2xl font-medium leading-[normal]"
  ]

  // etat pour contôler les menu user
  const [userMenu, setUserMenu] = useState(false);
  // sa conditon, changement d'état
  useEffect(() =>{
    if(userLogIn){
      setUserMenu(true);
    };
  }, []);


  return (
    <div>
      <div className="flex w-full h-[75px] shrink-0 bg-[#2b293d]">
        <div className="flex justify-evenly w-[100%] items-center">
          <Logo />
          <div className="ml-8">
          <Navbar/> 
          </div>
        
          {/* affichage des btns via la codition */}
          {!userMenu ? 
            (
              <div className="text-[#fff] flex justify-center items-center">
              <CreateEventBtn style1={style1} style2={style2}/>
              <LoginBtn handleLog={handleLog}/>
              <SignUpBtn handleDisplay={handleDisplay}/>
              </div>
            ):
            (
              <div className="text-[#fff] flex justify-center items-center">
              <CreateEventBtn style1={style1} style2={style2}/>
                <button className="text-[#fff] flex flex-col justify-center items-center mr-4">
                <IoTicketSharp className="text-[22px]" /><span>Ticket</span>
                </button>
                <button onClick={() => {navigate("/interest")}} className="text-[#fff] flex flex-col justify-center items-center mr-4">
                <MdOutlineStarBorder className="text-[22px]" /><span>Intersted</span>
                </button>
                <button className="text-[#fff] flex justify-center items-center">
                <label htmlFor="profil" className="flex flex-col justify-center items-center">
                <CgProfile className="text-[22px]" /><span>Profil</span>
                </label>
                </button>
                <div className="text-[#FFF] bg-[#FFF] w-4">
                  <select name="" id="profil" onChange={handlechange} defaultValue="" className="w-4 bg-[#000]"> 
                    
                    <option value="1" className="bg-[#fff] text-[#000] w-32">Interests</option>
                    
                    <option value="2" className="bg-[#fff] text-[#000] w-32">Account seting </option>
                    <option value="3" className="bg-[#fff] text-[#000]  w-32">Logout</option>
                  </select>
                </div>
              </div>
            )
          }
        </div> 
      </div>
    </div>
  );
}

export default Header;
