import React from "react";
import { useNavigate } from "react-router-dom";

function CreateEventBtn({style1, style2, Icon, goToEditPage}) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/create-event")} class={style1}>
      <div  class={style2}> <span className="mr-4"> {Icon} </span> Create Event </div>
    </button>
  );
}

export default CreateEventBtn;
  