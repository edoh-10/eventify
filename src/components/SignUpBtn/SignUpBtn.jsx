import React from "react";
import { useState } from "react";

function SignUpBtn({handleDisplay}) {


  return (
      <button
        class="sign-up-button inline-flex justify-center items-center mx-2  [background:var(--Assignment-1-Yellow,#FFE047)] px-5 py-2 rounded-[10px]"
        onClick={handleDisplay}
      >
        <div class="sign-up text-[color:var(--Assignment-1-Dark-Navy-Blue,#2B293D)] text-center [font-family:Montserrat] text-[20px] font-medium leading-[normal]">
          {" "}
          Sign Up{" "}
        </div>
      </button>
  );
}

export default SignUpBtn;
