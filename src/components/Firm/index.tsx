import React from "react";
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Firmsectionimage from '../../../public/assets/images/firmsection.png';
import { Row } from 'react-bootstrap';
export default function FirmSection() {

    return (

<>
<div className="our-promise md:py-[50px] py-[30px]  border-t-[1px] border-[#222f3b] md:mt-[50px] mt-[30px] ">
<div className="container">
<h2 className="md:text-[50px] leading-[40px] text-[30px] text-[#2a4661] md:leading-[72px] md:mb-[20px] mb-[10px] font-bold">Our Promise</h2>
<h1 className="md:text-[110px] text-[50px] leading-[60px]  text-[#2a4661] font-bold md:leading-[119px]">Unwavering support to empower our clients.</h1>
</div>

</div>
<div className="mb-[30px] md:mb-[50px] border-t-[1px] border-[#222f3b] "></div>
<div className="firmsection relative md:py-[118px] py-[30px]">
<Image
      alt=""
      src={Firmsectionimage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
     <div className="container relative">
<h2 className="md:text-[50px] text-[#2a4661] md:leading-[72px] text-[30px] leading-[40px] mb-[10px] md:mb-[20px] font-bold">
When You Need A Hand
</h2>
<p className="max-w-[580px] md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[33px]">
Your success is our priority. We are dedicated to delivering results, providing tailored guidance, and fostering a long-lasting relationship built on trust.
</p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661]  md:leading-[33px] md:mt-[50px] mt-[30px]">Find out more…</p>
<a href="#" className="rounded-full md:h-[80px] md:w-[80px] h-[50px] w-[50px] text-center md:mt-[50px] mt-[30px]	items-center flex justify-content-center border-0 bg-[#fff] hover:bg-[#f9b400] text-color-[]">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>


</a>
     </div>
</div>
<div className="md:mt-[50px] mt-[30px] border-b-[1px] border-[#222f3b]"></div>
</>

    )


}