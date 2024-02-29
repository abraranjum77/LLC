import React from "react";
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Expertiseimage from '../../../public/assets/images/Expertise.png';
import Litigation from '../../../public/assets/images/img-litigation.png';
import Immigration from '../../../public/assets/images/img-immigration.png';
import Corporateimage from '../../../public/assets/images/img-corporate.png';
import Realstateimage from '../../../public/assets/images/img-realestate.png';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Quickcontact from '@/components/Quickcontact';

export default function Expertise() {

    return (
   <>
   <Header />
  <div className="container relative" >
    <h3 className="md:my-[50px] my-[30px]  text-[26px] text-[#f9b400] leading-[32px] font-bold">Areas of Expertise</h3>
  <Image
      src={Expertiseimage}
      alt=""
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    />
  <h1 className="md:my-[50px] my-[30px] text-[30px] leading-[40px] md:text-[50px] text-[#2a4661] md:leading-[60px] font-bold">We combine in-depth legal and commercial knowledge with breadth of expertise and experience to give unparalleled advice to our clients.</h1>
  
  </div>
  <div className="border-t-[1px] border-[#222f3b]"></div>
  <div className="container md:my-[50px] my-[30px]">
  
 <h3 className="md:text-[30px] text-[26px] text-[#2a4661] md:leading-[40px] leading-[32px] font-bold text-justify">Corporate & Commercial • Immigration & Relocation • Litigation & Dispute Resolution • Real Estate.</h3>
  </div>
  <div className="mission-section">
 <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px]">
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
<div className="border-t-[1px] border-[#222f3b] md:block hidden"></div>
</div>
<div className="container md:my-[50px] my-[30px]">
    <div className="row"><div className="col-md-6 col-12 order-md-2">
        <Image
      src={Corporateimage}
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
<h3 className="text-[26px] mb-[10px] text-[#f9b400] leading-[32px] font-bold mt-[20px] md:mt-[0px]">Corporate & Commercial</h3>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">We give quality business advice which is commercially focused and personally delivered to you for your needs. We offer a comprehensive suite of services to help with your corporate strategy.

We specialize in crafting precise legal solutions, formulated for your specific business. From setting-up corporations, contract negotiations, mergers, and acquisitions to regulatory compliance and dispute resolution, our services cover the full spectrum of Corporate & Commercial law.
</p> <p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">
Whether you're a startup navigating legal complexities or an established corporation seeking strategic legal counsel, we provide the framework to help you succeed in your business endeavours.
</p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">
Beyond traditional legal advice, we serve as strategic business counsellors, collaborating with you to align legal decision making with your underlying business goals. Discover the difference with a legal partner deeply committed to your success.</p>
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

    <div className="col-md-6 col-12"><Image
      src={Immigration}
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
<h3 className="text-[26px] mb-[10px] text-[#f9b400] leading-[32px] font-bold mt-[20px] md:mt-[0px]">Immigration & Relocation</h3>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">
Embark on your seamless transition to Cyprus with us as your dedicated partner in immigration and relocation needs. Our specialized expertise in Cyprus immigration law ensures comprehensive support tailored to your personal situation; from visa applications to residence permits, we cover every aspect of the immigration process.
</p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justifytext-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]">
Whether you're an individual, family, or business, we guide you through the legal landscape, addressing factors like tax implications and cultural integration.
</p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justify">
We collaborate with you to develop a strategic relocation plan aligned with your goals. Whether you seek personal growth or business opportunities, our legal expertise lays the foundation for a successful transition.
</p>
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
    <div className="row"><div className="col-md-6 col-12 order-md-2"><Image
      src={Litigation}
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
<h3 className="text-[26px] mb-[10px] text-[#f9b400] leading-[32px] font-bold mt-[20px] md:mt-[0px]">Litigation & Dispute Resolution</h3>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justifytext-[26px] mb-[20px] text-[#2a4661] leading-[32px] font-normal text-justify">In the field of litigation, strategic advocacy and legal success is in our DNA. Our expert legal team is dedicated to providing robust representation for individuals and businesses facing legal disputes. </p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justifytext-[26px] mb-[20px] text-[#2a4661] leading-[32px] font-normal text-justify">
In every case, we employ a meticulous tactical strategy, leveraging our deep understanding of the legal terrain to craft effective arguments and build formidable cases. Whether you're dealing with civil, criminal, or commercial litigation we are committed to achieving the best outcome for you.
</p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justifytext-[26px]  text-[#2a4661] leading-[32px] font-normal text-justify">
From pre-trial negotiations to courtroom advocacy, we guide you through each step of the process, ensuring that your legal strategy is comprehensive and effective. Talk with us to become your dedicated partner and litigation advocate. </p>
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

    <div className="col-md-6 col-12"><Image
      src={Realstateimage}
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
<h3 className="text-[26px] mb-[10px] mt-[20px] md:mt-[0px] text-[#f9b400] leading-[32px] font-bold mt-[20px] md:mt-[0px]">Real Estate</h3>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justifytext-[26px] mb-[20px] text-[#2a4661] leading-[32px] font-normal text-justify">
Our legal knowledge and experience will allow you to commence your Real Estate journey with all the confidence and backup you need.
</p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justifytext-[26px] mb-[20px] text-[#2a4661] leading-[32px] font-normal text-justify">
In the dynamic world of real estate, strategic guidance plays a crucial role. We offer comprehensive assistance for individuals and businesses involved in property transactions. Leveraging our extensive experience and a vast network in Cyprus, we will guide you through buying, selling, leasing, or property development, ensuring a smooth and successful journey in the property landscape.
</p>
<p className="md:text-[26px] text-[20px] leading-[26px] text-[#2a4661] md:leading-[32px] font-normal text-justifytext-[26px]  text-[#2a4661] leading-[32px] font-normal text-justify">
From negotiating contracts to project management, we guarantee that your real estate ventures adhere to legal standards and financial security. Covering diverse areas such as residential and commercial transactions, landlord-tenant conflicts, and property development, ANDREAS MENELAOU LLC stands as your committed real estate partner. 
</p>
</div>

</div>

</div>

 </div>
 <Quickcontact/>
 <Footer />
   </>
   
   
        )

}