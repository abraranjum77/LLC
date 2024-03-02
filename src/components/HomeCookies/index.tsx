import React from "react";
import Image from 'next/image'; 
import Link from 'next/link'
export default function HomeCookies() {

    return (

<>
<div className="home-cookies py-[37px]">
<div className="container">
<div className="row items-center">
 <div className="col-md-7">
<p className="text-[#fff] text-[16px] leading-[18px] font-normal">By clicking “Accept All Cookies,” you agree that we can store cookies on your device. We use cookies to improve your Website experience, provide additional security, and remember you when you return to the Website. <Link href="/CookiesPrivacy" className="underline">Privacy Policy</Link></p> 
    </div>   
<div className="col-md-2 md:mt-[0px] mt-[10px]">
<a href="#" className="border-[1px] border-[#fff] text-[16px] leading-[38px]  inline-block px-[20px] text-[#fff] font-normal rounded-[40px]">Reject All Cookies</a>
</div>
<div className="col-md-2 md:mt-[0px] mt-[10px]">
<a href="#" className="border-[1px] border-[#fff] text-[16px] leading-[38px]  inline-block px-[20px] text-[#fff] font-normal rounded-[40px]">Accept All Cookies</a>
</div>
</div>
</div>
</div>
</>

    )
}