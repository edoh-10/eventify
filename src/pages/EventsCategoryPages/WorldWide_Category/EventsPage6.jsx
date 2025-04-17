

import React from 'react'
import Header from '../../../sections/Header/Header'
import Hero from '../../../sections/Hero/Hero'
import Footer from '../../../sections/Footer/Footer'
import SearchResultsData from '../../../utils/searchResultsData'
import SearchResultsCard from '../../../components/searchResultsCard/SearchResultsCard'

function EventsPage6() {

  return (
    <div>
      <Header/>
      <Hero/>
      <div className='flex mt-12 w-screen'>
        {/* filters */}
        <div className='w-[18%] h-fit border-r-solid border-r-[1px] pb-40 '>
          <div className='w-90%] ml-10'>
            <h2 className='font-[Montserrat] font-[600] text-[32px] mb-16 '>Filters</h2>
            <form action="">
              {/* Price */}
              <div className='w-[80%] mb-6'>
                <h2 className='font-[Open Sans] font-[600] text-[24px] mb-4'>Price</h2>
                <div className='mb-10'>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='free'/> <label htmlFor="free">Free</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='Paid' /> <label htmlFor="Paid">Paid</label></div>
                </div>
                <span><hr /></span>
              </div>
              {/* Date */}
              <div className='w-[80%] mb-6'>
                <h2 className='font-[Open Sans] font-[600] text-[24px] mb-4'>Date</h2>
                <div className='mb-10'>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='today'/> <label htmlFor="today">Today</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='Tomorrow' /> <label htmlFor="Tomorrow">Tomorrow</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='thisWeek' /> <label htmlFor="thisWeek">This Week</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='thisWeekend'/> <label htmlFor="thisWeekend">This Weekend</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='pickAdate' /> <label htmlFor="pickAdate">Pick a Date</label></div> 
                  <span>More</span>
                </div>
                <span><hr /></span>
              </div>
              <div  className='w-[80%] mb-6'>
                <h2 className='font-[Open Sans] font-[600] text-[24px] mb-4'>Category</h2>
                <div className='mb-10'>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='adventureTravel' /> <label htmlFor="adventureTravel">Adventure Travel</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='artExhibitions' /> <label htmlFor="artExhibitions">Art Exhibitions</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='auctionsFundraisers' /> <label htmlFor="auctionsFundraisers">Auctions & Fundraisers</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='beerFestivals' /> <label htmlFor="beerFestivals">Beer Festivals</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='benefitConcerts' /> <label htmlFor="benefitConcerts">Benefit Concerts</label></div>
                  <span>More</span>
                </div>
                <span><hr /></span>
              </div>
              <div className='w-[80%] mb-4'>
                <h2 className='font-[Open Sans] font-[600] text-[24px] mb-4'>Format</h2>
                <div className='mb-10'>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='communityEngagement' /> <label htmlFor="communityEngagement">Community Engagement</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='concertsPerformances' /> <label htmlFor="concertsPerformances">Concerts & Performances</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='conferences' /> <label htmlFor="conferences">Conferences</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='experientialEvents' /> <label htmlFor="experientialEvents">Experiential Events</label></div>
                  <div className='text-[16px] font-[Open Sans] font-[400] mb-2 '><input type="checkbox" id='festivalsFairs' /> <label htmlFor="festivalsFairs">Festivals & Fairs</label></div>
                  <span>More</span>
                </div>
                <span><hr /></span>
              </div>
            </form>
          </div>
        </div>
        {/* result */}
        <div className='ml-12 w-[75%] mx-auto pb-24'>
          {/* sorting by*/}
          <div className='mb-20 flex items-center justify-end ' >
            <form action="">
              <div className='flex items-center'>
                <label htmlFor="sortBy">Sort by: </label>
                <div className='border-solid border-[2px] ml-4 p-2 w-[10vw] flex items-center justify-center'>
                <select name="" id="sortBy" className='w-full'>
                  <option value="">Relevance</option>
                </select>
                </div>
              </div>
            </form>
          </div>
          {/* events cards lists */}
          <div>
            <SearchResultsCard Content={SearchResultsData}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default EventsPage6;