"use client"
import { setCookie, hasCookie } from 'cookies-next';
import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
export default function HomeCookies() {
const [showConsent, setShowConsent] = useState(false);

useEffect(() => {
// If no consent cookie is present, show the consent popup
if (!hasCookie('consent')) {
setShowConsent(true);
}
}, []);

const acceptConsent = () => {
    // When user accepts consent, hide the popup and set a consent cookie
    setShowConsent(false);
    setCookie('consent', 'true');
  
    // Trigger GTM script load
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('updateGTMConsent'));
    }
  };
  const declineConsent = () => {
    // When user declines the consent, simply hide the popup
    setShowConsent(false);
};

  

if (!showConsent) {
return null;
}

return (
    <div className="home-cookies py-[37px]">
    <div className="container">
    <div className="row items-center">
     <div className="col-md-7">
    <p className="text-[#fff] text-[16px] leading-[18px] font-normal">By clicking “Accept All Cookies,” you agree that we can store cookies on your device. We use cookies to improve your Website experience, provide additional security, and remember you when you return to the Website. <Link href="/CookiesPrivacy" className="underline">Privacy Policy</Link></p> 
        </div>   
    <div className="col-md-2 md:mt-[0px] mt-[10px]">
    <button onClick={declineConsent} className="border-[1px] border-[#fff] text-[16px] leading-[38px]  inline-block px-[20px] text-[#fff] font-normal rounded-[40px]">Reject All Cookies</button>
    </div>
    <div className="col-md-2 md:mt-[0px] mt-[10px]">
    <button onClick={acceptConsent} className="border-[1px] border-[#fff] text-[16px] leading-[38px]  inline-block px-[20px] text-[#fff] font-normal rounded-[40px]">Accept All Cookies </button>
    </div>
    </div>
    </div>
    </div>
);
};

