import * as React from "react";

export default function Login() {
  return (
    <div className="w-screen h-screen [background:linear-gradient(180deg,rgb(1.31,84.41,105.19)_0%,rgb(41,129,149)_96.88%)] flex flex-row">
      <div className="flex items-center justify-center h-ful bg-white bold w-3/6">
        <div className=" w-3/4 flex flex-col">
          <h2 className="text-[#034B5E] font-bold text-2xl">Hi, Welcome Back Fellas!</h2>
          <form className="w-full">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input className="w-full h-[65px]" type="text" name="email" id="email" />
              <span className="hidden">error</span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Password">Password</label>
              <input className="w-full h-[65px]" type="password" name="password" id="password" />
              <span className="hidden">error</span>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
}


