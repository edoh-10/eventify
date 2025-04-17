import { Dot } from "lucide-react";

import React from "react";

function EventsCard({Content, styleDiv = [], handleDisplay}) {
  return (
    <div className={styleDiv[0]}>
      {Content.map((list2) => (
        <div key={list2.id} className={styleDiv[1]}>  
          <div className={styleDiv[2]}>
            {/* icon start, lors du click renvoie vers la page d'inscription */}
            <button onClick={handleDisplay} className={styleDiv[3]}> {list2.imgStart} </button>
            {/* suite du code */}
            <img src={list2.img} alt={list2.titre} className={styleDiv[4]}/>
            <span className={styleDiv[5]}>{list2.category}</span>
          </div>
          <div className={styleDiv[6]}>
            <div className={styleDiv[7]}>
              <span className={styleDiv[8]}> {list2.dateM} </span>
              <span> {list2.dateJ} </span>
            </div> 
            <div className={styleDiv[9]}>
              <h3 className={styleDiv[10]}> {list2.titre} </h3>
              <p className={styleDiv[11]}> {list2.adress} </p>
              <span className={styleDiv[12]}> {list2.time} </span>
              <div className={styleDiv[13]}>
                <span className={styleDiv[14]}>
                  {" "}
                  <span className={styleDiv[15]}>{list2.priceIcon}</span> <span>{list2.price}</span>
                </span>{" "}
                <Dot />{" "}
                <span className={styleDiv[16]}>
                  {" "}
                  <span className={styleDiv[17]}>{list2.interestedIcon}</span> <span>{list2.interested}</span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventsCard;
