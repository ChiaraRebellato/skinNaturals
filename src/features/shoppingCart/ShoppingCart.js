import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './shoppingCart.css'

function ShoppingCart() {
    const product = useSelector((state) => state.shoppingCart.products);
    const total = useSelector((state) => state.shoppingCart.total);

    function handleClick() {
        document.querySelector("#offcanvasRight").classList.remove("show");
        document.querySelector(".offcanvas-backdrop").classList.remove("show");
    }

    return (
        <>
            {product.length > 0 ?

                <>
                    <div id="productsInCart" className="mb-3">
                        {product.map((elem, index) =>

                                <div key={index} className="d-flex mb-4">
                                    <img src={`/${elem.img}`} alt={`SkinNaturals ${elem.img}`} />
                                    <div className="w-100 ms-2">
                                        <p className="fw-bold">{elem.article}</p>
                                        <div className="d-flex align-items-center">
                                            <p className="flex-grow-1"><strong>Quantity:</strong> {elem.qty}</p>
                                            <p className="fs-5">€ {elem.price}</p>
                                        </div>
                                    </div>
                                </div>

                        )}
                    </div>

                    <div className="position-absolute fixed-bottom mx-3 bg-white">
                        <div className="mb-4">
                            <div className="d-flex align-items-center">
                                <p className="flex-grow-1 fs-4">Estimated Total: </p>
                                <p className="fs-3">€ {total}</p>
                            </div>

                            {total >= 50 ? <span className="fw-bold">Free shipping</span> : <span>Shipping fee calculated at checkout</span>}

                        </div>

                        <div className="d-flex justify-content-center mb-3">
                            <Link className="btn text-black w-100 text-uppercase fw-bold" to='checkout' tabIndex={0} target="_self" onClick={handleClick}>Checkout</Link>
                        </div>
                    </div>
                </>


                :

                <div className='text-center my-5'>
                    <p className='fs-5 mb-2'>Shopping cart is empty</p>
                    <Link to='/shop' className='btn text-decoration-none fw-bold' tabIndex={0} target='_self' onClick={handleClick}>Go shopping!</Link>
                </div>
            }
        </>
    )
}

export default ShoppingCart;