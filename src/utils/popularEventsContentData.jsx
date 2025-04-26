import img1 from "../assert/popularEventsContentImage/img1.png";
import img2 from "../assert/popularEventsContentImage/img2.png";
import img3 from "../assert/popularEventsContentImage/img3.png";
import img4 from "../assert/popularEventsContentImage/img4.png";
import img5 from "../assert/popularEventsContentImage/img5.png";
import img6 from "../assert/popularEventsContentImage/img6.png";

import { MdOutlineStar } from "react-icons/md";
import {Ticket, Star} from "lucide-react";



const ticket = <Ticket size={18}/>;
const start1 = <Star size={22} />;
const start2 = <MdOutlineStar className="text-[#4539B4]"/>;


const ContentData = [
    {
        id: 1,
        img: img1,
        imgStart: start1,
        category: "Travel & Adventure",
        dateM: "NOV",
        dateJ: "25-26",
        titre: "Sound Of Christmas 2023",
        adress: "Adventure Geek - Explore the Unexplore...",
        time: `8:30 AM - 7:30 PM`,
        priceIcon: ticket,
        price: `INR 1,400`,
        interestedIcon: start2,
        interested: "14 interested"

    },
    {
        id: 2,
        img: img2,
        imgStart: start1,
        category: "Cutural & Arts",
        dateM: "DEC",
        dateJ: "02",
        titre: "Sound Of Christmas 2023",
        adress: "Bal Gandharva Rang Mandir, Mumbai",
        time: `6:30 PM - 9:30 PM`,
        priceIcon: ticket,
        price: `INR 499`,
        interestedIcon: start2,
        interested: "16 interested"

    },
    {
        id: 3,
        img: img3,
        imgStart: start1,
        category: "Educationnal & Business",
        dateM: "DEC",
        dateJ: "02",
        titre: "Meet the Royal College of Art in Mumbai 2023",
        adress: "Sofitel Mumbai BKC, Mumbai",
        time: `10 AM - 5 PM`,
        priceIcon: ticket,
        price: `FREE`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 4,
        img: img4,
        imgStart: start1,
        category: "Educational & Business",
        dateM: "DEC",
        dateJ: "03",
        titre: "Global Engineering Education Expo 2023",
        adress: "The St. Regis, Mumbai",
        time: `10 AM - 2 PM`,
        priceIcon: ticket,
        price: `FREE`,
        interestedIcon: start2,
        interested: "48 interested"

    },
    {
        id: 5,
        img: img5,
        imgStart: start1,
        category: "Sports & Fitness",
        dateM: "DEC",
        dateJ: "08",
        titre: "Cricket Business Meetup",
        adress: "Play The Turf, Malad, Mumbai",
        time: `6:30 PM - 9:30 PM`,
        priceIcon: ticket,
        price: `INR 399`,
        interestedIcon: "",
        interested: ""

    },
    {
        id: 6,
        img: img6,
        imgStart: start1,
        category: "Travel & Adventure",
        dateM: "FEB",
        dateJ: "14",
        titre: "Valentine's day Sail on Yacht in Mumbai",
        adress: "mumbai",
        time: `7 AM - 8 PM`,
        priceIcon: ticket,
        price: `INR, 2,999`,
        interestedIcon: start2,
        interested: "160 interested"
    },
    // {
    //     id: 7,
    //     img: img6,
    //     imgStart: start1,
    //     category: "Travel & Adventure",
    //     dateM: "FEB",
    //     dateJ: "Tomorrow",
    //     titre: "Valentine's day Sail on Yacht in Mumbai",
    //     adress: "mumbai",
    //     time: `7 AM - 8 PM`,
    //     priceIcon: ticket,
    //     price: `INR, 2,999`,
    //     interestedIcon: start2,
    //     interested: "160 interested"
    // },
    // {
    //     id: 8,
    //     img: img6,
    //     imgStart: start1,
    //     category: "Travel & Adventure",
    //     dateM: "FEB",
    //     dateJ: "14",
    //     dateW: "Weekend",
    //     titre: "Valentine's day Sail on Yacht in Mumbai",
    //     adress: "mumbai",
    //     time: `7 AM - 8 PM`,
    //     priceIcon: ticket,
    //     price: `Free`,
    //     interestedIcon: start2,
    //     interested: "160 interested"
    // },
    // {
    //     id: 9,
    //     img: img6,
    //     imgStart: start1,
    //     category: "Travel & Adventure",
    //     dateM: "FEB",
    //     dateJ: "Today",
    //     titre: "Valentine's day Sail on Yacht in Mumbai",
    //     adress: "mumbai",
    //     time: `7 AM - 8 PM`,
    //     priceIcon: ticket,
    //     price: `INR, 2,999`,
    //     interestedIcon: start2,
    //     interested: "160 interested"
    // },
    // {
    //     id: 10,
    //     img: img6,
    //     imgStart: start1,
    //     category: "Travel & Adventure",
    //     dateM: "FEB",
    //     dateJ: "Tomorrow",
    //     dateW: "",
    //     titre: "Valentine's day Sail on Yacht in Mumbai",
    //     adress: "mumbai",
    //     time: `7 AM - 8 PM`,
    //     priceIcon: ticket,
    //     price: `INR, 2,999`,
    //     interestedIcon: start2,
    //     interested: "160 interested"
    // },
    // {
    //     id: 11,
    //     img: img6,
    //     imgStart: start1,
    //     category: "Travel & Adventure",
    //     dateM: "FEB",
    //     dateJ: "Today",
    //     dateW: "",
    //     titre: "Valentine's day Sail on Yacht in Mumbai",
    //     adress: "mumbai",
    //     time: `7 AM - 8 PM`,
    //     priceIcon: ticket,
    //     price: `Free`,
    //     interestedIcon: start2,
    //     interested: "160 interested"
    // },
    // {
    //     id: 12,
    //     img: img6,
    //     imgStart: start1,
    //     category: "Travel & Adventure",
    //     dateM: "FEB",
    //     dateJ: "14",
    //     dateW: "Weekend",
    //     titre: "Valentine's day Sail on Yacht in Mumbai",
    //     adress: "mumbai",
    //     time: `7 AM - 8 PM`,
    //     priceIcon: ticket,
    //     price: `INR, 2,999`,
    //     interestedIcon: start2,
    //     interested: "160 interested"
    // },
]

export default ContentData;