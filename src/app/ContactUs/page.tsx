import React from "react";
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Contactusimage from '../../../public/assets/images/contactus.png';
import ContactInfo from '../../components/ContactInfo/index';
import Header from "../../components/Header/index";
import Footer from '../../components/Footer';
import Quickcontact from '../../components/Quickcontact';

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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0218438075794!2d33.084200374195916!3d34.70462898300463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e0cb5107a9cafb%3A0xb16e5f29c1102d35!2sChristaki%20Kranou%2050%2C%20Germasogeia%2C%20Cyprus!5e0!3m2!1sen!2s!4v1708284757256!5m2!1sen!2s" width="100%" height="580"  allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

</div>

 </div>
 <div className="border-t-[1px] border-[#222f3b]"></div>
 <ContactInfo />
 <Footer />
   </>
   
   
        )

}