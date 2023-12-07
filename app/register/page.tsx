'use client'
import * as React from "react";
import FormInput from "../ui/FormInput";
import PrimaryButton from "../ui/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import WhiteButton from "../ui/CustomButton";
import FormInputGroup from "../ui/FormInputGroup";

export default function Page() {

  return (
    <div className="w-screen h-screen [background:linear-gradient(180deg,rgb(1.31,84.41,105.19)_0%,rgb(41,129,149)_96.88%)] flex flex-col md:flex-row">
      <div className="flex items-center justify-center bg-white bold w-full h-screen md:w-4/6">
        <div className="w-3/4 h-3/4 flex flex-col">
          <h2 className="text-[#034B5E] font-bold text-2xl my-3">Getting started</h2>
          <form className="w-full h-full">
            <div className="h-3/4 w-full flex flex-col  overflow-y-scroll">
              <FormInput id="fullname" required type="text" name="fullname" error="" label="Full Name" placeholder="Enter your full name" />
              <FormInput id="email" required type="email" name="email" error="" label="Email address" placeholder="Enter your email address" />
              <FormInputGroup>
                <FormInput id="dob" required type="date" name="dob" error="" label="Date of birth" placeholder="" />
                <FormInput id="phone" required type="phone" name="phone" error="" label="Phone number" placeholder="Enter your phone number" />
              </FormInputGroup>
              <FormInputGroup>
                <FormInput id="city" required type="text" name="city" error="" label="City" placeholder="Enter your current city" />
                <FormInput id="state" required type="state" name="state" error="" label="State" placeholder="Enter your current state" />
              </FormInputGroup>
              <FormInput id="country" required type="text" name="country" error="" label="Country" placeholder="Enter your current country" />
              <FormInputGroup>
                <FormInput required id="password" label="Password" placeholder="Enter password" name="password" type="password" />
                <FormInput required id="cpassword" label="Confirm password" placeholder="Re-enter password" name="cpassword" type="cpassword" />
              </FormInputGroup>
              <Link href='#' className="text-[#edafeed]">Forgot password</Link>
            </div>
            <PrimaryButton title="Sign in" onClick={() => console.log("Christian wahala")} />
          </form>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center h-full py-10 pl-10 [background:linear-gradient(180deg,rgb(1.31,84.41,105.19)_0%,rgb(41,129,149)_96.88%)]">
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
          <WhiteButton onClick={() => console.log("")} textStyle="absolute bottom-0 right-0 bg-white text-[#0B677E] text-[24px]" spanStyle="text-[#FCBA2D] text-[24px]" text="IBank" span="Care" />
        </div>
      </div>
    </div>
  );
}


