"use client"
import * as React from "react";
import FormInput from "../../ui/FormInput";
import PrimaryButton from "../../ui/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import WhiteButton from "../../ui/CustomButton";
import FormInputGroup from "../../ui/FormInputGroup";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Login',
//   description: 'A banking web application',
// }


export default function Page() {

  return (
    <div className="w-screen flex flex-row">
      <div className="flex items-center justify-center bg-white bold w-full lg:w-4/6">
        <div className="w-3/4 flex flex-col">
          <h2 className="text-[#034B5E] font-bold text-2xl my-3 mt-10">Getting started</h2>
          <form className="w-full h-full">
            <div className="w-full flex flex-col">
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
                <FormInput required id="cpassword" label="Confirm password" placeholder="Re-enter password" name="cpassword" type="password" />
              </FormInputGroup>
              {/* <Link href='#' className="text-[#edafee]">Forgot password</Link> */}
            </div>
            <PrimaryButton title="Sign up" onClick={() => console.log("Christian wahala")} />
          </form>
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center justify-center md:w-2/6 py-10 pl-5 bg-gradient fixed top-0 right-0 bottom-0">
        <div className="w-5/6">
          <p className="text-[30px] text-white leading-[49px]">
            <span className="text-[#f8ad15]">Our Members</span> are 
            <br />Around the World
          </p>
          <p className="text-[14px] text-white weight-[500] leading-[32px] font-medium">Over 10,000 Investor join us monthly</p>
          <div className="flex">
            <Image width={340} height={232} src={'/googleplay.jpg'} alt="mobile" className="w-32" />
            <Image width={394} height={128} src={'/appstore.png'} alt="mobile" className="w-32" />
          </div>
        </div>
        <div className="relative bg-[url('/country.svg')] bg-center bg-no-repeat bg-cover w-3/4 h-full">
          <WhiteButton onClick={() => console.log("")} textStyle="absolute bottom-0 right-0 bg-white text-[#0B677E] text-[24px]" spanStyle="text-[#FCBA2D] text-[24px]" text="IBank" span="Care" />
        </div>
      </div>
    </div>
  );
}


