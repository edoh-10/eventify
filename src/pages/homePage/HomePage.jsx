import { useState } from "react";
import React from "react";
import Header from "../../sections/Header/Header";
import Main from "../../sections/Main/Main";
import Footer from "../../sections/Footer/Footer";
import Hero from "../../sections/Hero/Hero";
import SignUpPage from "../SignUpPage/SignUpPage";
import SignInPage from "../SignInPage/SignInPage";


function HomePage() {
  // etat pour contrôler l'affichage du signUp Page
  const [display, setDisplay] = useState(false);

  // état pour contrôler l'affichage du log in page
  const [log, setLog] = useState(false);

  // état pour contrôler home page
  const [home, setHome] = useState(true)

  // function de changement de l'état via le button
  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay(!display);
    setHome(!home);
  };

  // function de changement de l'état de log via le log in button
  const handleLog = (e) => {
    e.preventDefault();
    setLog(!log);
    setHome(!home);
  }

  // function pour naviguer de sign in vers sing up
  const goToSingUp = (e) => {
    e.preventDefault();
    if(log && !home){
      setLog(!log);
      setDisplay(!display);
      setHome(home);
    }
  }

  // function pour naviguer de sign up vers sign in
  const goToSingIn = (e) => {
    e.preventDefault();
    if(display && !home){
      setDisplay(!display);
      setLog(!log);
      setHome(home);
    }
  }

  return (
    <div>
      {home && (
        <>
          <Header handleDisplay={handleDisplay} handleLog={handleLog}/>
          <Hero />
          <Main handleDisplay={handleDisplay}/>
          <Footer />
        </>
      )} 
      {display && <SignUpPage handleDisplay={handleDisplay} goToSingIn={goToSingIn}/>}
      {log && <SignInPage handleLog={handleLog} goToSingUp={goToSingUp} />}
    </div>
  );
}

export default HomePage;
