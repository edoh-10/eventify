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
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

function Header({ handleDisplay, handleLog }) {
  const navigate = useNavigate();

  const handlechange = (e) => {
    e.preventDefault();
      localStorage.removeItem("loggedInUser");
      // alert("Déconnecté !");
      navigate("/");
    
  };

  // etat pour contrôler la responsivité mobile & desktop
  const [isMobil, setIsMobil] = useState(true);
  const [menu, closeMenu] = useState(true);
  const [mProfi, cProfi] = useState(true);

  const mobilMenu = (e) => {
    e.preventDefault();
    closeMenu(!menu);
    setIsMobil(!isMobil);
  };

  const menuProfil = (e) => {
    e.preventDefault();
    cProfi(!mProfi);
  };

  // initialistion de getLoggedInUser à userLogIn
  const userLogIn = getLoggedInUser();

  const style1 = ["label-button inline-flex justify-center items-center  "];

  const style2 = [
    "label text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-[20px] font-medium leading-[normal]",
  ];

  // etat pour contôler les menu user
  const [userMenu, setUserMenu] = useState(false);
  // sa conditon, changement d'état
  useEffect(() => {
    if (userLogIn) {
      setUserMenu(true);
    }
  }, []);

  const goToEditPage = (e) => {
    e.preventDefault();
    navigate("/create-event")
  }

  return (
    <div>
      <div className="flex w-full h-[75px] shrink-0 bg-[#2b293d]">
        <div className="flex justify-between lg:justify-around w-[100%] items-center">
          <Logo />


          <div className="flex items-center justify-end">
              <div className="mr-6 hidden lg:block">
                <Navbar />
              </div>
              <div className="hidden lg:block">
                {/* affichage des btns via la codition */}
                {!userMenu ? (
                  <div className="text-[#fff] flex justify-center items-center">
                    <CreateEventBtn style1={style1} style2={style2} />
                    <LoginBtn handleLog={handleLog} />
                    <SignUpBtn handleDisplay={handleDisplay} />
                  </div>
                ) : (
                  <div className="text-[#fff] flex justify-center items-center relative">
                    <CreateEventBtn style1={style1} style2={style2} />
                    <button className="text-[#fff] flex flex-col justify-center items-center ml-6 mr-4">
                      <IoTicketSharp className="text-[22px]" />
                      <span>Ticket</span>
                    </button>
                    <button
                      onClick={() => {
                        navigate("/interest");
                      }}
                      className="text-[#fff] flex flex-col justify-center items-center mr-4"
                    >
                      <MdOutlineStarBorder className="text-[22px]" />
                      <span>Intersted</span>
                    </button>
                    <button
                      onClick={menuProfil}
                      className="text-[#fff] flex justify-center items-center"
                    >
                      <div className=" flex itmes-center justify-center">
                        <span className="flex flex-col justify-center items-center">
                          <CgProfile className="text-[22px]" />
                          <span>Profil </span>
                        </span>
                        <span>
                          {mProfi ? (
                            <MdOutlineArrowDropDown size={40} />
                          ) : (
                            <IoMdArrowDropup size={40} />
                          )}
                        </span>
                      </div>
                    </button>
                    {!mProfi && (
                      <div className="z-[100] absolute top-[120%] left-[60%] border-solid border-[1px] border-black rounded-xl  w-[10vw]  flex flex-col bg-[#fff] ">
                        <div>
                          <button onClick={() => navigate("/favorite")} className="text-start p-2 pl-2 hover:bg-[#2D2C3C14] w-full h-full text-black hover:bg-black-200">
                            Interests
                          </button>
                        </div>
                        <div>
                          <button onClick={() => navigate("/profil")} className="text-start p-2 pl-2 hover:bg-[#2D2C3C14] w-full h-full text-black">
                            Account seting
                          </button>
                        </div>
                        <div>
                          <button onClick={handlechange} className="text-start p-2 pl-2 hover:bg-[#2D2C3C14] w-full h-full text-black">
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

          {!isMobil && (
            // mobil
            <div className="z-[101] lg:hidden absolute bg-[#2b293ddb] w-full h-auto pb-4 top-[10vh] flex flex-col">
              <div className=" lg:hidden mt-3">
                <Navbar />
              </div>
              <hr className="my-4" />
              <div className=" block">
                {/* affichage des btns via la codition */}
                {!userMenu ? (
                  <div className="text-[#fff] flex justify-center items-center">
                    <CreateEventBtn style1={style1} style2={style2} />
                    <LoginBtn handleLog={handleLog} />
                    <SignUpBtn handleDisplay={handleDisplay} />
                  </div>
                ) : (
                  <div className="text-[#fff] flex justify-between items-center">
                    <CreateEventBtn style1={style1} style2={style2} />
                    <div className="flex justify-between items-center">
                      <button className="text-[#fff] flex flex-col justify-center items-center mr-4">
                        <IoTicketSharp className="text-[22px]" />
                        <span>Ticket</span>
                      </button>
                      <button
                        onClick={() => {
                          navigate("/interest");
                        }}
                        className="text-[#fff] flex flex-col justify-center items-center mr-4"
                      >
                        <MdOutlineStarBorder className="text-[22px]" />
                        <span>Intersted</span>
                      </button>
                      <button
                        onClick={menuProfil}
                        className="text-[#fff] flex justify-center items-center"
                      >
                        <div className=" flex itmes-center justify-center">
                          <span className="flex flex-col justify-center items-center">
                            <CgProfile className="text-[22px]" />
                            <span>Profil </span>
                          </span>
                          <span>
                            {mProfi ? (
                              <MdOutlineArrowDropDown size={40} />
                            ) : (
                              <IoMdArrowDropup size={40} />
                            )}
                          </span>
                        </div>
                      </button>
                      {!mProfi && (
                        <div className="z-[100] absolute top-[100%] left-[68%] border-solid border-[1px] border-black rounded-xl  w-[30vw]  flex flex-col bg-[#fff] ">
                          <div>
                            <button onClick={() => navigate("/favorite")} className="text-start p-2 pl-2 hover:bg-[#2D2C3C14] w-full h-full text-black hover:bg-black-200">
                              Interests
                            </button>
                          </div>
                          <div>
                            <button onClick={() => navigate("/profil")} className="text-start p-2 pl-2 hover:bg-[#2D2C3C14] w-full h-full text-black">
                              Account seting
                            </button>
                          </div>
                          <div>
                            <button onClick={handlechange} className="text-start p-2 pl-2 hover:bg-[#2D2C3C14] w-full h-full text-black">
                              Logout
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {menu ? (
            <button onClick={mobilMenu} className="lg:hidden">
              <LuMenu size={30} className="text-[#fff]" />
            </button>
          ) : (
            <button onClick={mobilMenu} className="lg:hidden">
              <MdOutlineClose size={30} className="text-[#fff]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
