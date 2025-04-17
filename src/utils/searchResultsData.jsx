import img1 from "../assert/searchResultPageImages/img1.png";
import img2 from "../assert/searchResultPageImages/img2.png";
import img3 from "../assert/searchResultPageImages/img3.png";
import img4 from "../assert/searchResultPageImages/img4.png";
import img5 from "../assert/searchResultPageImages/img5.png";
import img6 from "../assert/searchResultPageImages/img6.png";
import img7 from "../assert/searchResultPageImages/img7.png";
import img8 from "../assert/searchResultPageImages/img8.png";
import img9 from "../assert/searchResultPageImages/img9.jpg";
import img10 from "../assert/searchResultPageImages/img10.png";
import img11 from "../assert/searchResultPageImages/img11.png";
import img12 from "../assert/searchResultPageImages/img12.jpg";
import img13 from "../assert/searchResultPageImages/img13.png";
import img14 from "../assert/searchResultPageImages/img14.png";
import img15 from "../assert/searchResultPageImages/img15.png";
import img16 from "../assert/searchResultPageImages/img16.png";
import img17 from "../assert/searchResultPageImages/img17.png";
import img18 from "../assert/searchResultPageImages/img18.png";
import img19 from "../assert/searchResultPageImages/img19.jpg";
import img20 from "../assert/searchResultPageImages/img20.png";
import img21 from "../assert/searchResultPageImages/img21.png";
import img22 from "../assert/searchResultPageImages/img22.jpg";

import ticke from "../assert/searchResultPageImages/ion_ticket.svg";

import { MdOutlineStar } from "react-icons/md";
import {Ticket, Star} from "lucide-react";

const start1 = <Star size={22} />;
const start2 = <MdOutlineStar className="text-[#4539B4]"/>;
const ticket = <img src={ticke} alt="ticket"/>


