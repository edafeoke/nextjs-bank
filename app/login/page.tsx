'use client'
import * as React from "react";
import FormInput from "../ui/FormInput";
import PrimaryButton from "../ui/PrimaryButton";
import Link from "next/link";
import InfoLine from "../ui/InfoLine";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
export default function Login() {
  
  return (
    <div className="w-screen h-screen [background:linear-gradient(180deg,rgb(1.31,84.41,105.19)_0%,rgb(41,129,149)_96.88%)] flex flex-col md:flex-row">
      <div className="flex items-center justify-center bg-white bold w-full h-screen md:w-3/6">
        <div className="w-3/4 flex flex-col">
          <h2 className="text-[#034B5E] font-bold text-2xl my-10">Hi, Welcome Back Fellas!</h2>
          <form className="w-full">
            <FormInput id="username" type="text" name="username" error="" label="Email or username" placeholder="Enter email address or username" />
            <FormInput id="password" label="Password" placeholder="Enter password" name="password" type="password" />
            <Link href='#' className="text-[#edafeed]">Forgot password</Link>
            <PrimaryButton title="Sign in" onClick={() => console.log("Christian wahala")} />
          </form>
        </div>
      </div>
      <div className="hidden md:flex flex-col  [background:linear-gradient(180deg,rgb(1.31,84.41,105.19)_0%,rgb(41,129,149)_96.88%)]">
        <p>Getting Easier
          Pay for Any Transfer
          <span>with IbankCare</span>
        </p>
        <p>Install Ibankcare application right now!</p>
        <div>
          <Image width={340} height={232} src={'/googleplay.png'} alt="mobile" className="" />
          <Image width={394} height={128} src={'/appstore.png'} alt="mobile" className="" />
        </div>
        <Image width={721} height={627} src={'/mobile.png'} alt="mobile" className="w-full" />
      </div>
    </div>
  );
}


