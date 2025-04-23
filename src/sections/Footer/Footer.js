import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";
import googleImg from "../../assert/FooterImage/google.png";
import appleImg from "../../assert/FooterImage/apple.png";
import copyImg from "../../assert/FooterImage/copyright icon.svg";

function Footer() {
  return (
    <div className="footer bg-[#2B293D]">
      <div className="w-[83%] mx-auto flex flex-wrap flex-col">
        <div className="flex flex-wrap justify-between py-12 text-[#A9A9A9] ">
          <div>
            <div>
              <h3>Company Info</h3>
              <nav>
                <ul>
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                  <li>
                    <Link>Careers</Link>
                  </li>
                  <li>
                    <Link>FAQs</Link>
                  </li>
                  <li>
                    <Link>Terms of Service</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* help */}
          <div>
            <h3>Help</h3>
            <nav>
              <ul>
                <li>
                  <Link>Account Support</Link>
                </li>
                <li>
                  <Link>Listing Events</Link>
                </li>
                <li>
                  <Link>Event Ticketing</Link>
                </li>
                <li>
                  <Link>Ticket Purchase Terms & Conditions</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Categories */}
          <div>
            <h3>Categories</h3>
            <nav>
              <ul>
                <li>
                  <Link>Concerts & Gigs</Link>
                </li>
                <li>
                  <Link>Festivals & Lifestyle</Link>
                </li>
                <li>
                  <Link>Business & Networking</Link>
                </li>
                <li>
                  <Link>Food & Drinks</Link>
                </li>
                <li>
                  <Link>Performing Arts</Link>
                </li>
                <li>
                  <Link>Sports & Outdoors</Link>
                </li>
                <li>
                  <Link>Exhbitions</Link>
                </li>
                <li>
                  <Link>Workshops, Conferences & Classes</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Follow Us */}
          <div>
            <h3>Follow Us</h3>
            <nav>
              <ul>
                <li>
                  <Link>Facebook</Link>
                </li>
                <li>
                  <Link>Instagram</Link>
                </li>
                <li>
                  <Link>Twitter</Link>
                </li>
                <li>
                  <Link>Youtube</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Download The App */}
          <div>
            <h3>Download The App</h3>
            <a href="">
            <div className="flex flex-wrap items-center justify-center rounded-md border-solid border-[1px] border-[#A9A9A9] h-auto w-auto p-2 mb-4 ">
              <img src={googleImg} alt="" />
              <div className="flex flex-col ml-6">
                <span>Get it on</span>
                <span>Google Play</span>
              </div>
            </div>
            </a>
            <a href="">
            <div className="flex flex-wrap items-center justify-center rounded-md border-solid border-[1px] border-[#A9A9A9] h-auto w-auto p-2 ">
              <img src={appleImg} alt="" />
              <div className="flex flex-col">
                <span>Download on the</span>
                <span>App Store</span>
              </div>
            </div>
            </a>
          </div>
        </div>
        <hr />
        <div className=" my-4 text-[#A9A9A9] ">
          <span className="flex items-center justify-center">
            <img src={copyImg} alt="" />
            <span className="ml-2">2025 Eventify. All rights reserved.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
