import { Link } from "react-router-dom";
import './AboutUs.css';
import { useEffect } from "react";

function AboutUs() {

    useEffect(()=>{
        document.title=`About Us | SkinNaturals`;
        document.querySelector('meta[name="description"]').setAttribute("content", "Learn more about SkinNaturals");

    }, [])

    return (
        <>
            <div className="aboutUsBanner text-center d-sm-flex justify-content-end align-items-center">

                <h2 className="fs-2">Let Nature Take Care of You</h2>

            </div>

            <section className="p-5">

                <nav aria-label="breadcrumb" >
                    <ol className="breadcrumb breadcrumb-chevron">

                        <li className="breadcrumb-item">
                            <Link className="link-body-emphasis text-decoration-none text-muted" to="/" tabIndex="0" target="_self">
                                Home
                            </Link>
                        </li>

                        <li className="breadcrumb-item fw-bold" aria-current="page">
                            About Us
                        </li>

                    </ol>
                </nav>

                <p className="aboutUsDescr my-5">SkinNaturals is a skincare company dedicated to creating all-natural, plant-based skincare products that
                    enhance the natural beauty of every individual. Our team is passionately committed to use the power of
                    nature to improve skin health, and we focus on formulating products that are gentle, effective, and
                    sustainable. We believe in providing quality skincare that is affordable and accessible to everyone,
                    without sacrificing the health of our planet or our customers. <br />
                    At SkinNaturals, we are proud to offer
                    products that are cruelty-free, vegan, and environmentally responsible.</p>


                <div className="mission my-5 d-flex flex-column align-items-center flex-lg-row">
                    <img className="img-fluid" src="img/mission.webp" alt="Worker in laboratory" />
                    <p className="p-4 p-lg-5">SkinNaturals advocates the use of environmentally friendly and organic-based products
                        that are beneficial
                        for both consumers and the planet. Our mission is to promote these products to consumers who care
                        about
                        their personal health and the sustainability of our planet. We believe that everyone should have
                        access
                        to safe and effective personal care products that are made from sustainable materials and do not
                        harm
                        the environment. We are committed to providing our customers with the highest quality organic-based
                        products while reducing our impact on the environment.</p>
                </div>

                <div className="vision d-flex flex-column align-items-center flex-lg-row">
                    <img className="img-fluid order-lg-2" src="img/vision.webp" alt="Wheat field" />
                    <p className="p-4 me-lg-5 order-lg-1">SkinNaturals aims to collaborate with regional manufacturers and decrease the use of
                        plastic in their
                        packaging. The company envisions a sustainable future where they work alongside local producers to
                        create eco-friendly alternatives that are both functional and visually appealing. This initiative is
                        a
                        crucial step to minimize their carbon footprint, promote local businesses, and support the
                        environment.
                    </p>
                </div>

            </section>
        </>
    )
};

export default AboutUs;