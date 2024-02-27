import React from "react";
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Firmheader from '../../../public/assets/images/firm-header.png';
import Missionimage from '../../../public/assets/images/img-mission.png';
import Approachimage from '../../../public/assets/images/img-approach.png';
import Valuesimage from '../../../public/assets/images/img-values.png';
import Conclusionimage from '../../../public/assets/images/img-conclusion.png';
import Header from "@/components/Header/index";
import Footer from '@/components/Footer';
import Quickcontact from '@/components/Quickcontact';

export default function Firm() {

    return (
   <>
   <Header />
  <div className="container relative" >
    <h3 className="md:my-[50px] my-[30px]  text-[26px] text-[#f9b400] leading-[32px] font-bold">The Firm</h3>
  <Image
      src={Firmheader}
      alt=""
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    />
  <h1 className="md:my-[50px] my-[30px] text-[30px] leading-[40px] md:text-[50px] text-[#2a4661] md:leading-[60px] font-bold">Legal Excellence, Personalized Solutions, Lasting Results.</h1>
  
  </div>
  <div className="border-t-[1px] border-[#222f3b]"></div>
  <div className="container md:mb-[50px] mb-[30px]">
  <h3 className="md:mt-[50px] mt-[30px] mb-[10px] text-[26px] text-[#f9b400] leading-[32px] font-bold">The Firm</h3>
  <h5 className="text-[20px] md:mb-[20px] mb-[10px] text-[#1d1d1d] leading-[26px] font-light italic">Empowering Success, Building Trust.</h5>
 <p className="md:text-[26px] text-[20px] text-[#2a4661] md:leading-[32px] leading-[26px] font-normal text-justify">ANDREAS MENELAOU LLC was founded by Andreas Menelaou, an accomplished legal professional with a vision of creating a law firm that goes beyond traditional legal services. Our journey began with the aim of redefining the client-lawyer relationship, focusing not only on legal expertise but also on building genuine connections with those we serve.</p>
  </div>
  <div className="mission-section">
 <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px]">
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
</div>
<div className="container md:my-[50px] my-[30px]">
    <div className="row"><div className="col-md-6 col-12"><Image
      src={Missionimage}
      alt=""
      quality={100}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    /></div>
<div className="col-md-6 col">
<h3 className="text-[26px] mb-[10px] text-[#f9b400] leading-[32px] font-bold mt-[20px] md:mt-[0px]">Our Mission</h3>
<h5 className="text-[20px] mb-[10px] md:mb-[20px] text-[#1d1d1d] leading-[26px] font-light italic">Understanding, Strategy and Success.</h5>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">Our mission is simple yet profound: to empower our clients with top-notch legal solutions and unwavering support. We believe in understanding the unique challenges our clients face and offering personalized, strategic advice to help them navigate complex legal matters successfully.</p>
</div>
</div>

</div>
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px]">
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
</div>
 </div>
 <div className="aproach-section">

<div className="container md:my-[50px] my-[30px]">
    <div className="row">

    <div className="col-md-6 col-12 order-md-2"><Image
      src={Approachimage}
      alt=""
      quality={100}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    /></div>   
<div className="col-md-6 col">
<h3 className="text-[26px] mb-[10px] text-[#f9b400] leading-[32px] font-bold mt-[20px] md:mt-[0px]">Our Approach</h3>
<h5 className="text-[20px] mb-[10px] md:mb-[20px] text-[#1d1d1d] leading-[26px] font-light italic">Collaboration, Compassion and Understanding.</h5>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">What sets us apart is our client-centric approach. We take the time to listen, comprehend, and collaborate with our clients, ensuring that their concerns are heard and their goals are met. Our team of experienced attorneys combines deep legal knowledge with a compassionate understanding of our clients' needs, providing them with the confidence to face even the most challenging legal situations.</p>
</div>

</div>

</div>
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px]">
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
</div>
 </div>
 <div className="value-section">
 
<div className="container md:my-[50px] my-[30px]">
    <div className="row"><div className="col-md-6 col-12"><Image
      src={Valuesimage}
      alt=""
      quality={100}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    /></div>
<div className="col-md-6 col">
<h3 className="text-[26px] mb-[10px] text-[#f9b400] leading-[32px] font-bold mt-[20px] md:mt-[0px]">Our Values</h3>
<h5 className="text-[20px] mb-[10px] md:mb-[20px] text-[#1d1d1d] leading-[26px] font-light italic">Integrity, Expertise and Client Focus.</h5>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justifytext-[26px] mb-[20px] text-[#2a4661] leading-[32px] font-normal text-justify">Integrity: We uphold the highest ethical standards, ensuring transparency, honesty, and fairness in all our interactions. </p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">
Expertise: Our team comprises skilled professionals with diverse legal backgrounds, offering comprehensive solutions backed by years of experience. </p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">
Client Focus: Your success is our priority. We are dedicated to delivering results, providing tailored guidance, and fostering long-lasting relationships built on trust.</p>
</div>
</div>

</div>
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px]">
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
</div>
 </div>
 <div className="aproach-section">

<div className="container md:my-[50px] my-[30px]">
    <div className="row">

    <div className="col-md-6 col-12 order-md-2"><Image
      src={Conclusionimage}
      alt=""
      quality={100}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    /></div>   
<div className="col-md-6 col">
<h3 className="text-[26px] mb-[10px] mt-[20px] md:mt-[0px] text-[#f9b400] leading-[32px] font-bold mt-[20px] md:mt-[0px]">Conclusion</h3>
<h5 className="text-[20px] mb-[10px] md:mb-[20px] text-[#1d1d1d] leading-[26px] font-light italic">Partnerships, Trust and Justice.</h5>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">At ANDREAS MENELAOU LLC, we don’t just handle cases; we build partnerships. Whether you are an individual seeking legal advice or a business navigating complex regulations, we are here to support you every step of the way. Trust us to be your advocates, your advisors, and your allies in the pursuit of justice and success.</p>
</div>

</div>

</div>

 </div>
 <Quickcontact/>
 <Footer />
   </>
   
   
        )

}