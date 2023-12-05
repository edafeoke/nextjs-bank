import * as React from "react";

export default function MyComponent() {
  return (
    <div className="">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col justify-center items-center w-full px-16 py-12 max-md:max-w-full max-md:px-5">
            <div className="flex w-[552px] max-w-full flex-col mt-28 mb-36 max-md:my-10">
              <div className="text-sky-900 text-3xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                Hi, Welcome Back Fellas!
              </div>
              <div className="text-neutral-400 text-sm font-medium self-stretch whitespace-nowrap mt-16 max-md:max-w-full max-md:mt-10">
                Email or username
              </div>
              <div className="text-stone-300 text-sm whitespace-nowrap self-stretch justify-center mt-5 pl-9 pr-16 py-7 rounded-2xl border-[1.3px] border-solid border-stone-300 border-opacity-50 items-start max-md:max-w-full max-md:px-5">
                Email or username
              </div>
              <div className="self-stretch flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="text-neutral-400 text-sm font-medium whitespace-nowrap">
                  Password
                </div>
                <div className="text-amber-500 text-sm font-medium whitespace-nowrap">
                  Forgot Password?
                </div>
              </div>
              <div className="self-stretch flex items-center justify-between gap-5 mt-4 px-8 py-6 rounded-2xl border-[1.3px] border-solid border-stone-300 border-opacity-50 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="text-stone-300 text-sm grow whitespace-nowrap my-auto">
                  Password
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a88cc9074fffed3d17a7be22c366435e7a06c6fc7fdc7bb7d8f48e1f426090d?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
              <div className="text-white text-base font-semibold whitespace-nowrap bg-amber-500 self-stretch justify-center items-center mt-10 px-16 py-6 rounded-2xl max-md:max-w-full max-md:px-5">
                Sign In
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="bg-neutral-400 bg-opacity-50 self-center w-[180px] shrink-0 h-px my-auto" />
                <div className="text-neutral-400 text-sm font-medium">
                  Or sign in with
                </div>
                <div className="bg-neutral-400 bg-opacity-50 self-center w-[180px] shrink-0 h-px my-auto" />
              </div>
              <div className="text-neutral-500 text-base font-semibold whitespace-nowrap self-stretch justify-center items-center mt-9 px-16 py-7 rounded-2xl border-[1.3px] border-solid border-stone-300 border-opacity-50 max-md:max-w-full max-md:px-5">
                Another Method
              </div>
              <div className="text-amber-500 text-sm font-medium self-center whitespace-nowrap mt-7">
                <span className="text-stone-300">
                  You dont Have an Account?{" "}
                </span>
                <span className="text-amber-500">Sign Up</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-center mt-20 max-md:max-w-full max-md:mt-10">
            <div className="flex w-[427px] max-w-full flex-col items-stretch px-5">
              <div className="text-amber-500 text-4xl font-semibold leading-[49px] tracking-wide self-end">
                <span className="text-white">
                  Getting Easier
                  <br />
                  Pay for Any Transfer
                  <br />
                </span>
                <span className="text-amber-500">with IbankCare</span>
              </div>
              <div className="text-white text-sm font-medium leading-8 tracking-wide mt-9 max-md:max-w-full">
                Install Ibankcare application right now!
              </div>
              <div className="flex items-stretch justify-between gap-5 mt-6 self-end">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aef197961b15ffb2f1a5751210579b8a9bcd765b63144f926c52a0af1c0b4a60?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&"
                  className="aspect-[3.46] object-contain object-center w-[180px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/490ca8607dd422558025720ccb5a093e2668a6be0ead447fcc1d1a4b06414665?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&"
                  className="aspect-[3.46] object-contain object-center w-[180px] overflow-hidden z-[1] shrink-0 max-w-full"
                />
              </div>
            </div>
            <div className="flex-col overflow-hidden self-stretch relative flex min-h-[626px] w-full mt-16 pl-20 pr-11 pb-10 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/84395363faf9fa02a2ccd5a3e1daafe27500eff2359fa704fb81136b28ca45b2?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/84395363faf9fa02a2ccd5a3e1daafe27500eff2359fa704fb81136b28ca45b2?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84395363faf9fa02a2ccd5a3e1daafe27500eff2359fa704fb81136b28ca45b2?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/84395363faf9fa02a2ccd5a3e1daafe27500eff2359fa704fb81136b28ca45b2?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/84395363faf9fa02a2ccd5a3e1daafe27500eff2359fa704fb81136b28ca45b2?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84395363faf9fa02a2ccd5a3e1daafe27500eff2359fa704fb81136b28ca45b2?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/84395363faf9fa02a2ccd5a3e1daafe27500eff2359fa704fb81136b28ca45b2?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/84395363faf9fa02a2ccd5a3e1daafe27500eff2359fa704fb81136b28ca45b2?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4b782d19037529766ae43dc545e4a438b319389c61f2f4e85d58746aaa087a?apiKey=9b3094d94ceb4cd1ac6e36ed2baa385e&"
                className="aspect-[2.65] object-contain object-center w-[69px] overflow-hidden z-[1] max-w-full ml-12 -mt-1.5 max-md:ml-2.5"
              />
              <div className="relative bg-white flex items-stretch gap-1 mt-[493px] pl-9 pr-14 py-7 rounded-[31px] self-end max-md:mt-10 max-md:px-5">
                <div className="text-sky-800 text-2xl font-semibold whitespace-nowrap">
                  IBank
                </div>
                <div className="text-amber-400 text-2xl font-semibold whitespace-nowrap self-start">
                  Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


