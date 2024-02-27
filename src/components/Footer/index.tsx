import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Linkedin from '../../../public/assets/images/btn-linkedin.png';
import Facebook from '../../../public/assets/images/btn-facebook.png';
import Instagram from '../../../public/assets/images/btn-instagram.png';
import { Container } from 'react-bootstrap';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (

<>
<footer className="py-[20px] border-t-[1px] border-[#243c5a]">
<Container className="p-0">
  <div className="footer d-md-flex items-center justify-content-between">
  <div className="social-media-links order-2">
<div className="">
<ul className="flex justify-content-between space-x-[10px]">
<li><a href="#"><Image src={Linkedin}  alt="Linkedin" width={20} height={20}/></a></li>
<li><a href="#"><Image src={Facebook}  alt="Facebook" width={20} height={20}/></a></li>
<li><a href="#"><Image src={Instagram}  alt="Instagram" width={20} height={20}/></a></li>
</ul>
</div>
    </div>
    <div className="copy-right order-1">
        <p className="text-[18px] text-[#222f3b] leading-5 font-light">  © Andreas Menelaou {currentYear} | <Link href="/CookiesPrivacy">Privacy & Cookie Policy</Link> | <Link href="/Termofserivce"> Terms Of Service</Link></p>
   
 
    </div>
    
    </div>  

</Container>
</footer>
</>

    )


}