import React from "react";

function LoginBtn({handleLog}) {
  return (
    <button onClick={handleLog} class="label-button inline-flex justify-center items-center gap-2.5 px-5 py-2.5">
      <div class="label text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-2xl font-medium leading-[normal]"> Login </div>
    </button>
  );
}

export default LoginBtn; 
 