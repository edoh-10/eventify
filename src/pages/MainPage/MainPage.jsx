import React from "react";
import ExploreCategory from "../../components/exploreCategory/ExploreCategory";
import PopularEvents from "../../components/popularEvents/PopularEvents";
import BestOnlineEvents from "../../components/bestOnlineEvents/BestOnlineEvents";
import SpecialyForYou from "../../components/specialyForYou/SpecialyForYou";
import TrendingEvents from "../../components/trendingEvents/TrendingEvents";
import CreateEventCTA from "../../components/createEventCTA/CreateEventCTA";
import NewsLetters from "../../components/newsLetters/NewsLetters";
import { useNavigate } from "react-router-dom";
import SearchResultsPage from "../SearchResultsPage/SearchResultsPage";

function MainPage({ handleDisplay, hasText, goToEditPage }) {
  // configuration de la redirection
  const navigate = useNavigate();
  const goToInterest = (e) => {
    e.preventDefault();
    navigate("/interest");
  };
  return (
    <div>
      {!hasText ? (
        <>
          <ExploreCategory />
          <PopularEvents handleDisplay={handleDisplay} />
          <BestOnlineEvents handleDisplay={handleDisplay} />
          <SpecialyForYou goToInterest={goToInterest} />
          <TrendingEvents handleDisplay={handleDisplay} />
          <CreateEventCTA goToEditPage={goToEditPage} />
          <NewsLetters />
        </>
      ) : (
        <SearchResultsPage />
      )}
    </div>
  );
}

export default MainPage;
