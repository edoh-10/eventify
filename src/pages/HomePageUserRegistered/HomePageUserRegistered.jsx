

import React from 'react'
import Header from '../../sections/Header/Header'
import Hero from '../../sections/Hero/Hero'
import Main from '../../sections/Main/Main'
import Footer from '../../sections/Footer/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePageUserRegistered() {
  // initialisation des états pour voir si il y du texte dans l'input afin de changer le contenu de mainPge
  const [searchText, setSearchText] = useState("");

  // function pour changer l'état
  const handleChangeTexte = (e) => {
    setSearchText(e.target.value);
  }

  const hasText = searchText.trim() !== "";
  

  const navigate = useNavigate();
  const goToEditPage = (e) => {
    navigate("/create-event");
  }



  return (
    <div>
      <Header/>
      <Hero handleChangeTexte={handleChangeTexte} searchText={searchText} />
      <Main hasText={hasText} goToEditPage={goToEditPage}/>
      <Footer/>
    </div>
  )
}

export default HomePageUserRegistered