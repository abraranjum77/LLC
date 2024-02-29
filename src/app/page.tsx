import React from 'react';
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Talktous from '@/components/Tak_to_Us';
import FirmSection from '@/components/Firm';
import PublicationSection from '@/components/Publication';
import Areassection from '@/components/Areas';
import HomeCookies from '@/components/HomeCookies';
import Markimage from '/public/assets/images/img-am-mark.png';
import Gavel from '/public/assets/images/img-gavel.png';
import Pen from '/public/assets/images/img-pen.png';
import Globe from '/public/assets/images/img-globe.png';
import Cake from '/public/assets/images/img-cake.png';
import Stamp from '/public/assets/images/img-stamp.png';
import LargeLogo from '/public/assets/images/name-logo-lrg.png';
import About from "./About/page";
export default function Home() {
  return (
    <>
      
    <div className="herosection ">
    <Header />
 
    <Image
          className="section-1 hero-top "
                    src={Markimage}
          alt=""
          width={1920}
          height={1390}
      quality={80}
       
        />
      
  
        <div className='gavel relative md:mt-[270px]'>
        <div className='grid gap-x-[120px]  grid-cols-2 md:border-t-[0px] border-t-[1px] border-[#fff]'> 
    <div className=''>
    
    </div>
    <div className='md:border-t-[1px] border-[#fff] col z-10'>

    </div>
    </div>
        <div className="container">
        <div className='grid gap-x-[120px] grid gap-x-[120px] grid-cols-1 md:grid-cols-2 mb-[30px] md:mb-[62px]'> 
<div>

</div>

<div className="md:pt-[50px] pt-[30px]">
<Image src={LargeLogo} width={480} className="hero-logo" height={30} alt="" />
<h5 className='text-[20px] leading-[24px] md:text-[30px] text-[#fff] md:leading-[32px] font-semibold mt-[20px]' >Advocates | Legal Consultants</h5>
<p className="text-[20px] leading-[26px] text-[26px] text-[#fff] leading-[32px] font-normal">Your story, our expertise, crafting legal <br/>success together.</p>
</div>
        </div>
        <div className='grid gap-x-[120px] grid gap-x-[120px] grid-cols-1 md:grid-cols-2 relative z-10'> 
<div>
<h1 className='text-[50px] leading-[60px]   md:text-[100px] text-[#fff] md:leading-[110px] font-bold mb-[30px] md:mb-[50px]'>A unique touch to law.</h1>
</div>

<div>

    <Image className='cover-ob-1'
      alt=""
      src={Pen}
      placeholder="blur"
      quality={80}
      
    />
        </div>
          </div>
          </div>
          
          <Image className='cover-ob-3'
      alt=""
      src={Gavel}
      placeholder="blur"
      quality={80}
      
    />
        </div>

        
      <div className='pen border-t-[1px] border-[#fff] md:pt-[50px] pt-[30px] z-10 relative'>
      <Image className='md:hidden'
      alt=""
      src={Gavel}
      placeholder="blur"
      quality={80}
      fill
      sizes="100vw"
      style={{
        objectFit: 'contain',
      }}
    />
      <Image className='md:hidden'
      alt=""
      src={Pen}
      placeholder="blur"
      quality={80}
      fill
      sizes="100vw"
      style={{
        objectFit: 'contain',
      }}
    />
        <div className="container relative z-10">
        <div className='grid gap-x-[120px] grid-cols-1 md:grid-cols-2'> 
        <div>
       <h2 className='text-[30px] leading-[40px] md:text-[50px] text-[#fff] md:leading-[60px] font-bold'> Firm </h2>
        </div>
        <div>
<p className='text-[20px] leading-[26px] md:text-[26px] text-[#fff] md:leading-[32px] mb-[30px] '>
Our practical, specialized & precise approach to our clients needs, guarantees bespoke legal advice built on the circumstances of each client.
</p> <p className='text-[20px] leading-[26px] md:text-[26px] text-[#fff] md:leading-[32px] md:mb-[50px] mb-[30px] mt-[20px]'>
ANDREAS MENELAOU LLC was founded on the principles of integrity, expertise, and unwavering dedication to our clients. Established in 2016, we have proudly served an international portfolio of clients in Cyprus and beyond, providing exceptional legal services tailored to meet the diverse needs of our clients.
</p>

        </div>
        </div>

        </div>
        
        </div>  
         
    <div className='cake relative '>
    <Image className='cover-ob-2'
      alt=""
      src={Globe}
      placeholder="blur"
      quality={80}
      
    />
    <div className='grid gap-x-[120px] grid-cols-2'> 
    <div className='md:border-t-[1px] border-[#fff] col relative z-10'>

    </div>
    <div className='md:border-t-[1px] border-[#fff] col z-10'>

    </div>
    </div>
    <div className="container relative z-10" >
      <div className="grid gap-x-[120px] grid-cols-1 md:grid-cols-2">
<div className='custom-pad  md:border-t-[0px] border-t-[1px] border-[#fff] '>
<div className="relative z-10">
        
<h1 className='text-[110px] leading-[120px] md:text-[250px] text-[#fff] md:leading-[250px] font-bold md:mt-[50px] mt-[30px]'>
  109
</h1>  
<h2 className='text-[50px] leading-[60px] md:text-[110px] text-[#fff] md:leading-[120px] font-bold'>
Years
</h2>
<p className='text-[20px] leading-[26px] md:text-[26px] text-[#fff] md:leading-[32px] md:mb-[50px] mb-[30px]  md:mt-[20px] mt-[10px]'>Of combined legal experience in the most complex areas of law.</p>

    </div>
    <Image className='md:hidden'
      alt=""
      src={Globe}
      placeholder="blur"
      quality={80}
      fill
      sizes="100vw"
      style={{
        objectFit: 'contain',
      }}
    />
</div>
<div className="relative md:border-t-[0px] border-t-[1px] border-[#fff] custom-pad">
<div className="relative z-10">
<h1 className='text-[110px] leading-[120px] md:text-[250px] text-[#fff] md:leading-[250px] font-bold md:mt-[50px] mt-[30px]'>
  8
</h1>  
<h2 className='text-[50px] leading-[60px] md:text-[110px] text-[#fff] md:leading-[120px] font-bold'>
Years
</h2>
<p className='text-[20px] leading-[26px] md:text-[26px] text-[#fff] md:leading-[32px] md:mb-[50px] mb-[30px] md:mt-[20px] mt-[10px]'>Managing and consulting international clients with hundreds of successful projects worldwide.</p>

    </div>
    
    <Image className='md:hidden'
      alt=""
      src={Cake}
      placeholder="blur"
      quality={80}
      fill
      sizes="100vw"
      style={{
        objectFit: 'contain',
      }}
    />
</div>

</div>
    </div>
    <div className='grid gap-x-[120px] grid-cols-2 md:border-t-[0px] border-t-[1px] border-[#fff]'> 
    <div className=' col'>

    </div>
    <div className='md:border-t-[1px] border-[#fff] col z-10'>

    </div>
    </div>
    <Image className='cover-ob-1'
      alt=""
      src={Cake}
      placeholder="blur"
      quality={80}
      
    />
    </div>

   <div className="stamp-section relative">
    <div className="container relative z-10" >
      <div className="row">
<div className='col-md-6 col-12'>

</div>
<div className="col-md-6 col-12">
<div className="relative md:ms-[40px]">
<h1 className='text-[110px] leading-[120px] md:text-[250px] text-[#fff] md:leading-[250px] font-bold md:mt-[50px] mt-[30px]'>
  4
</h1>  
<h2 className='text-[50px] leading-[60px] md:text-[110px] text-[#fff] md:leading-[120px] font-bold'>
Areas Of Expertise
</h2>
<p className='text-[20px] leading-[26px] md:text-[26px] text-[#fff] md:leading-[32px] md:mb-[50px] mb-[30px] md:mt-[20px] mt-[10px]'>Corporate & Commercial • Immigration & Relocation • Litigation & Dispute Resolution • Real Estate.</p>

    </div>
</div>
</div>
    </div>

    <Image className='cover-ob'
      alt=""
      src={Stamp}
      placeholder="blur"
      quality={80}
      fill
      sizes="100vw"
      style={{
        objectFit: 'contain', objectPosition: 'bottom',
      }}
    />
 

   </div>

    </div>
    <Areassection/>
    <PublicationSection/>
    <FirmSection/>
    <Talktous />
    <HomeCookies />
    <Footer />
    </>
  );
}
