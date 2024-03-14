import { Link } from 'react-router-dom';
import ContactForm from '../../features/contactForm/contactForm';
import './ContactUs.css'
import { useEffect } from 'react';

function ContactUs() {

    useEffect(()=>{
        document.title=`Contact Us | SkinNaturals`;
        document.querySelector('meta[name="description"]').setAttribute("content", "Contact the team of SkinNaturals");

    }, [])

    return (
        <>
            <section id="contactUs" className="px-3 px-md-5 mb-5">

                <div id="contactBanner" className="d-flex align-items-center justify-content-center">
                    <h1 className="fs-2 text-center">Get in touch</h1>
                </div>

                <div className='d-md-flex'>

                    <div className='contactInfo d-md-flex align-items-center ms-md-5'>
                        
                        <div className="p-4  ms-md-4">
                            <div className="mb-3">
                                <p className="fw-bold fs-6">Address</p>
                                <p>15 Grand Avenue, Seattle, Washington State</p>
                            </div>

                            <div className="mb-3">
                                <p className="fw-bold fs-6">Telephone</p>
                                <Link className="text-decoration-none" to="tel:122123456" tabindex="0"
                                    target="_self">(122)-123456</Link>
                            </div>

                            <div className="mb-3">
                                <p className="fw-bold fs-6">Email</p>
                                <Link className="text-decoration-none" to="mailto:hello@skinnaturals.com" tabindex="0"
                                    target="_self">hello@skinnaturals.com</Link>
                            </div>
                            <hr className="w-75 mx-auto mt-5 my-md-4 d-md-none" />

                        </div>
                    </div>

                    <div id='contactForm' className="p-2 mt-md-4">

                        <ContactForm />

                        <span><sup>*</sup>Required</span>
                    </div>
                </div>

            </section>
        </>
    )
};

export default ContactUs;