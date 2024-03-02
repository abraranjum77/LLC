'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { NavDropdown } from 'react-bootstrap';
import Logo from '../../../public/assets/images/logo.png';
import Menuimage from '../../../public/assets/images/img-menu.png';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function NavbarB() {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  const pathname = usePathname()
  return (
    <>
  
    <Navbar collapseOnSelect expand="" className={`bg-transparent z-30 ${stickyClass}`} >
    <div className="inner-nav flex items-center justify-content">
    <Link className={`link ${pathname === '/' ? 'active logo' : ''}`} href="/">
    <svg width="280" height="18" className="desktop-logo" viewBox="0 0 280 18" xmlns="http://www.w3.org/2000/svg">
    <path d="M249.139.414h-4.132v16.113h10.16V12.73h-6.028V.414zm11.735 0h-4.132v16.113h10.16V12.73h-6.028V.414zM275.378 0c-1.235 0-2.372.2-3.407.598a7.42 7.42 0 0 0-2.663 1.727 7.85 7.85 0 0 0-1.714 2.682c-.405 1.035-.607 2.19-.607 3.464s.202 2.428.607 3.464a7.85 7.85 0 0 0 1.714 2.682 7.4 7.4 0 0 0 2.663 1.726c1.035.4 2.172.599 3.407.599 1.094 0 1.992-.15 2.694-.45A8.403 8.403 0 0 0 280 15.354v-4.695a7.588 7.588 0 0 1-1.087 1c-.412.316-.88.573-1.405.772-.525.2-1.143.3-1.853.3a4.358 4.358 0 0 1-2.067-.496 3.763 3.763 0 0 1-1.5-1.45c-.377-.636-.565-1.407-.565-2.313 0-.906.188-1.677.565-2.314a3.768 3.768 0 0 1 1.5-1.45 4.358 4.358 0 0 1 2.067-.495c.71 0 1.328.1 1.853.3.525.2.993.457 1.405.77.413.315.774.65 1.087 1.002V1.588a7.69 7.69 0 0 0-1.928-1.15c-.702-.292-1.6-.438-2.694-.438M8.115 0 0 17.195h4.686l1.217-2.6h4.403l1.259 2.6h4.686L8.115 0zm0 7.689 1.48 3.613H6.649L8.115 7.69zm9.604 9.506h3.962V9L31.67 18V1.082h-3.962v8.194l-9.99-9v16.919zm26.102-5.974c-.234.545-.544.967-.927 1.266-.383.3-.812.508-1.288.622a6.192 6.192 0 0 1-1.46.173h-1.128V4.995h1.128c.497 0 .984.057 1.46.173.476.115.905.322 1.288.621.383.3.693.721.927 1.266.234.545.352 1.24.352 2.083 0 .845-.118 1.539-.352 2.083m.851-9.16c-1.214-.653-2.665-.98-4.355-.98h-5.58v16.114h5.58c1.69 0 3.141-.326 4.355-.979a6.823 6.823 0 0 0 2.812-2.785c.66-1.204.99-2.635.99-4.293 0-1.672-.33-3.107-.99-4.304a6.835 6.835 0 0 0-2.812-2.773m11.534 2.796c.44 0 .809.069 1.108.208.297.137.528.341.691.609.164.269.245.595.245.978 0 .384-.081.715-.245.99a1.534 1.534 0 0 1-.691.622c-.299.138-.668.207-1.108.207H54.82V4.857h1.385zm3.716 6.318c.887-.451 1.548-1.09 1.98-1.91.434-.82.65-1.753.65-2.797 0-1.059-.216-1.991-.65-2.797-.432-.805-1.093-1.438-1.98-1.899-.887-.46-2.012-.69-3.376-.69H50.69v16.113h4.132v-5.34h.886l2.927 5.34h4.813l-3.73-5.933c.066-.03.141-.054.205-.087zm9.063 6.02h6.368V13.58h-6.368v-3.015h5.941v-3.5h-5.941v-2.37h6.368V1.082h-10.33v16.113H68.985zm17.22-5.893h-2.946l1.464-3.614 1.481 3.614zm-3.692 3.292h4.403l1.258 2.601h4.685L84.723 0 76.61 17.195h4.685l1.22-2.601zm18.482-.91c-.298.223-.674.335-1.128.335a3.07 3.07 0 0 1-1.364-.322 4.046 4.046 0 0 1-1.214-.933 6.983 6.983 0 0 1-1-1.461l-2.812 2.209c.327.798.81 1.524 1.448 2.175a7.018 7.018 0 0 0 2.269 1.542 7.113 7.113 0 0 0 2.843.564c.724 0 1.434-.111 2.13-.334a5.764 5.764 0 0 0 1.863-.99 4.67 4.67 0 0 0 1.299-1.645c.32-.66.48-1.419.48-2.278 0-.646-.093-1.229-.277-1.75a4.475 4.475 0 0 0-.788-1.393 5.424 5.424 0 0 0-1.204-1.059 8.32 8.32 0 0 0-1.522-.771 53.65 53.65 0 0 1-1.694-.68c-.49-.206-.873-.428-1.15-.667a1.12 1.12 0 0 1-.415-.886c0-.306.12-.552.362-.736.241-.185.567-.276.98-.276.326 0 .645.07.958.207.312.138.607.333.884.586.277.254.522.573.735.956l3.11-1.865c-.27-.551-.654-1.1-1.15-1.646-.498-.544-1.13-.997-1.896-1.358-.767-.36-1.676-.54-2.726-.54-1.01 0-1.925.184-2.748.552a4.77 4.77 0 0 0-1.98 1.6c-.498.699-.746 1.553-.746 2.567 0 .798.138 1.488.415 2.07a4.929 4.929 0 0 0 1.044 1.475 6.5 6.5 0 0 0 1.31.977c.454.254.865.458 1.235.61a23.23 23.23 0 0 1 1.757.784c.418.215.714.425.884.632.17.207.256.464.256.772 0 .429-.15.756-.448.977m19.123-3.901 3.834 5.915 3.855-5.915.83 7.412h4.389L130.448.275l-6.496 9.277-6.475-9.276-2.577 16.919h4.388l.83-7.412zm25.451-5.088V1.082H135.24v16.113h10.329V13.58h-6.368v-3.016h5.942V7.066h-5.942v-2.37h6.368zm12.843 4.581-9.988-9v16.918h3.962V9l9.988 9V1.081h-3.962v8.195zm9.84-8.194h-2.811v16.113h10.33V13.58h-6.369v-3.016h5.942V7.066h-5.942v-2.37h6.369V1.082h-7.519zm14.504 0h-4.132v16.113h10.16v-3.798h-6.028V1.082zm31.031-.414c1.179 0 2.261.203 3.249.61a7.786 7.786 0 0 1 2.587 1.726 7.72 7.72 0 0 1 1.714 2.67c.405 1.036.608 2.19.608 3.464 0 1.259-.2 2.417-.596 3.476a8.223 8.223 0 0 1-1.683 2.75 7.477 7.477 0 0 1-2.588 1.796c-1.001.422-2.098.633-3.29.633-1.193 0-2.287-.21-3.28-.633a7.593 7.593 0 0 1-2.588-1.795 8.102 8.102 0 0 1-1.694-2.75c-.397-1.06-.596-2.218-.596-3.477 0-1.274.21-2.428.629-3.464a7.98 7.98 0 0 1 1.735-2.67 7.777 7.777 0 0 1 2.588-1.726c.987-.407 2.055-.61 3.205-.61zM197.515 0l8.136 17.195h-4.685l-1.258-2.601h-4.403l-1.219 2.6h-4.685L197.515 0zm16.272 4.719c-.767 0-1.434.188-2.002.563a3.726 3.726 0 0 0-1.32 1.555c-.313.66-.469 1.427-.469 2.301 0 .86.156 1.623.47 2.29.311.668.751 1.19 1.32 1.566.567.376 1.234.563 2.001.563.781 0 1.452-.187 2.013-.563.56-.376.998-.898 1.31-1.565.312-.668.468-1.431.468-2.29 0-.875-.149-1.643-.447-2.302-.298-.66-.728-1.179-1.288-1.555-.561-.375-1.247-.563-2.056-.563zm-16.272 2.97-1.464 3.613h2.945l-1.48-3.614zm34.951-6.607v10.45c0 .737-.178 1.331-.532 1.784-.356.453-.895.68-1.619.68-.71 0-1.242-.227-1.597-.68-.355-.453-.533-1.047-.533-1.784V1.082h-4.132V11.9c0 1.09.163 2.018.49 2.786.326.767.778 1.392 1.352 1.876.576.483 1.243.84 2.002 1.07a8.3 8.3 0 0 0 2.418.345c.866 0 1.675-.115 2.428-.345a5.72 5.72 0 0 0 2.002-1.07c.582-.484 1.036-1.11 1.363-1.876.327-.768.49-1.695.49-2.786V1.082h-4.132z" fill="currentColor" fillRule="evenodd"/>
</svg>
<svg width="50" height="50" className="mobile-logo md:hidden" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <path d="m40.107 24.975 5.506-9.296.01 18.61-5.516-9.314zm-15.088 16.74-8.613-14.547 17.32-.012-8.707 14.559zM4.387 34.45l-.01-18.924 5.674 9.453-5.664 9.471zM25 8.273l8.738 14.559-17.37.012 8.632-14.571zM49.976.665a.245.245 0 0 0-.25-.246.24.24 0 0 0-.211.122L37.558 20.726 25.191.12a.246.246 0 0 0-.213-.12.245.245 0 0 0-.214.121L12.57 20.707.46.531a.24.24 0 0 0-.21-.12A.245.245 0 0 0 0 .656l.024 48.687c0 .152.125.245.25.245a.24.24 0 0 0 .211-.12l12.09-20.217 12.213 20.627c.048.081.131.122.214.122.083 0 .165-.04.213-.12l12.347-20.648 11.976 20.226a.24.24 0 0 0 .212.121c.125 0 .25-.093.25-.245L49.976.665z" fill="currentColor" fillRule="evenodd"/>
</svg>
          </Link> 
           
           <div className="flex items-center gap-[20px]">
    <div className="md:flex hidden"><a href="#" className=" underline write">Write</a></div>
    <div className="md:flex hidden"> <form className="search-navbar search h-[80px] w-[80px]  flex rounded-full items-center  justify-center" action="">
  <input type="search" placeholder="Search here ..." />
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg> 
</form>
</div>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" className="md:h-[80px] md:w-[80px] h-[50px] w-[50px] tri flex rounded-full items-center justify-center" >
        <div className="menu-toggle_bar__GUd1o" data-position="top"></div><div className="menu-toggle_bar__GUd1o" data-position="bottom"></div>
</Navbar.Toggle>
        
         </div>
          </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="container md:py-[50px] py-[30px]">
            <div className="row">
              <div className="col-md-8">
              <Nav className="custom-nvi" >
       
          <Link className={`link ${pathname === '/Firm' ? 'active' : ''}`}
            href="/Firm" >Firm</Link>
            <Link className={`link ${pathname === '/Expertise' ? 'active' : ''}`}
            href="/Expertise" >Areas of Expertise</Link>
            <Link  className={`link ${pathname === '/Publications' ? 'active' : ''}`}
            href="/Publications">Publications</Link>
            <Link className={`link ${pathname === '/ContactUs' ? 'active' : ''}`}
            href="/ContactUs">Contact Us</Link>
             <Link className={`link md:hidden ${pathname === '/ContactUs' ? 'active' : ''}`}
            href="/ContactUs">Corporate & Commercial</Link>
             <Link className={`link md:hidden ${pathname === '/ContactUs' ? 'active' : ''}`}
            href="/ContactUs">Immigration & Relocation</Link>
             <Link className={`link md:hidden ${pathname === '/ContactUs' ? 'active' : ''}`}
            href="/ContactUs">Litigation & Dispute Resolution 
            </Link>
            <Link className={`link md:hidden ${pathname === '/ContactUs' ? 'active' : ''}`}
            href="/ContactUs">Real Estate 
            </Link>
            <Link className={`link md:hidden ${pathname === '/CookiesPrivacy' ? 'active' : ''}`}
            href="/CookiesPrivacy">Privacy & Cookie Policy
            </Link>
            <Link className={`link md:hidden ${pathname === '/Termofserivce' ? 'active' : ''}`}
            href="/Termofserivce">Terms Of Service
            </Link>
          </Nav>

              </div>
          <div className="col-md-4">
          <Image className="menu-img"
      src={Menuimage}
      alt=""
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={380}
      height={380}
    />
    <div className="mt-[40px] md:hidden">
<a href="#"><svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8zM4 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zm10 10a2 2 0 1 0-4 0v12a2 2 0 1 0 4 0V18zm1-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm5 5c.68 0 1.28.34 1.64.856A7.021 7.021 0 0 1 25 16c4.32 0 7 3.852 7 7.142V30a2 2 0 1 1-4 0v-6.86c0-1.536-1.32-3.142-3-3.142-1.048 0-2.206.57-3 1.926V30a2 2 0 1 1-4 0V18a2 2 0 0 1 2-2z" fill="#F1F4F7" fill-rule="evenodd"/>
</svg>
</a>
    </div>
    <div className="mt-[40px] md:hidden">
<a href="#"><svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 8a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8zm8-4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h12V22h-2a2 2 0 1 1 0-4h2v-3a7 7 0 0 1 7-7h1.2a2 2 0 1 1 0 4H27a3 3 0 0 0-3 3v3h4.2a2 2 0 1 1 0 4H24v14h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8z" fill="#F1F4F7" fill-rule="evenodd"/>
</svg>
</a>
    </div>
    <div className="mt-[40px] md:hidden">
<a href="#"><svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 8a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v24a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8zm8-4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8zm12 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-10 6c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm21-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="#F1F4F7" fill-rule="evenodd"/>
</svg>
</a>
    </div>
    <div className="office-1 md:mt-[50px] mt-[50px]">
<h3 className="text-[26px] leading-[32px] text-[#f9b400] font-bold">
Nicosia Offices
</h3>
<p className="text-[26px] leading-[32px] text-[#2a4661] mt-[10px]">1 Agiou Alexiou Street, 1st Floor,
Nicosia 2054, Cyprus</p>
    </div>
    <div className="office-1 mt-[20px]">
<h3 className="text-[26px] leading-[32px] text-[#f9b400] font-bold">
Lomassol Offices
</h3>
<p className="text-[26px] leading-[32px] text-[#2a4661] mt-[10px]">50B Christaki Kranou Street,
Potamos Germasogeias,
Limassol 4042, Cyprus</p>
    </div>
          </div>

          </div>
          </div>
       
        </Navbar.Collapse>
       
     
    </Navbar>
    </>
  );
}


