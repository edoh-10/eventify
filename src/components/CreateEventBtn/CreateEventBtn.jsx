import React from "react";

function CreateEventBtn({style1, style2, Icon, goToEditPage}) {
  return (
    <button onClick={goToEditPage} class={style1}>
      <div  class={style2}> <span className="mr-4"> {Icon} </span> Create Event </div>
    </button>
  );
}

export default CreateEventBtn;
  