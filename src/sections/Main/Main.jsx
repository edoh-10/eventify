

import React from 'react'
import MainPage from '../../pages/MainPage/MainPage';

function Main({handleDisplay, hasText, goToEditPage}) {
  return (
    <div>
      <MainPage handleDisplay={handleDisplay} hasText={hasText} goToEditPage={goToEditPage}/>
    </div>
  )
}

export default Main;