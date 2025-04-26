import React from "react";

function LoginBtn({handleLog}) {
  return (
    <button onClick={handleLog} class="label-button inline-flex justify-center mx-3 items-center">
      <div class="label text-[color:var(--Assignment-1-White,#FFF)] text-center [font-family:Montserrat] text-[20px] font-medium leading-[normal]"> Login </div>
    </button>
  );
}

export default LoginBtn; 
 