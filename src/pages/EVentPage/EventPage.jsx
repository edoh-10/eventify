import React from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import image from "../../assert/eventPage.png";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { FiShare2 } from "react-icons/fi";
import { LuCalendarDays } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import { LuMapPin } from "react-icons/lu";
import ContentCardsScrollArrows from "../../components/ContentCardsScrollArrows/ContentCardsScrollArrows";
import profilIcon from "../../assert/host profil.png"
import { IoTicketSharp } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import SelectTicket from "../../components/SelectTicket/SelectTicket";
import AttendeeDetail from "../../components/AttendeeDetail/AttendeeDetail";
import Order from "../../components/Order/Order";
import ShareIt from "../../components/shareIt/ShareIt";
 
function EventPage() {
  const navigate = useNavigate();

  const [selectTicket, setSelectTicket] = useState(false);
  const handleTicket = (e) => {
    e.preventDefault();
    setSelectTicket(!selectTicket);
  }

  const [details, setDetails] = useState(false);
  const handleDetails = (e) => {
    e.preventDefault();
    if(!details){
      setDetails(!details);
      setSelectTicket(!selectTicket);
    }
  }
  const handleDetail = (e) => {
    e.preventDefault();
    setDetails(!details);
  }

  const [order, setOrder] = useState(false);
  const handleOrder = (e) => {
    e.preventDefault();
    if(!order){
      setOrder(!order);
      setDetails(!details);
    }
  }

  const closeOrder = (e) => {
    e.preventDefault();
    setOrder(!order);
  }

  const procedeOrder = (e) => {
    e.preventDefault();
    setOrder(!order);
  }


  const [share, setShare] = useState(false);
  const handleShare = (e) => {
    e.preventDefault();
    setShare(!share);
  }
   return (
    <div>
      <Header />
      <div>
        <div className="w-[83%] mx-auto ">
          <div className=" my-8 relative">
            <button onClick={() => navigate(-1)}>
              <FaArrowLeft className="absolute -left-12 text-[26px] "/>
            </button>
            <img
              src={image}
              alt="envent image"
              width={1500}
              height={450}
              className="rounded-3xl"
            />
          </div>
          <div className="flex items-center justify-between ">
            <h2 className="font-[Open Sans] font-[800] text-[48px] ">
              Sound of Christmas 2023
            </h2>
            <div className="flex items-center">
              <span>
                <IoIosStar className="font-[Open Sans] font-[800] text-[40px] mr-4" />
              </span>
              <button onClick={handleShare}>
                <FiShare2 className="font-[Open Sans] font-[800] text-[40px]" />
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
            <h3 className="font-[Open Sans] font-[700] text-[36px] " >Date and Time</h3>
            <p className=" font-[Open Sans] font-[600] text-[24px] flex itms-center mt-2">
                <LuCalendarDays className="text-[24px] mt-2 mr-4" />
              Saturday, 2 December 2023
            </p>
            <p className=" font-[Open Sans] font-[600]  flex itms-center mt-2">
                <GoClock className="text-[24px] mt-2"/>
              <span className="text-[24px] ml-4">6:30 PM - 9:30 PM</span>
            </p>
            <span className="text-[24px] text-[#4539B4] ml-6 mt-2 ">+ Add to Calendar</span>
            </div>
            <div>
            <button onClick={handleTicket} className="flex py-[20px] px-[60px] justify-center itmes-center border-solid border-[1px] border-[#FFE047] bg-[#FFE047] rounded-md">
              <span><IoTicketSharp className="font-[Open Sans] font-[600] text-[32px] mt-2" /></span>
              <span className="font-[Open Sans] font-[600] text-[32px] ml-4 ">  Buy Tickets</span>
            </button>
            <div className="float-right">
              <h3 className="font-[700] font-[Open Sans] text-[30px] ">Ticket Information</h3>
              <p className="flex  ">
                <span><IoTicketSharp className="font-[Open Sans] font-[600] text-[24px] mt-2" /></span> <span className="font-[Open Sans] font-[600] text-[24px] ml-2">Standard Ticket: £ 200 each</span>
              </p>
            </div>
          </div>
          </div>
          
          <div className="w-[25vw] mt-10 mb-10">
            <h3 className="text-[30px] font-[700] font-[Open sans]">Location</h3>
            <p className="flex mt-4 mb-2">
              <span>
                <LuMapPin className="mr-2 mt-1"/>
              </span>{" "}
              Bal Gandharva Rang Mandir, Near junction Of 24th & 32nd Road &
              Patwardhan Park, Off Linking Road, Bandra West, Mumbai, India
            </p>
            <div>
              <iframe
                src="https://www.google.com/maps/place/S%C3%A8m%C3%A8+City+Open+Park+(SCOP)/@6.3531314,2.391363,17z/data=!3m1!4b1!4m6!3m5!1s0x102355618a8330b3:0x5aa27bf3a4523a65!8m2!3d6.3531261!4d2.3939379!16s%2Fg%2F11smnx7vmz?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoASAFQAw%3D%3D"
                width="600"
                height="200"
              ></iframe>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-[28px] font-[600] font-[Open sans] mb-4 ">Hosted by</h3>
            <div className="flex">
              <img src={profilIcon} alt="" width={80} height={60}/>
              <div className="ml-4 font-[Open Sans]">
                <h4>City Youth Movement</h4>
                <div>
                  <button className="p-2 border-solid border-[1px] border-[#2D2C3C] h-[48px] pt-[8px] pr-[19px] pb-[6px] pl-[18px] mr-4 mt-2 " >Contact</button>
                  <button className="p-2 border-solid border-[1px] border-[#2D2C3C] h-[48px] pt-[8px] pr-[19px] pb-[6px] pl-[18px] mr-4 mt-2 bg-[#2B293D] text-[#fff] ">+ Follow</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[30px] font-[700] font-[Open sans] mb-4">Event Description</h3>
            <p className="font-[Open Sans] font-[400] text-[24px] mb-[10px] ">
              Get ready to kick off the Christmas season in Mumbai with{" "}
              <b>SOUND of CHRISTMAS - your favourite LIVE Christmas concert!</b>
            </p>
            <p className="font-[Open Sans] font-[400] text-[24px] mb-[10px] ">
              City Youth Movement invites you to the 4th edition of our annual
              Christmas festivities - by the youth and for the youth! Feat your
              favourite worship leaders, carols, quizzes and some exciting
              surprises!
            </p>
            <p className="font-[Open Sans] font-[400] text-[24px] mb-[10px] ">
              Bring your family and friends and sing along your favourite
              Christmas carols on the 2nd of December, 6:30 PM onwards at the
              Balgandharva Rang Mandir, Bandra West. Book your tickets now!
            </p>
            <h4 className="text-[20px] font-[700] font-[Open sans] mb-4 mt-4">3 Reasons to attend the event:</h4>
            <p className="font-[Open Sans] font-[400] text-[24px] mb-[10px] ">
              <ol>
                <li>1. The FIRST Christmas concert of Mumbai!</li>
                <li>2. A special Christmas Choir!</li>
                <li>3. Special Dance performances and many mmore surprises !</li>
              </ol>
            </p>
          </div>

          <div className="mt-2 mb-12">
            <h3 className="text-[30px] font-[700] font-[Open sans] mb-4">Tags</h3>
            <div className="flex">
              <div className="flex py-[12px] px-[28px] justify-center items-center border-solid border-[1px] border-[#F8F7FA] bg-[#F8F7FA] rounded-[50px] mr-8 ">
                <button>Hollday Concert</button>
              </div>
              <div className="flex py-[12px] px-[28px] justify-center items-center border-solid border-[1px] border-[#F8F7FA] bg-[#F8F7FA] rounded-[50px] mr-8 ">
                <button>Live Performance </button>
              </div>
              <div className="flex py-[12px] px-[28px] justify-center items-center border-solid border-[1px] border-[#F8F7FA] bg-[#F8F7FA] rounded-[50px] mr-8 ">
                <button>Seasonal Event</button>
              </div>
              <div className="flex py-[12px] px-[28px] justify-center items-center border-solid border-[1px] border-[#F8F7FA] bg-[#F8F7FA] rounded-[50px] mr-8 ">
                <button>Family-Friendly</button>
              </div>
              <div className="flex py-[12px] px-[28px] justify-center items-center border-solid border-[1px] border-[#F8F7FA] bg-[#F8F7FA] rounded-[50px] mr-8 ">
                <button>#Christmas_Spirit</button>
              </div>
              <div className="flex py-[12px] px-[28px] justify-center items-center border-solid border-[1px] border-[#F8F7FA] bg-[#F8F7FA] rounded-[50px] mr-8 ">
                <button>#Christmas_Carols</button>
              </div>
            </div>
          </div>
          <hr className="mb-10"/>
          <div>
            <h3 className="mb-6">Other events you may like</h3>
            <div className="h-auto">
              <ContentCardsScrollArrows/>
            </div>
          </div>
        </div>
      </div>
      {
        selectTicket && (
          <div className="absolute top-[128vh] right-[10vw]">
          <SelectTicket handleTicket={handleTicket} handleDetails={handleDetails}/>
        </div>
        )
      }
      {
        details && (
          <div className="absolute top-[128vh] right-[10vw]">
          <AttendeeDetail handleDetail={handleDetail} handleOrder={handleOrder}/>
          </div>
        )
      }
      {
        order && (
          <div className="absolute top-[128vh] right-[10vw]">
          <Order closeOrder={closeOrder} procedeOrder={procedeOrder}/>
        </div>
        )
      }
      {
        share && (
          <div className="absolute top-[128vh] right-[10vw]">
          <ShareIt handleShare={handleShare}/>
          </div>
        )
      }

      <Footer />
    </div>
  );
}

export default EventPage;
