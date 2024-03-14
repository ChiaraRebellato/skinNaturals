import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCart from '../../features/shoppingCart/ShoppingCart';

function Navbar() {

    const product = useSelector((state) => state.shoppingCart.products);

    return (
        <>
            <div id="promo" className="p-2">

                <p className="text-center flex-grow-1"><strong>Free shipping</strong> over $50</p>

            </div>

            <div className="d-flex align-items-center my-2 mx-3 align-items-center ">
                <nav className="navbar navbar-expand-md flex-grow-1" role="menu" aria-label="Menu">
                    <div className="container-fluid justify-content-start">
                        <button className="navbar-toggler border-0 me-2" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <Link className="navbar-brand text-center fs-5 flex-grow-1 flex-md-grow-0" href="/" tabIndex="0"
                            target="_self">SkinNaturals</Link>

                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">

                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title navbar-brand d-inline" id="offcanvasNavbarLabel">SkinNaturals
                                </h5>
                                <button type="button" className="btn-close offcanvasNavbarBtn" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>

                            <div className="offcanvas-body ms-2">
                                <ul className="navbar-nav flex-md-grow-1">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" role="menuitem" aria-current="page" to="/" title="Home"
                                            tabIndex="0" target="_self">HOME</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" role="menuitem" to="about-us" title="About Us" tabIndex="0"
                                            target="_self">ABOUT US</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" role="menuitem" to="shop" title="Shop" tabIndex="0"
                                            target="_self">SHOP</NavLink>
                                    </li>

                                </ul>

                            </div>
                        </div>


                    </div>

                </nav>

                <div className="me-2">
                    <NavLink to="login" title="Login" tabIndex="0" target="_self">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                            <path fillRule="evenodd"
                                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg>
                    </NavLink>
                </div>

                <div id='cart' className='d-flex'>
                    <button className="cartSvg bg-transparent border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                        </svg>
                    </button>

                    <div>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <div className="offcanvas-title text-uppercase d-flex" id="offcanvasRightLabel">

                                    <p className='fs-3'><strong>Cart</strong></p>

                                    <span className='rounded-5 text-center ms-3 fs-5'>{product.length}</span>

                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ShoppingCart />
                            </div>
                        </div>
                        <div id='cartLength' className='rounded-5 text-center'>
                            <span className='fw-bold'>{product.length}</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Navbar;