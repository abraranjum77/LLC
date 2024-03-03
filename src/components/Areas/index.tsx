import React from "react";
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import Expertisesectionimage from '../../../public/assets/images/img-expertise.png';
import { Row } from 'react-bootstrap';
export default function ExpertiseSection() {

    return (

<>
<div className="our-promise md:py-[50px] py-[30px]  border-t-[1px] border-[#222f3b] mt-[30px] md:mt-[50px]">
<div className="container">
<h2 className="text-[30px] leading-[40px] md:text-[50px] text-[#2a4661] md:leading-[72px] md:mb-[20px] mb-[10px] font-bold">What We Do</h2>
<h1 className="text-[50px] leading-[60px]   md:text-[110px] text-[#2a4661] font-bold md:leading-[119px]">Providing legal council for the most intricate areas of law.</h1>
</div>

</div>
<div className="md:mb-[50px] mb-[30px]  border-t-[1px] border-[#222f3b] "></div>
<div className="firmsection relative md:pb-[128px] pb-[30px] pt-[30px] md:pt-[50px]">
<Image
      alt=""
      src={Expertisesectionimage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
     <div className="container relative">
<h2 className="text-[30px] leading-[40px] md:text-[50px] text-[#fff] md:leading-[72px] md:mb-[20px] mb-[10px] font-bold">
Areas of Expertise
</h2>
<ul className=" text-[#fff] font-medium">
   <li><Link  href="/Expertise#Corporate-and-Commercial" className="underline text-[21px]  md:text-[40px] block"> Corporate & Commercial</Link></li> 
   <li ><Link  href="/Expertise#Immigration-and-Relocation" className="underline  text-[21px]  md:text-[40px] block"> Migration & Relocation</Link></li> 
   <li ><Link  href="/Expertise#Litigation-and-Dispute-Resolution" className="underline  text-[21px]  md:text-[40px] block"> Litigation & Dispute Resolution</Link ></li> 
   <li ><Link  href="/Expertise#Real-Estate" className="underline text-[21px]  md:text-[40px] block"> Real Estate</Link ></li> 
</ul>


<Link href="/Expertise" className="rounded-full md:h-[80px] md:w-[80px] h-[50px] w-[50px] text-center nd:mt-[50px] mt-[30px]	items-center flex justify-content-center border-0 bg-[#fff] hover:bg-[#f9b400] text-color-[]">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>


</Link>
     </div>
</div>
<div className="md:mt-[50px] mt-[30px]"></div>
</>

    )


}