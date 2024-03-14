import './Checkout.css';
import { useDispatch, useSelector } from "react-redux";
import { updateQty, decreaseQty, removeItem } from "../../features/shoppingCart/shoppingCartSlice";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Checkout() {
    const product = useSelector((state) => state.shoppingCart.products);
    const total = useSelector((state) => state.shoppingCart.total);
    const [seeCheckout, setCheckout] = useState(false);

    useEffect(()=>{
        document.title="Checkout | SkinNaturals";
        document.querySelector('meta[name="description"]').setAttribute("content", "Checkout | SkinNaturals");
    }, [])

    useEffect(() => {
        if (product.length <= 0) {
            setCheckout((prev) => { return prev = false })
        } else {
            setCheckout((prev) => { return prev = true })
        }
    }, [product.length])

    const dispatch = useDispatch();

    function handleIncrement(id, price, qty) {

        dispatch(updateQty({ id: id, price: price, qty: qty }))

    };

    function handleDecrement(id, price, qty) {

        dispatch(decreaseQty({ id: id, price: price, qty: qty }))

    };

    function handleRemoval(id, price, qty) {
        dispatch(removeItem({ id: id, price: price, qty: qty }));
    }

    return (
        <>
            <h1 className='text-uppercase ms-3 my-4 fs-3 fw-bold'>Checkout</h1>

            <div id='checkout' className={product.length > 0 ? '' : 'd-flex justify-content-center'}>
                <div className="mx-5">
                    {product.length > 0 ?

                        <>
                            {product.map((elem, index) =>

                                <div key={index} className="productsInCart d-flex mb-4">
                                    <img src={`/${elem.img}`} alt={`SkinNaturals ${elem.img}`} />
                                    <div className="w-100 ms-2">
                                        <div className='d-flex'>
                                            <div className='flex-grow-1'>
                                                <Link to={`/details/${elem.id}`} className="text-decoration-none fw-bold me-2 mb-2">{elem.article}</Link>
                                                <p id='qty' className="text-muted">{product[0].size}</p>
                                                <p>€ {product[0].price}</p>
                                            </div>

                                            <button id='remove' className='bg-transparent border-0' onClick={() => { handleRemoval(elem.id, elem.price, elem.qty) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="d-flex align-items-center">

                                            <div className="d-flex align-items-center">

                                                <div className="d-flex align-items-center">
                                                    <button className='border-0' id="decrease" onClick={() => { handleDecrement(elem.id, elem.price, elem.qty) }} disabled={elem.qty <= 1 ? true : false}>-</button>

                                                    <p className="my-0 mx-2">{elem.qty}</p>

                                                    <button className='border-0' id="increase" onClick={() => { handleIncrement(elem.id, elem.price, elem.qty) }} disabled={elem.qty >= 10 ? true : false}>+</button>

                                                </div>
                                            </div>

                                            <button id='removeDesktop' className='btn noHover border-0 p-1 px-2 ms-4 d-none' onClick={() => { handleRemoval(elem.id, elem.price, elem.qty) }}>
                                                Remove
                                            </button>
                                        </div>

                                    </div>


                                </div>

                            )}


                        </>


                        :

                        <>
                            <div className='d-flex justify-content-center my-5'>
                                <div className='text-center'>
                                    <p className='fs-5 mb-2'>Shopping cart is empty</p>
                                    <Link to='/shop' className='btn text-decoration-none fw-bold' tabIndex={0} target='_self'>Go shopping!</Link>
                                </div>
                            </div>

                        </>

                    }

                </div>

                {seeCheckout &&

                    <div id='cashier' className="m-5 p-3">
                        <div className='d-flex align-items-center mb-3'>
                            <p className="flex-grow-1 fs-4 fw-bold">Total: </p>
                            <p className="m-0 fs-4">€ {total}</p>
                        </div>

                        {total >= 50 ? <span className="fw-bold">Free shipping</span> : <span>Shipping fee calculated at checkout</span>}

                    </div>

                }
            </div>


        </>
    )
};

export default Checkout