const SearchResultsData = [
    {
        id: 1,
        img: img1,
        imgStart: start1,
        category: "Food & Drink",
        dateM: "NOV",
        dateJ: "23-29",
        titre: "Delhi 6 - Tradictional Food from Delhi Street",
        adress: "Chengalpattu, ind...",
        time: `7 pM - 11 PM`,
        priceIcon: ticket,
        price: `INR 1200`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 2,
        img: img2,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "DEC",
        dateJ: "16",
        titre: "DELHI BUSINESS NETWORK | BUSINESS...",
        adress: "Gurgaon, India",
        time: `10:30 AM - 1:30 PM`,
        priceIcon: ticket,
        price: `INR 475`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 3,
        img: img3,
        imgStart: start1,
        category: "Educationnal & Business",
        dateM: "DEC",
        dateJ: "17",
        titre: "Startup Talks - Innovation event for founders & st...",
        adress: "New Delhi, india",
        time: `3 PM - 6 PM`,
        priceIcon: ticket,
        price: `FREE`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 4,
        img: img4,
        imgStart: start1,
        category: "Entertainment",
        dateM: "Nov",
        dateJ: "26",
        titre: "Sinful Sunday By Party Out Delhi",
        adress: "Gurgaon, India",
        time: `8:30 PM - 11:45 PM`,
        priceIcon: ticket,
        price: `INR 1099 - 2799`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 5,
        img: img5,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "DEC",
        dateJ: "10",
        titre: "New Delhi Peaceful Investing Workshop",
        adress: "Bahadurgarh, India",
        time: `8 AM - 5 PM`,
        priceIcon: "",
        price: ``,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 6,
        img: img6,
        imgStart: start1,
        category: "Cultural & Arts",
        dateM: "Dec",
        dateJ: "31",
        titre: "Poetry and Storytelling Open Mic in Delhi",
        adress: "New Delhi, India",
        time: `11 AM - 2 PM`,
        priceIcon: ticket,
        price: `INR 100 - 300`,
        interestedIcon: "",
        interested: ""
    },
    {
        id: 7,
        img: img1,
        imgStart: start1,
        category: "Sports & Fitness",
        dateM: "Dec",
        dateJ: "16 - 17",
        titre: "PlayAll Presents South Delhi Box Cricket Cup -...",
        adress: "New Delhi, India",
        time: `3 PM - 8 PM`,
        priceIcon: ticket,
        price: `INR 4000`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 8,
        img: img8,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "DEC",
        dateJ: "02",
        titre: "D2C Fashion Fiesta - For Fashion Founders in Del...",
        adress: "New Delhi, India",
        time: `6:30 PM - 9:30 PM`,
        priceIcon: ticket,
        price: `INR 1000`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 9,
        img: img9,
        imgStart: start1,
        category: "Entertainment",
        dateM: "DEC",
        dateJ: "24",
        titre: "MindFool India Tour - Vir Das",
        adress: "Delhi, NCR, India",
        time: `8 PM - 9:30 PM`,
        priceIcon: ticket,
        price: `INR 799 - 2499`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 10,
        img: img10,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "Feb",
        dateJ: "06",
        titre: "New Delhi 2024 Venture Capital World Summit",
        adress: "New Delhi, India",
        time: `9 AM - 2 PM`,
        priceIcon: ticket,
        price: `INR 20,980 - 45,610`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 11,
        img: img11,
        imgStart: start1,
        category: "Sports & Fitness",
        dateM: "DEC",
        dateJ: "12",
        titre: "Khushi Baby Stakeholder Summit | New Delhi",
        adress: "Play The Turf, Malad, Mumbai",
        time: `9 AM - 5 PM`,
        priceIcon: ticket,
        price: `FREE`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 12,
        img: img12,
        imgStart: start1,
        category: "Travel & Adventure",
        dateM: "Nov",
        dateJ: "27",
        titre: "Sunburn Arena with Dimitri Vegas & Like Mike",
        adress: "mumbai",
        time: `7 AM - 8 PM`,
        priceIcon: ticket,
        price: `INR, 899`,
        interestedIcon: "",
        interested: ""
    },
    {
        id: 13,
        img: img13,
        imgStart: start1,
        category: "Entertainment",
        dateM: "Dec",
        dateJ: "16-17",
        titre: "Pet Fed Delhi 2023",
        adress: "New Delhi, India",
        time: `11 AM - 9 PM`,
        priceIcon: "",
        price: ``,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 14,
        img: img14,
        imgStart: start1,
        category: "Cutural & Arts",
        dateM: "Nov",
        dateJ: "28",
        titre: "The S&S Trunk Show Winter Edit",
        adress: "New Delhi, India",
        time: `11 AM - 8 PM`,
        priceIcon: "",
        price: ``,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 15,
        img: img15,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "DEC",
        dateJ: "10",
        titre: "Meet the Royal College of Art in Mumbai 2023",
        adress: "Bahadurgarh, India",
        time: `8 AM - 5 PM`,
        priceIcon: "",
        price: ``,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 16,
        img: img16,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "DEC",
        dateJ: "03",
        titre: "Poetry and Storytelling Open Mic in Delhi",
        adress: "New Delhi, India",
        time: `11 AM - 2 PM`,
        priceIcon: ticket,
        price: `INR 100 - 300`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 17,
        img: img17,
        imgStart: start1,
        category: "Sports & Fitness",
        dateM: "DEC",
        dateJ: "16 - 17",
        titre: "PlayAll presents South Delhi Box Cricket Cup -...",
        adress: "New Delhi, India",
        time: `3 PM - 8 PM`,
        priceIcon: ticket,
        price: `INR 4000`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 18,
        img: img18,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "Dec",
        dateJ: "02",
        titre: "D2C Fashion Fiesta - For Fashion Founders in Del...",
        adress: "New Delhi, India",
        time: `7 AM - 8 PM`,
        priceIcon: ticket,
        price: `INR, 1000`,
        interestedIcon: "",
        interested: ""
    },
    {
        id: 19,
        img: img19,
        imgStart: start1,
        category: "Entertainment",
        dateM: "Dec",
        dateJ: "24",
        titre: "MindFool India Tour - Vir Das",
        adress: "Delhi, NCR, India",
        time: `8 PM - 9:30 PM`,
        priceIcon: ticket,
        price: `INR 1,400`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 20,
        img: img20,
        imgStart: start1,
        category: "Cutural & Arts",
        dateM: "Feb",
        dateJ: "06",
        titre: "New Delhi 2024 Venture Capital World Summit",
        adress: "New Delhi, India",
        time: `6:30 PM - 9:30 PM`,
        priceIcon: ticket,
        price: `INR 20,980 - 45,610`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 21,
        img: img21,
        imgStart: start1,
        category: "Educationnal & Business",
        dateM: "DEC",
        dateJ: "12",
        titre: "Khushi Baby Stakeholder Summit | New Delhi",
        adress: "New Delhi, India",
        time: `9 AM - 5 PM`,
        priceIcon: ticket,
        price: `FREE`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 22,
        img: img22,
        imgStart: start1,
        category: "Entertainment",
        dateM: "Nov",
        dateJ: "27",
        titre: "Sunburn Arena with Dimitri Vegas & Like Mike",
        adress: "New Delhi, India",
        time: `4 PM - 10 PM`,
        priceIcon: ticket,
        price: `899`,
        interestedIcon: "",
        interested: ""

    },
]

export default SearchResultsData;