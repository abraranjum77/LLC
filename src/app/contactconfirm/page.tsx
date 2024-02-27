import React from "react";
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Contactusimage from '../../../public/assets/images/contactus.png';
import ContactInfo from '@/components/ContactInfo';
import Header from "@/components/Header/index";
import Footer from '@/components/Footer';
import Quickcontact from '@/components/Quickcontact';

export default function ContactUs() {

    return (
   <>
   <Header />
  <div className="container relative md:mb-[50px] mb-[30px]" >
    <h3 className="md:my-[50px] my-[30px]  text-[26px] text-[#f9b400] leading-[32px] font-bold">Contact Us</h3>
  <div className="relative">
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
     <h1 className="success-message text-white text-[50px] leading-[60px] font-bold">Thank You For Contacting Us.
An Associate Will Contact You As Soon As Possible.</h1>
  </div>
  
 
  </div>
  



 <div className="border-t-[1px] border-[#222f3b]"></div>
 <ContactInfo />
 <Footer />
   </>
   
   
        )

}