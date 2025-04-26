import img1 from "../assert/bestOnlineEventsImages/img1.png";
import img2 from "../assert/bestOnlineEventsImages/img2.jpg";
import img3 from "../assert/bestOnlineEventsImages/img3.png";
import img4 from "../assert/bestOnlineEventsImages/img4.png";
import img5 from "../assert/bestOnlineEventsImages/img5.png";
import img6 from "../assert/bestOnlineEventsImages/img6.png";

import {Ticket, Star} from "lucide-react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";


const ticket = <Ticket size={18}/>;
const start1 = <MdOutlineStarPurple500 size={22} />;
const start2 = <MdOutlineStar className="text-[#4539B4]"/>;


const InterestedData = [
    {
        id: 1,
        img: img1,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "JAN",
        dateJ: "13",
        titre: "The Road to Jobs and Internships: Starting with Lin...",
        adress: "Online",
        time: `6 PM - 7:30 PM`,
        priceIcon: ticket,
        price: `INR 49`,
        interestedIcon: start2,
        interested: "21 interested"

    },
    {
        id: 2,
        img: img2,
        imgStart: start1,
        category: "Sports a Fitness",
        dateM: "NOV",
        dateJ: "29",
        titre: "Online Zumba Dance Fitness Class over Zoom",
        adress: "Online",
        time: `7 PM - 8 PM`,
        priceIcon: ticket,
        price: `CAD 7`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 3,
        img: img3,
        imgStart: start1,
        category: "Cultural & Arts",
        dateM: "DEC",
        dateJ: "12",
        titre: "Eassy book folding: Christmas edition",
        adress: "Online",
        time: `4 PM - 5:30 PM`,
        priceIcon: ticket,
        price: `FREE`,
        interestedIcon: start2,
        interested: "10 interested"

    },
    {
        id: 4,
        img: img4,
        imgStart: start1,
        category: "Cultural & Arts",
        dateM: "DEC",
        dateJ: "14",
        titre: "Voices from the Rome Synod: An evening with Austen Iverei...",
        adress: "Online",
        time: `1 PM - 2 PM`,
        priceIcon: ticket,
        price: `FREE`,
        interestedIcon: start2,
        interested: "37 interested"

    },
    {
        id: 5,
        img: img5,
        imgStart: start1,
        category: "Technology & Innovation",
        dateM: "NOV",
        dateJ: "29",
        titre: "HackerX - Zurich (Full-Stack) 11/29 (Virtual)",
        adress: "Online",
        time: `11:30 AM - 1:30 PM`,
        priceIcon: ticket,
        price: `USD 0 - 50`,
        interestedIcon: start2,
        interested: "16 interested"

    },
    {
        id: 6,
        img: img6,
        imgStart: start1,
        category: "Technology & Innovation",
        dateM: "DEC",
        dateJ: "07",
        titre: "FRIENDS OF THE METAVERSE: Season of Innovation 2023",
        adress: "Online",
        time: `10:30 AM - 5 PM`,
        priceIcon: ticket,
        price: `USD 0 - 150`,
        interestedIcon: start2,
        interested: "10 interested"
    },
]

export default InterestedData;