import img1 from "../assert/trendiengEnventsImages/img1.png";
import img2 from "../assert/trendiengEnventsImages/img2.png";
import img3 from "../assert/trendiengEnventsImages/img3.png";
import img4 from "../assert/trendiengEnventsImages/img4.png";
import img5 from "../assert/trendiengEnventsImages/img5.png";
import img6 from "../assert/trendiengEnventsImages/img6.png";

import {Ticket, Star} from "lucide-react";
import { MdOutlineStar } from "react-icons/md";


const ticket = <Ticket size={18}/>;
const start1 = <Star size={22} />;
const start2 = <MdOutlineStar className="text-[#4539B4]"/>;


const TrendingEventsData = [
    {
        id: 1,
        img: img1,
        imgStart: start1,
        category: "Entertainment",
        dateM: "NOV",
        dateJ: "25",
        titre: "Voca Loca - Aditya Gadhvi in Vadodara",
        adress: "Styanarayan Lawns, Vadordara",
        time: `6 PM - 10:30 PM`,
        priceIcon: ticket,
        price: `INR 450`,
        interestedIcon: start2,
        interested: "528 interested"

    },
    {
        id: 2,
        img: img2,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "DEC",
        dateJ: "02",
        titre: "Renaissance Los Angeles Airport Hotel",
        adress: "Online",
        time: `8APM - 12 PM`,
        priceIcon: ticket,
        price: `USD 125`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 3,
        img: img3,
        imgStart: start1,
        category: "Entertainment",
        dateM: "DEC",
        dateJ: "01 - 02",
        titre: "Bollywood Gen Z Party",
        adress: "Brown Alley, Melbourne",
        time: `9:30 PM - 3:30 AM`,
        priceIcon: ticket,
        price: `AUD 0 - 40`,
        interestedIcon: start2,
        interested: "137 interested"

    },
    {
        id: 4,
        img: img4,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "NOV",
        dateJ: "28",
        titre: "GTApreneurs Nov 28 Business Networking Event w/ Food Bi...",
        adress: "Earl Bales Community Centre, Toronto",
        time: `5 PM - 8 PM`,
        priceIcon: ticket,
        price: `CAD 22`,
        interestedIcon: start2,
        interested: "13 interested"

    },
    {
        id: 5,
        img: img5,
        imgStart: start1,
        category: "Cultural & Arts",
        dateM: "NOV",
        dateJ: "25",
        titre: "ADay of well-being and creativity",
        adress: "Atelier du monde for kids, Brussels",
        time: `1O AM - 8:30 PM`,
        priceIcon: ticket,
        price: `EUR 20 - 45`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 6,
        img: img6,
        imgStart: start1,
        category: "Entertainment",
        dateM: "NOV",
        dateJ: "30",
        titre: "Dystopia's Winter Wonderland",
        adress: "Hyde Sunset Kitchen + Cocktails, CA",
        time: `8:30 PM - 11:50 PM`,
        priceIcon: ticket,
        price: `USD 23.5 - 35`,
        interestedIcon: start2,
        interested: "10 interested"
    },
]

export default TrendingEventsData;