import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Homepage.css';
import { products } from '../../data/products';
import Product from '../Product/Product';


function Homepage() {

    let featuredProducts = products.filter((elem) => elem.featured === 'yes');

    useEffect(() => {
        document.title = `Homepage | SkinNaturals`;
        document.querySelector('meta[name="description"]').setAttribute("content", "SkinNaturals - Feelin' organic");

    }, [])

    return (
        <>
            <section>
                <div className="headerBanner text-center pt-5">

                    <h2 className="mb-4">The Naturals</h2>
                    <h3 className="d-none d-lg-inline">100% organic. 100% <span className="fs-5">SkinNaturals</span></h3>

                    <h3 className="d-lg-none lh-base">100% organic. <br /> 100% <span className="fs-5">SkinNaturals</span></h3>

                    <p className="text-muted mt-3">Discover our new body line</p>

                    <Link to="shop" className="btn hoverEffect my-3" title="Shop Now" tabIndex="0" target="_self">Shop Now</Link>
                </div>
            </section>

            <section id="companyInfo" className="d-flex justify-content-center align-items-center p-5">

                <div className="container">
                    <div className="row">

                        <div className="d-none d-lg-inline col-lg-4">

                            <img className='img-fluid' src="img/body.webp" alt="Woman" />

                        </div>

                        <div className="companyInfoDesc col-12 col-lg-8">

                            <div className="row">

                                <div className="px-lg-4">
                                    <h2 className="fs-1">Feelin' organic</h2>

                                    <p className="mt-3">SkinNaturals creates organic beauty products that allow individuals to
                                        reconnect with
                                        nature while also promoting environmental conservation. By using natural
                                        ingredients, the brand provides consumers with a safe and sustainable alternative to
                                        traditional chemical-based cosmetics. </p>

                                </div>


                            </div>

                            <div
                                className="row imgs d-none d-md-flex justify-content-center justify-content-lg-around">

                                <img className="d-none d-md-inline d-lg-none mt-4" src="img/faceMobile.webp" alt="Women" />
                                <img className="d-none d-lg-inline img-fluid" src="img/face.webp" alt="Women" />
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="p-5 m-3 mt-4 mt-lg-5">

                <div className="text-center mb-5">
                    <h3>Featured Products</h3>
                    <p className="fs-6">Our clients <em>'must-have'</em></p>
                </div>

                <div id="featuredProducts">
                    {featuredProducts.map((elem, index) =>

                        <div key={index} className="featured">

                            <Product elem={elem} />

                        </div>

                    )}
                </div>

                {featuredProducts.length <= 0 && <h4 className='text-center d-flex justify-content-center'>Sorry, no products available</h4>}

            </section>

        </>
    )
};

export default Homepage;
