import React from "react";
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Publictionsectionimage from '../../../public/assets/images/img-publication.png';
import { Row } from 'react-bootstrap';
export default function PublictionSection() {

    return (

<>

<div className="md:mb-[50px] mb-[30px] border-t-[1px] border-[#222f3b] "></div>
<div className="firmsection relative py-[118px]  py-[30px]">
<Image
      alt=""
      src={Publictionsectionimage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
     <div className="container relative">
<h2 className="md:text-[50px] text-[#fff] md:leading-[72px] text-[30px] leading-[40px] mb-[10px] md:mb-[20px] font-bold">
Publications
</h2>
<p className="max-w-[580px] md:text-[26px] text-[20px] leading-[26px] text-[#fff] md:leading-[33px]">
Whether you’re looking for the latest tips or information on specific topics in law that may concern you. Find quick interesting content that’s perfect for a short read.
</p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#fff] md:leading-[33px] md:mt-[50px] mt-[30px]">Find out more…</p>
<a href="#" className="rounded-full md:h-[80px] md:w-[80px] h-[50px] w-[50px]  text-center mt-[30px] md:mt-[50px]	items-center flex justify-content-center border-0 bg-[#fff] hover:bg-[#f9b400] text-color-[]">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>


</a>
     </div>
</div>

</>

    )


}