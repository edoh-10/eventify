import "./App.css";
import AttendeeDetail from "./components/AttendeeDetail/AttendeeDetail";
import Order from "./components/Order/Order";
import SelectTicket from "./components/SelectTicket/SelectTicket";
import ShareIt from "./components/shareIt/ShareIt";
import About from "./pages/about/About";
import Contact from "./pages/contactPage/Contact";
import CreateEventBannerPage from "./pages/CreateEventBannerPage/CreateEventBannerPage";
import CreateEventEditPage from "./pages/CreateEventEditPage/CreateEventEditPage";
import CreateEventReviewPage from "./pages/CreateEventReviewPage/CreateEventReviewPage";
import CreateEventTicketingPage from "./pages/CreateEventTicketingPage/CreateEventTicketingPage";
import AllEventsPage from "./pages/eventListPage/EventList";
import EventPage from "./pages/EVentPage/EventPage";
import EventsPage1 from "./pages/EventsCategoryPages/Educationnal_Business_Category/EventPage1";
import HomePage from "./pages/homePage/HomePage";
import HomePageUserRegistered from "./pages/HomePageUserRegistered/HomePageUserRegistered";
import InterestedEventsPage from "./pages/InterestedEventsPage/InterestedEventsPage";
import ProfileAccountInfoPage from "./pages/ProfileAccountInfoPage/ProfileAccountInfoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import SelectInterestsPage from "./pages/SelectInterestsPage/SelectInterestsPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";


// ----------- data ----------
import OnlineData from "./utils/bestOnlineEventsData";
import ContentData from "./utils/popularEventsContentData";
import TrendingEventsData from "./utils/trendingEventsData";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/user" element={<HomePageUserRegistered/>}/>
        <Route path="/interest" element={<SelectInterestsPage/>}/>
        <Route path="/event/:id" element={<EventPage content1={OnlineData} content2={ContentData} content3={TrendingEventsData}/>}/>
        <Route path="/event-category/:id" element={<EventsPage1/>}/>
        <Route path="/create-event" element={<CreateEventEditPage/>}/>
        <Route path="/create-event-banner" element={<CreateEventBannerPage/>}/>
        <Route path="/create-event-ticket" element={<CreateEventTicketingPage/>}/>
        <Route path="/create-event-preview" element={<CreateEventReviewPage/>}/>
        <Route path="/profil" element={<ProfileAccountInfoPage/>}/>
        <Route path="/favorite" element={<InterestedEventsPage/>}/>
        <Route path="/create-event" element={<CreateEventEditPage/>}/>
        <Route path="/create-event-banner" element={<CreateEventBannerPage/>}/>
        <Route path="/create-event-ticketing" element={<CreateEventTicketingPage/>}/>
        <Route path="/create-event-review" element={<CreateEventReviewPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/allEvents" element={<AllEventsPage/>}/>
      </Routes>
      {/* <EventPage/> */}
    </div>
  );
}

export default App;
