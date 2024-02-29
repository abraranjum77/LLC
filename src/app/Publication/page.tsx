import React from "react";
import Image from 'next/image';
import Profileimage from '../../../public/assets/images/profile-image-1.png';
import ReadMoreArrow from '../../../public/assets/images/chevron-review.png';
import blogimage1 from '../../../public/assets/images/img-blog-01.png';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Quickcontact from '@/components/Quickcontact';
export default function Publication() {

    return (

<>
<Header />
<div className="container">
<h3 className="md:my-[50px]  my-[30px]  text-[26px] text-[#f9b400] leading-[32px] font-bold">Publication</h3>
<div className="publiction  md:py-[50px] pt-[0px] ">
<div className="container">
    <div className="row md:mb-[50px]  mb-[30px]">
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
<h3 className="text-[50px] mb-[20px] text-[#2a4661] leading-[60px] font-bold mt-[20px] md:mt-[0px]">Company Registration in the Republic of Cyprus.</h3>
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
<p className="md:text-[30px] text-[20px] text-[#2a4661] md:leading-[40px] leading-[30px] md:mt-[50px] mt-[30px] font-normal md:font-bold text-justify">The Republic of Cyprus is an attractive international financial center for both companies and entrepreneurs, who benefit from the incomparable advantages of the island, as a provider of high quality financial and legal services…</p>

</div>

</div>
<div className="row">
<div className="content-publiction col-12">
<p>The extremely beneficial tax and legislative regimes establish the foundations for progress and development, while at the same time constitute a motivation for foreign businesses to migrate to Cyprus, through the re-domiciliation of existing companies or through the establishment of a new company.

</p>
<p>By registering a company in Cyprus, the business will benefit from the advantages offered by the Cypriot legislative and taxation regime.</p>
<p>Registration of a Cypriot Company</p>
<p>The Cyprus Company Law Cap. 113, allows for the registration of a limited liability company with only one shareholder, director and secretary (single-member company).</p>
<p>The registration of a company requires:</p>
<p>Approval of the company’s proposed name.
Determination of the company’s activities. The Law gives the option not to indicate every activity of the company and gives the discretion to leave the objects of the company as broad as legally possible.
Authorized and issued share capital. The company may be registered with any amount as its share capital. The issued share capital of the company, issued to each of its shareholders, is payable by the end of the financial year of the company’s incorporation.
Board of Directors. The board of directors may consist of only one person, if the company is a single-member company, or of more than one persons. In order for the company to benefit from the Cypriot taxation system, the management and control has to be exercised from Cyprus.
The registration procedure takes approximately one week.</p>
<p>Benefits of a Cypriot Company</p>
<p>A Cypriot company is charged with 12,5% tax on its net profit.
In case that the company will distribute dividends, these dividends will be charged, for Cypriot citizens and persons who live in Cyprus for over 5 years, with 15% tax and for shareholders who are not Cypriot citizens with 0% tax.
No Capital Gains Tax.
The value added tax in Cyprus is 19% and for intra-community trading is 0%.
The company will receive a value added tax and taxation identification number.
A company may start doing business, right after its registration.

</p>
<p>Obligations of a Cypriot Company</p>
<p>Submission of its VAT declaration every three months and its VIES declaration (for intra-community trading) every month, as well as payment of the respective amounts.
Submission of its audited accounts for every financial year and payment of any taxation chargeable.
Submission of its annual financial statements accompanied by the audited accounts to the Registrar of Companies.
Payment of EUR 350, each year, as a special contribution to the Registrar of Companies.</p>
<p>Bank Account Opening</p>
<p>A company may hold a bank account in any currency and the opening of such an account requires two working days maximum. The account may be opened without the presence of the interested parties in Cyprus.</p>
<p>Transfer of the Company’s Shares by Sale or Donation</p>
<p>Except from companies which possess immovable properties in the Republic of Cyprus, all the other transfers can be done without any taxation.</p>
</div>
</div>
</div>
  </div>
</div>
<div className="border-t-[1px] border-[#222f3b] pt-[50px]">
<div className="container">
<div className="max-w-[600px] ">
<h3 className="text-[30px] text-[#2a4661] leading-[40px] font-bold mb-[50px]">We are able to assist you in registering a company in the Republic of Cyprus.
</h3>
<h3 className="text-[30px] text-[#2a4661] leading-[40px] font-bold ">
Contact us now for a free consultation.</h3>
</div>
</div>

</div>
<Quickcontact/>
<Footer />
</>

    )


}