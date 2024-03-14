import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { products } from "../../data/products";
import { addToCart } from '../../features/shoppingCart/shoppingCartSlice';
import './Details.css';

function Details() {

    const dispatch = useDispatch();
    const { id } = useParams();
    let product = products.filter((elem) => elem.id == id);
    const [currentQty, setQty] = useState(1);
    const [show, setShow] = useState(false);

    useEffect(() => {

        if (product) {
            document.title = `${product[0].article} | SkinNaturals`;
            document.querySelector('meta[name="description"]').setAttribute("content", `Discover ${product[0].article}`);
        }
    })

    if (!id) {
        return <Navigate to="/" replace />
    };

    // Bootstrap's Modal
    const handleClose = () => { setShow(false) };

    let modal = (<>

        <Modal className="rounded-0" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Item added to cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg me-3 mt-1" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>

                    <div>
                        <p>{product[0].article} - {product[0].size}</p>
                        <p>Quantity: {currentQty}</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center flex-nowrap">
                <Button className="btn border-0 w-50 text-black" onClick={handleClose}>
                    Keep Shopping
                </Button>
                <Link to='/checkout' className="btn border-0 w-50 text-black" onClick={handleClose}>
                    Checkout
                </Link>
            </Modal.Footer>
        </Modal>
    </>)

    function handleClick(elem, qty) {

        if (qty <= 0) {
            return;
        }

        dispatch(addToCart({ product: elem, qty: qty }));
        setShow(true);
    };

    function handleIncrement(id, price, qty) {

        if (currentQty >= 10) {
            alert("You can buy max 10 items per order")
            return;
        }
        setQty((prev) => { return prev + 1 });

    };

    function handleDecrement(id, price, qty) {

        if (currentQty <= 1) {
            return;
        }
        setQty((prev) => { return prev - 1 });
    };

    return (
        <>

            <section className="shop m-4">

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">

                        <li className="breadcrumb-item">
                            <Link className="link-body-emphasis text-decoration-none text-muted" to="/" tabIndex="0"
                                target="_self">
                                Home
                            </Link>
                        </li>

                        <li className="breadcrumb-item">
                            <Link className="link-body-emphasis text-decoration-none text-muted" to="/shop" tabIndex="0"
                                target="_self">
                                Shop
                            </Link>
                        </li>

                        <li className="title breadcrumb-item fw-bold" aria-current="page">
                            {product[0].article}
                        </li>

                    </ol>
                </nav>

                <div className="d-md-flex justify-content-center mx-md-4 mx-lg-auto">

                    <div className="productCover d-flex justify-content-center justify-content-md-start my-4">
                        <img src={`/${product[0].img}`} alt={`SkinNaturals ${product[0].article}`} />
                    </div>

                    <div className="product my-4 mx-md-5">

                        <div className="my-3">
                            <h1 className="fs-3">{product[0].article}</h1>
                            <p className="qty text-muted">{product[0].size}</p>
                            <p className="mt-3">{product[0].description}</p>
                            <p className="fs-2 mt-4">€ <strong>{product[0].price}</strong></p>
                        </div>


                        <div className="addToCart d-flex align-items-center fixed-bottom bg-white">

                            <div className="d-flex align-items-center ms-3">

                                <button id="decrease" className="btn border-0" onClick={(handleDecrement)} disabled={currentQty <= 1 ? true : false}>-</button>

                                <p className="qty my-0 mx-2">{currentQty}</p>

                                <button id="increase" className="btn border-0" onClick={handleIncrement} disabled={currentQty >= 10 ? true : false}>+</button>

                            </div>

                            <button onClick={() => { handleClick(product[0], currentQty) }} type="button" className="btn hoverEffect w-100 me-3 p-2 text-uppercase fw-bold">Add to cart</button>

                        </div>

                    </div>

                </div>

                <hr className="w-75 mx-auto my-5" />

                <div className="mb-5 mx-md-3 mx-lg-5">

                    <div className="mb-4">
                        <h2 className="fs-4">Description</h2>
                        <p>{product[0].description}</p>
                    </div>

                    <div>
                        <h2 className="fs-4">Components</h2>
                        <p>{product[0].ingredients}</p>
                    </div>

                    <div className="certifications d-flex justify-content-center align-items-center mb-3 mt-5">
                        <img className="mx-1" src="/img/vegan.png" alt="Vegan" />
                        <img className="mx-1" src="/img/gluten-free.png" alt="Gluten-Free" />
                    </div>

                </div>

            </section>

            {show && modal}

        </>
    )

};

export default Details;
