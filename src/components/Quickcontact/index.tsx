'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form }from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import Contact from '../../../public/assets/images/contact.png';
import { Row } from 'react-bootstrap';
function Formtalktous() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <div className="talk_to_us relative md:my-[50px] my-[30px] border-t-[1px] pt-[30px] md:pt-[50px] border-[#222f3b]">
    
    <div className="container relative">
    <h2 className="text-[26px] text-[#2a4661] leading-[32px] md:mb-[50px] mb-[30px] font-normal">
    Quick Contact


</h2>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3 g-0">
    <div className="col-md-5">
    <Form.Group as={Col} md="12" className="mb-[20px]" controlId="validationCustom01">
         
          <Form.Control
            required
            type="text"
            placeholder="*Full Name"
            defaultValue=""
            className='h-[50px] rounded-none border-0  text-[18px] text-[#2a4661] leading-5 font-normal'
          />
           <Form.Control.Feedback type="invalid">
              Please Write Full Name
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} className="mb-[20px] md:mb-[0px]"  md="12" controlId="validationCustom02">
          
          <Form.Control
            required
            type="email"
            placeholder="*Email"
            defaultValue=""
            className='h-[50px] rounded-none border-0  text-[18px] text-[#2a4661] leading-5 font-normal'
          />
           <Form.Control.Feedback type="invalid">
              Please Write Your Correct Email
            </Form.Control.Feedback>
        </Form.Group>
    </div>
    <div className='col-md-5 md:ps-[20px] mb-[20px] md:mb-[0px]'>
    <Form.Group className="" controlId="validationCustom03">
      
        <Form.Control as="textarea" required
          
            placeholder="*Your Message Here…" rows={3} className="h-[120px] rounded-none border-0 text-[18px] text-[#2a4661] leading-5 font-normal pt-[16px] ps-[10px]" />
      
      <Form.Control.Feedback type="invalid">
              Please Write Your Message
            </Form.Control.Feedback>
      </Form.Group>
    </div>
    <div className='col-md-2 align-self-end md:ps-[20px]'>
    <Button type="submit" className="custom-btn rounded-full md:h-[80px] md:w-[80px] h-[50px] w-[50px] text-center	items-center flex justify-content-center border-0 bg-[#f9b400] hover:bg-[#f9b400]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</Button>

    </div>
    </Row>
    </Form>
    </div>
    </div>
    </>
  );
}

export default Formtalktous;
