import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Shop.css';
import { products } from "../../data/products";
import Product from "../Product/Product";

function Shop() {
    const [showFace, setFace] = useState(false);
    const [showBody, setBody] = useState(false);
    const [showHair, setHair] = useState(false);

    useEffect(() => {
        document.title = `Shop | SkinNaturals`;
        document.querySelector('meta[name="description"]').setAttribute("content", `Shop the latest products of SkinNaturals`);
    }, []);

    function displayAll() {
        setFace(false);
        setBody(false);
        setHair(false);
    }

    function handleFace() {
        setFace(true);
        setBody(false);
        setHair(false);
    };

    function handleBody() {
        setBody(true);
        setFace(false);
        setHair(false);
    };

    function handleHair() {
        setHair(true);
        setFace(false);
        setBody(false);
    };

    return (
        <>
            <section className="shop m-4">

                <nav aria-label="breadcrumb" >
                    <ol className="breadcrumb breadcrumb-chevron">

                        <li className="breadcrumb-item">
                            <Link className="link-body-emphasis text-decoration-none text-muted" to="/" tabIndex="0"
                                target="_self">
                                Home
                            </Link>
                        </li>

                        <li className="breadcrumb-item fw-bold" aria-current="page">
                            Shop
                        </li>

                    </ol>
                </nav>

                <div className="mt-5">
                    <h1 className="fs-3 text-center">Discover SkinNaturals' latest products</h1>
                </div>

                <div className="shopFilter my-5 d-md-flex justify-content-center">
                    <button type="button" className="btn px-3" onClick={displayAll}>Display All</button>
                    <button type="button" className="btn px-3" onClick={handleFace}>Face</button>
                    <button type="button" className="btn px-3" onClick={handleBody}>Body</button>
                    <button type="button" className="btn px-3" onClick={handleHair}>Hair</button>
                </div>


                {showBody &&

                    <div id="bodyDescription" className="px-3">
                        <h2>Body</h2>
                        <p>Our organic and natural body products are specially formulated to respect the natural pH
                            levels of
                            your
                            skin, making them suitable for users with sensitive skin conditions. Made with only the finest
                            natural
                            ingredients, our products offer a range of benefits including gentle cleansing, moisturizing,
                            detoxifying, and nourishing. Whether you're looking for a gentle face wash, calming body lotion, or
                            soothing bath soak, our products are designed to support your skin's health and leave you feeling
                            refreshed and rejuvenated.
                        </p>
                    </div>

                }


                {showFace &&

                    <div id="faceDescription" className="px-3">
                        <h2>Face</h2>
                        <p>Our organic and natural face products are free of harmful silicone and parabens. Our
                            soothing face
                            creams cater to all skin types and are made with gentle, plant-based ingredients. We also offer a
                            mild face scrub that is suitable for all skin types. Our products are designed to nourish your skin
                            without stripping it of its natural oils, leaving you with healthy and radiant skin.
                        </p>

                    </div>

                }


                {showHair &&

                    <div id="hairDescription" className="px-3">
                        <h2>Hair</h2>
                        <p>Our range of organic and natural hair products offers a safe and effective option for
                            healthy hair.
                            Our face creams are free from harmful silicone and parabens, ensuring a gentle and nourishing
                            experience. For those with oily scalps, our rosmarine and lemongrass infused products are the
                            perfect solution. Our commitment to natural ingredients means that you can trust the quality and
                            integrity of our products, without compromising on effectiveness.
                        </p>
                    </div>

                }

                <div className="shopProducts py-4">

                    {products.map((elem, index) =>

                            <Product showFace={showFace} showBody={showBody} showHair={showHair} elem={elem} index={index} />

                    )}

                </div>


            </section>
        </>
    )
};

export default Shop;