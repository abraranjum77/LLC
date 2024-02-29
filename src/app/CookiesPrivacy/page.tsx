import React from "react";
import Image from "next/image";
import ContactInfo from '../../components/ContactInfo/index';
import Header from "../../components/Header/index";
import Footer from '../../components/Footer/index';

export default function CookiesPrivacy() {

    return (

<>
   <Header />

   <div className="container">
     <h3 className="md:mt-[50px] mt-[30px] text-[26px] text-[#f9b400] leading-[32px] font-bold">Privacy & Cookie Policy</h3>
     <h1 className="md:my-[50px] my-[30px] md:text-[50px] text-[30px] text-[#2a4661] md:leading-[60px] leading-[40px] font-bold">For Your Attention.</h1>

   </div>
   <div className="border-t-[1px] border-[#222f3b]"></div>
   <div className="container md:mt-[50px] mt-[30px] cookies">
<p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]">ANDREAS MENELAOU LLC Privacy & Cookie Policy</p>
   <p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]"> 1. Introduction <br/>
Welcome to the ANDREAS MENELAOU LLC website (the "Website"). This Privacy & Cookie Policy outlines how we collect, use, and protect your personal information in compliance with the General Data Protection Regulation (GDPR).</p>
<p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]"> 2. Information We Collect <br/>
a. Personal Information: We may collect personal information such as your name, contact details, and any other information you provide when you contact us or use our services.
b. Automatically Collected Information: We may collect information about your use of the Website, such as your IP address, device type, and browsing history.</p>
<p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]"> 3. Use of Information <br/>
a. We use your personal information to provide legal services, respond to inquiries, and improve the user experience on our Website.
<br/>b. We may use cookies and similar technologies to enhance your browsing experience.
</p>
   <p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]">4. Cookies <br/>
   a. What are Cookies: Cookies are small files stored on your device that track and store information about your interactions with the Website.
<br/> b. Types of Cookies: We use session cookies for temporary data storage and persistent cookies for preferences.
<br/>c. Third-Party Cookies: Some third-party services we use may also place cookies on your device.
   </p>
   <p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]">5. Information Sharing <br/>
   a. We do not sell, trade, or rent your personal information to third parties.
<br/> b. We may share information with third-party service providers to help us improve our services and better serve you.

   </p>
   <p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]">6. Security <br/>
   a. We employ industry-standard security measures to protect your personal information.

   </p>
   
   <p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]">7. Your Choices <br/>
   a. You can control and disable cookies through your browser settings. <br/>
b. You may opt-out of receiving promotional communications from us.

   </p>
   <p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]">8. GDPR Compliance <br/>
   a. ANDREAS MENELAOU LLC is committed to GDPR compliance in the processing of personal data.

   </p>
   <p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]">9. Changes to this Policy <br/>a. We reserve the right to update or modify this Privacy & Cookie Policy at any time.

   </p>
   <p className="text-[26px] text-[#2a4661] leading-[32px] font-normal text-justify mb-[20px]">10. Contact Us <br/>
   If you have any questions about this Privacy & Cookie Policy, please contact us at info@menelaou-law.com 
By using our Website, you agree to the terms outlined in this Privacy & Cookie Policy.
   </p>
   </div>
   <div className="border-t-[1px] border-[#222f3b] md:mt-[50px] mt-[30px]"></div>
   <ContactInfo />
   <Footer />
</>

    )


}