'use client'
import * as React from "react";
import FormInput from "@/app/ui/FormInput";
import PrimaryButton from "@/app/ui/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import WhiteButton from "@/app/ui/CustomButton";
import { Metadata } from "next";

const metadata: Metadata = {
  title: 'Login',
}

export default function Login() {

  return (
    <div className="w-screen h-screen  flex flex-col md:flex-row">
      <div className="flex items-center justify-center bg-white bold w-full h-screen lg:w-4/6">
        <div className="w-3/4 flex flex-col">
          <h2 className="text-[#034B5E] font-bold text-2xl my-10">Hi, Welcome Back Fellas!</h2>
          <form className="w-full">
            <FormInput id="username" type="text" name="username" error="" label="Email or username" placeholder="Enter email address or username" />
            <FormInput id="password" label="Password" placeholder="Enter password" name="password" type="password" />
            <Link href='#' className="block text-primary text-right">Forgot password</Link>
            <PrimaryButton title="Sign in" onClick={() => console.log("Login")} />
          </form>
          {/* <div className="flex flex-row items-center justify-center">
            <div className="bg-gray-500 h-[.3px] flex flex-grow" />
            <p className="mx-5 text-[#919499]">Or sign in with</p>
            <div className="bg-gray-500 h-[.3px] flex flex-grow" />
          </div> */}
            <p className="text-center block mt-16 text-[#919499]">You don&apos;t Have an Account? <Link href='/register' className="text-primary text-right">Sign up</Link></p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center justify-center h-full py-5 pl-5 bg-gradient w-2/6">
        <div className="w-3/4">
          <p className="text-[36px] text-white leading-[49px]">Getting Easier
            Pay for Any Transfer<br />
            <span className="text-[#f8ad15]">with IbankCare</span>
          </p>
          <p className="text-[14px] text-white weight-[500] leading-[32px]">Install Ibankcare application right now!</p>
          <div className="flex">
            <Image width={340} height={232} src={'/googleplay.jpg'} alt="mobile" className="w-32" />
            <Image width={394} height={128} src={'/appstore.png'} alt="mobile" className="w-32" />
          </div>
        </div>
        <div className="relative bg-[url('/mobile.png')] bg-center bg-no-repeat bg-cover w-3/4 h-full">
          {/* <Image width={721} height={627} src={'/mobile.png'} alt="mobile" className="bg-contain" /> */}
          <WhiteButton onClick={()=>console.log("")} textStyle="absolute bottom-0 right-0 bg-white text-[#0B677E] text-[24px]"  spanStyle="text-[#FCBA2D] text-[24px]" text="IBank" span="Care"/>
        </div>
      </div>
    </div>
  );
}


