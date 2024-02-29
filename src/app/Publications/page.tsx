import React from "react";
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Publicationimage from '../../../public/assets/images/img-publications.png';
import Profileimage from '../../../public/assets/images/profile-image-1.png';
import ReadMoreArrow from '../../../public/assets/images/chevron-review.png';
import blogimage1 from '../../../public/assets/images/img-blog-01.png';
import blogimage2 from '../../../public/assets/images/img-blog-02.png';
import blogimage3 from '../../../public/assets/images/img-blog-03.png';
import blogimage4 from '../../../public/assets/images/img-blog-04.png';
import Conclusionimage from '../../../public/assets/images/img-conclusion.png';
import Header from "../../components/Header/index";
import Footer from '../../components/Footer';
import Quickcontact from '../../components/Quickcontact';

export default function Publications() {

    return (
   <>
   <Header />
  <div className="container relative" >
    <h3 className="md:my-[50px] my-[30px]  text-[26px] text-[#f9b400] leading-[32px] font-bold">Publications</h3>
  <Image
      src={Publicationimage}
      alt=""
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    />
  <h1 className="md:my-[50px] my-[30px] text-[30px] leading-[40px] md:text-[50px] text-[#2a4661] md:leading-[60px] font-bold">Latest tips, advice and information on legal topics.</h1>
  
  </div>
  <div className="publictions border-t-[1px] border-[#222f3b] md:py-[50px] py-[30px]">
<div className="container">
    <div className="row">
<div className="col-md-6">
<Image
      src={blogimage1}
      alt=""
      quality={100}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    />
</div>
<div className="col-md-6">
<h3 className="text-[30px] mb-[20px] text-[#2a4661] leading-[40px] font-bold mt-[20px] md:mt-[0px]">Company Registration in the Republic of Cyprus.</h3>
<div className="author-info border-y-[1px] border-[#222f3b] py-[20px] md:flex items-center">
<div className="author-image me-[20px]"> <Image src={Profileimage}  alt="" width={80} height={80}/></div>
<div className="publication-date me-[10px]">
    <span className="text-[26px]  text-[#f9b400] leading-[32px] font-bold">Stelios Martinez

</span></div>
<div className="publication-share text-[#2a4661]  flex items-center">
<span className="text-[26px]  text-[#2a4661] leading-[32px] font-normal me-[12px]">4 April</span>
<span className="opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
</span>
</div>

</div>
<p className="md:text-[26px] text-[20px] text-[#2a4661] md:leading-[32px] leading-[26px] mt-[5px] font-normal text-justify">The Republic of Cyprus is an attractive international financial center for both companies and entrepreneurs, who benefit from the incomparable advantages of the island, as a provider of high quality financial and legal services…</p>
<a href="#" className="md:text-[26px] text-[20px] text-[#2a4661] md:leading-[32px] leading-[26px] mt-[20px] md:mt-[50px]  font-normal flex items-center text-justify underline ">Read More... <span className="ms-[9px]"><Image src={ReadMoreArrow} width={10} height={8} alt=""/></span></a>
</div>
</div>
</div>
  </div>
  <div className="publictions border-t-[1px] border-[#222f3b] md:py-[50px] py-[30px]">
<div className="container">
    <div className="row">
<div className="col-md-6 order-md-2">
<Image
      src={blogimage2}
      alt=""
      quality={100}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={290}
      height={290}
    />
</div>
<div className="col-md-6">
<h3 className="text-[30px] mb-[20px] text-[#2a4661] leading-[40px] font-bold mt-[20px] md:mt-[0px]">Do you have Cypriot origins? You might be eligible to acquire Cypriot citizenship?</h3>
<div className="author-info border-y-[1px] border-[#222f3b] py-[20px] md:flex items-center">
<div className="author-image me-[20px]"> <Image src={Profileimage}  alt="" width={80} height={80}/></div>
<div className="publication-date me-[10px]">
    <span className="text-[26px]  text-[#f9b400] leading-[32px] font-bold">Stelios Martinez

</span></div>
<div className="publication-share text-[#2a4661]  flex items-center">
<span className="text-[26px]  text-[#2a4661] leading-[32px] font-normal me-[12px]">4 April</span>
<span className="opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
</span>
</div>

</div>
<p className="md:text-[26px] text-[20px] text-[#2a4661] md:leading-[32px] leading-[26px] mt-[5px] font-normal text-justify">The Visitor Residence Permit is a temporary residence permit in the Republic of Cyprus, which is given to non-EU citizens who wish to stay in the island for more than 3 months, without employment rights. Only third country…</p>
<a href="#" className="md:text-[26px] text-[20px] text-[#2a4661] md:leading-[32px] leading-[26px] mt-[20px] md:mt-[50px]  font-normal flex items-center text-justify underline  ">Read More... <span className="ms-[9px]"><Image src={ReadMoreArrow} width={10} height={8} alt=""/></span></a>
</div>
</div>
</div>
  </div>
  <div className="publictions border-t-[1px] border-[#222f3b] md:py-[50px] py-[30px]">
<div className="container">
    <div className="row">
<div className="col-md-6">
<Image
      src={blogimage3}
      alt=""
      quality={100}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={290}
      height={290}
    />
</div>
<div className="col-md-6">
<h3 className="text-[30px] mb-[20px] text-[#2a4661] leading-[40px] font-bold mt-[20px] md:mt-[0px]">Visitor Residence Permit in Cyprus | Pink Slip.

</h3>
<div className="author-info border-y-[1px] border-[#222f3b] py-[20px] md:flex items-center">
<div className="author-image me-[20px]"> <Image src={Profileimage}  alt="" width={80} height={80}/></div>
<div className="publication-date me-[10px]">
    <span className="text-[26px]  text-[#f9b400] leading-[32px] font-bold">Stelios Martinez

</span></div>
<div className="publication-share text-[#2a4661]  flex items-center">
<span className="text-[26px]  text-[#2a4661] leading-[32px] font-normal me-[12px]">4 April</span>
<span className="opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
</span>
</div>

</div>
<p className="md:text-[26px] text-[20px] text-[#2a4661] md:leading-[32px] leading-[26px] mt-[5px] font-normal text-justify">The Visitor Residence Permit is a temporary residence permit in the Republic of Cyprus, which is given to non-EU citizens who wish to stay in the island for more than 3 months, without employment rights. Only third country…</p>
<a href="#" className="md:text-[26px] text-[20px] text-[#2a4661] md:leading-[32px] leading-[26px] mt-[20px] md:mt-[50px]  font-normal flex items-center text-justify underline ">Read More... <span className="ms-[9px]"><Image src={ReadMoreArrow} width={10} height={8} alt=""/></span></a>
</div>
</div>
</div>
  </div>
  <div className="publictions border-t-[1px] border-[#222f3b] pt-[50px]">
<div className="container">
    <div className="row">
<div className="col-md-6 order-md-2">
<Image
      src={blogimage4}
      alt=""
      quality={100}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={290}
      height={290}
    />
</div>
<div className="col-md-6">
<h3 className="text-[30px] mb-[20px] text-[#2a4661] leading-[40px] font-bold mt-[20px] md:mt-[0px]">Cyprus Tax Residency and Non-Domicile Rules for Individuals.</h3>
<div className="author-info border-y-[1px] border-[#222f3b] py-[20px] md:flex items-center">
<div className="author-image me-[20px]"> <Image src={Profileimage}  alt="" width={80} height={80}/></div>
<div className="publication-date me-[10px]">
    <span className="text-[26px]  text-[#f9b400] leading-[32px] font-bold">Stelios Martinez

</span></div>
<div className="publication-share text-[#2a4661]  flex items-center">
<span className="text-[26px]  text-[#2a4661] leading-[32px] font-normal me-[12px]">4 April</span>
<span className="opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
</span>
</div>

</div>
<p className="md:text-[26px] text-[20px] text-[#2a4661] md:leading-[32px] leading-[26px] mt-[5px] font-normal text-justify">Tax Residency Rules According to the Cyprus Income Tax Law, an individual who spends more than 183 days in the Republic of Cyprus during the tax year is considered to be a Cyprus Tax resident. In July 2017 the…</p>
<a href="#" className="md:text-[26px] text-[20px] text-[#2a4661] md:leading-[32px] leading-[26px] mt-[20px] md:mt-[50px]  font-normal flex items-center text-justify underline  ">Read More... <span className="ms-[9px]"><Image src={ReadMoreArrow} width={10} height={8} alt=""/></span></a>
</div>
</div>
</div>
  </div>
 <Quickcontact/>
 <Footer />
   </>
   
   
        )

}