import React from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SelectInterestsPage() {
// initialisation de navigate
const navigate = useNavigate();

// function pour le btn de retour
const goBack = () => {
  navigate(-1);
}
  return (
    <div>
      <Header />
      <div>
        <div className="w-[83%] mx-auto flex flex-col flex-wrap ">
          {/* en tête de la page */}
          <div className="flex items-center">
            <button onClick={goBack} className="absolute top-24 left-20">
              <FaArrowLeft className="text-[28px] "/>
            </button>
            <div>
            <h2 className="font-[Montserrat] font-[700] text-[48px] mb-6">Share your interests with us</h2>
            <p className="font-[Open Sans] font-[400] text-[24px] ">
              Choose your interests below to get personalized event suggestions
            </p>
            </div>
          </div>
          {/* formulaire */}
          <div>
            <form action="">
              {/* Music */}
              <div className="flex flex-col flex-wrap">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Music</h2>
                <div className="flex items-center mb-10 mt-4">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Concerts" className="bg-[rgba(111, 111, 111, 0.50)]  "/>
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Music Festivals" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Music Workshops" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Dj Nights" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Arts & Culture */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Arts & Culture</h2>
                <div className="flex items-center mb-10 mt-4 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Arts Exhibitions" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Cultural Festivals" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Theater Plays" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Dance Performances" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Food & Drink */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Food & Drink</h2>
                <div className="flex items-center mb-10 mt-4 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Food Festivals" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Wine Tastings" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Cooking Classes" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Beer Festivals" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Sports & Fitness */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Sports & Fitness</h2>
                <div className="flex items-center mb-10 mt-4 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Marathons" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Yoga Sessions" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Fitness Workshops" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Sporting Events" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Business & Networking */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Business & Networking</h2>
                <div className="flex items-center mt-4 mb-10 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Conferences" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Seminars" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Workshops" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Networking Events" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Family & Kids */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Family & Kids</h2>
                <div className="flex items-center mt-4 mb-10 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Family-Friendly Events" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Children's Workshops" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Kid-Friendly Shows" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Educational Activities" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Technology */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Technology</h2>
                <div className="flex items-center mt-4 mb-10 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Tech Coferences" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Hackathons" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Startup Events" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Gadget Expos" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Comedy & Entertainment */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Comedy & Entertainment</h2>
                <div className="flex items-center mt-4 mb-10 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Stand-up Comedy" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Improv Nights" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Comedy Festivals" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Magic Shows" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Charity & Causes */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Charity & Causes</h2>
                <div className="flex items-center mb-10 mt-4 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input
                      type="button"
                      value="Fundraising Events"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Charity Galas" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Benefit Concerts" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Auctions &Fundraisers" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Education & Learning */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Education & Learning</h2>
                <div className="flex items-center mb-10 mt-4 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Lectures & Talks" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Workshops" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Educational Seminars" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Skill-Building Sessions" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
              {/* Travel & Adventures */}
              <div className="mt-8">
                <h2 className="font-[Open Sans] font-[600] text-[32px] ">Travel & Adventures</h2>
                <div className="flex items-center mt-4 mb-10 ">
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="City Tours" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Adventure Travel" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Cultural Experiences" />
                  </div>
                  <div className="bg-[rgba(111, 111, 111, 0.50)] flex items-center justify-center py-[8px] px-[20px] border-solid border-[1px] border-[rgba(111, 111, 111, 0.50)] rounded-full mr-6 ">
                    <input type="button" value="Cruise vacations" />
                  </div>
                </div>
                <span>
                  <hr />
                </span>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-end my-20 ">
          <div className=" flex items-center justify-center w-[330px] h-[74px] border-solid border-[1px]  border-[#2B293D] bg-[#2B293D] rounded-md">
          <button className="font-[Open Sans] font-[700] text-[24px] text-[#fff]">Save my Interests</button>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SelectInterestsPage;
