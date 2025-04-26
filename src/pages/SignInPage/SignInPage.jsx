import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import logo from "../../assert/logoImage/ticket.png";
import { IoMdClose } from "react-icons/io";
import { loginUser } from "../../utils/AuthData";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignInPage({ handleLog, goToSingUp }) {
  // initialisation de useNavigete à navigate
  const navigate = useNavigate("");

  // state pour le formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function pour l'envoi du formulaire
  const handleLogIn = (e) => {
    e.preventDefault();
    const success = loginUser(email, password);
    if (success) {
      alert("inscription réussi ");
      navigate("/user");
    } else {
      alert("identifiant incorect");
    }
  };

  return (
    <div>
      <div className="bg-[#2B293D] h-screen ">
        <div className="flex flex-wrap">
          <div className="hidden md:block flex flex-col flex-wrap w-[45%] h-sreen">
            <div className="flex ml-4 mt-4 itmes-center">
              <span>
                <img src={logo} alt="logo" />
              </span>
              <span className="text-[#FFE047] text-[42px] font-[400] ">
                Eventify
              </span>
            </div>
            <div className="lg:w-[85%] mx-auto flex flex-wrap items-center justify-center h-[60vh] mt-[4vh]">
              <h2 className="text-[#FFF] font-[Montserrat] text-[30px] font-[700] ml-12">
                Discover tailored events. Sign in for personalized
                recommendations today !
              </h2>
            </div>
          </div>
          <div className="bg-[#FFF] h-screen w-full p-4 md:p-0 md:w-[55%] lg:rounded-l-[70px] ">
            {/* button pour le changement d'état */}
            <button onClick={handleLog}>
              <IoMdClose className="text-[30px] font-[700] absolute right-8" />
            </button>
            {/* suit du code */}
            <div className="w-full md:w-[75%] mx-auto ">
              <div className="w-[80%] mx-auto md:w-full">
                <div className="mt-[6vh] mb-[4vh] md:my-[8vh]">
                  <h2 className="font-[Montserrat] font-[700] text-[24px] lg:text-[30px]   ">
                    Login
                  </h2>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between flex-wrap">
                    <div className=" flex flex-col w-full md:w-auto h-[10vh] ">
                      <button className="rounded-[16px] h-[55px] w-full md:w-[18vw] border-solid border-[1px] border-[#A3A3A3] flex items-center justify-center">
                        <div className="flex items-center">
                          <span className="mr-2">
                            {" "}
                            <FcGoogle className=" text-[20px] " />
                          </span>
                          <p className="text-[#2D2C3C] font-[Open Sans] text-[16px] font-[400] ">
                            Sign up with Google
                          </p>
                        </div>
                      </button>
                    </div>

                    <div className=" flex flex-col w-full md:w-auto flex-wrap h-[10vh] ">
                      <button className="rounded-[16px] h-[55px] w-full md:w-[18vw] border-solid border-[1px] border-[#A3A3A3] flex items-center justify-center">
                        <div className="flex items-center justify-center">
                          <span className="mr-2">
                            <BsFacebook className="text-[#039BE5] text-[20px] " />
                          </span>
                          <p className="text-[#2D2C3C] font-[Open Sans] text-[16px] font-[400] ">
                            Sign up with Facebook
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* block de séparation */}
                  <div className="flex items-center h-[8vh]">
                    <div className="w-[48%]">
                      <span>
                        <hr className=" border-[#A3A3A3] " />
                      </span>
                    </div>

                    <div>
                      <span className="text-[#A3A3A3] text-[18px] font-[400] font-[Open Sans] text-center  ml-2 mr-2 ">
                        OR
                      </span>
                    </div>

                    <div className="w-[48%]">
                      <span className="mt-[5vh] ">
                        <hr className=" border-[#A3A3A3] " />
                      </span>
                    </div>
                  </div>

                  <div>
                    {/* le formulaire de connexion */}
                    <form
                      action=""
                      onSubmit={handleLogIn}
                      className="flex flex-col flex-wrap w-full "
                    >
                      <div className="mb-4">
                        <label htmlFor="emailAddress">E-mail Address</label>
                        <div className="border-solid border-[1px] border-[#A3A3A3] rounded-md ">
                          <input
                            type="email"
                            placeholder="Enter your e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full h-[6vh] pl-8 rounded-md focus:outline-none bg-[#FFF] focus:bg-[#fff]"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password">Password</label>
                        <div className="border-solid border-[1px] border-[#A3A3A3] rounded-md ">
                          <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-[6vh] pl-8 rounded-md focus:outline-none bg-[#FFF] focus:bg-[#fff] "
                          />
                        </div>
                      </div>
                      <div className="border-solid border-[1px] border-[#A3A3A3] rounded-md ">
                        <input
                          type="submit"
                          value="Create Account"
                          className="w-full h-[6vh] pl-8 rounded-md focus:outline-none bg-[#2B293D] text-[Open Sans] font-[700] text-[20px] text-[#fff] "
                        />
                      </div>
                    </form>
                    <div className="mt-4 text-[#636363] font-[400] text-[16px] font-[Open Sans] ">
                      <p>
                        Don't have ab account ?{" "}
                        <button onClick={goToSingUp}>Sing up</button>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
