import "./App.css";
import AttendeeDetail from "./components/AttendeeDetail/AttendeeDetail";
import Order from "./components/Order/Order";
import SelectTicket from "./components/SelectTicket/SelectTicket";
import ShareIt from "./components/shareIt/ShareIt";
import CreateEventBannerPage from "./pages/CreateEventBannerPage/CreateEventBannerPage";
import CreateEventEditPage from "./pages/CreateEventEditPage/CreateEventEditPage";
import CreateEventReviewPage from "./pages/CreateEventReviewPage/CreateEventReviewPage";
import CreateEventTicketingPage from "./pages/CreateEventTicketingPage/CreateEventTicketingPage";
import EventPage from "./pages/EVentPage/EventPage";
import EventsPage1 from "./pages/EventsCategoryPages/Educationnal_Business_Category/EventPage1";
import EventsPage2 from "./pages/EventsCategoryPages/Entertainment_Category/EventsPage2";
import EventsPage5 from "./pages/EventsCategoryPages/Online_Category/EventsPage5";
import EventsPage3 from "./pages/EventsCategoryPages/Today_Category/EventsPage3";
import EventsPage4 from "./pages/EventsCategoryPages/Venue_Category/EventsPage4";
import EventsPage6 from "./pages/EventsCategoryPages/WorldWide_Category/EventsPage6";
import HomePage from "./pages/homePage/HomePage";
import HomePageUserRegistered from "./pages/HomePageUserRegistered/HomePageUserRegistered";
import ProfileAccountInfoPage from "./pages/ProfileAccountInfoPage/ProfileAccountInfoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import SelectInterestsPage from "./pages/SelectInterestsPage/SelectInterestsPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/user" element={<HomePageUserRegistered/>}/>
        <Route path="/interest" element={<SelectInterestsPage/>}/>
        <Route path="/event" element={<EventPage/>}/>
        <Route path="/create-event" element={<CreateEventEditPage/>}/>
        <Route path="/create-event-banner" element={<CreateEventBannerPage/>}/>
        <Route path="/create-event-ticket" element={<CreateEventTicketingPage/>}/>
        <Route path="/create-event-preview" element={<CreateEventReviewPage/>}/>
        <Route path="/profil" element={<ProfileAccountInfoPage/>}/>
      </Routes>
      {/* <HomePageUserRegistered/> */}
      {/* <SignUpPage/> */}
      {/* <SignInPage/> */}
      {/*  */}
      {/* <SearchResultsPage/> */}
      {/* <EventsPage1/> */}
      {/* <EventsPage2/> */}
      {/* <EventsPage3/> */}
      {/* <EventsPage4/> */}
      {/* <EventsPage5/> */}
      {/* <EventsPage6/> */}
      {/* <EventPage/> */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* <SelectTicket/> */}
      {/* <ShareIt/> */}
      {/* <AttendeeDetail/> */}
      {/* <Order/> */}
    </div>
  );
}

export default App;
