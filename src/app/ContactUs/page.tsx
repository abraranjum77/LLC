import React from "react";
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Contactusimage from '../../../public/assets/images/contactus.png';
import ContactInfo from '@/components/ContactInfo';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Quickcontact from '@/components/Quickcontact';
export default function ContactUs() {

    return (
   <>
   <Header />
  <div className="container relative" >
    <h3 className="md:my-[50px] my-[30px]  text-[26px] text-[#f9b400] leading-[32px] font-bold">Contact Us</h3>
  <Image
      src={Contactusimage}
      alt=""
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    />
  
  </div>
  


 <Quickcontact/>
 <div className="border-t-[1px] border-[#222f3b]"></div>
 <div className="container md:py-[50px] py-[30px]">
<div className="row">
    <div className="col-md-6">
<h1 className="md:text-[110px] text-[30px] text-[#2a4661] md:leading-[120px] leading-[30px] md:mb-[0px] mb-[30px]  font-bold">Always Here For You.</h1>

    </div>
    <div className="col-md-6">
   
    </div>

</div>

 </div>
 <div className="border-t-[1px] border-[#222f3b]"></div>
 <ContactInfo />
 <Footer />
   </>
   
   
        )

}