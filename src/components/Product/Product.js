import { Link } from "react-router-dom";

function Product({ showFace, showBody, showHair, elem, index }) {
    return (
        <>
            {(showFace && elem.category === 'Face') &&

                <div key={index}>
                    <Link to={`/details/${elem.id}`} className="text-decoration-none" tabIndex="0" target="_self">

                        <div className="d-flex justify-content-center">
                            <img src={`/${elem.img}`} alt={`SkinNaturals ${elem.article}`} />
                        </div>

                        <div className="text-center mt-3">
                            <p className="fs-5">${elem.price}</p>
                            <p>{elem.article}</p>
                        </div>
                    </Link>
                </div>

            }

            {(showBody && elem.category === 'Body') &&

                <div key={index}>
                    <Link to={`/details/${elem.id}`} className="text-decoration-none" tabIndex="0" target="_self">

                        <div className="d-flex justify-content-center">
                            <img src={`/${elem.img}`} alt={`SkinNaturals ${elem.article}`} />
                        </div>

                        <div className="text-center mt-3">
                            <p className="fs-5">${elem.price}</p>
                            <p>{elem.article}</p>
                        </div>

                    </Link>
                </div>

            }


            {(showHair && elem.category === 'Hair') &&

                <div key={index}>
                    <Link to={`/details/${elem.id}`} className="text-decoration-none" tabIndex="0" target="_self">

                        <div className="d-flex justify-content-center">
                            <img src={`/${elem.img}`} alt={`SkinNaturals ${elem.article}`} />
                        </div>

                        <div className="text-center mt-3">
                            <p className="fs-5">${elem.price}</p>
                            <p>{elem.article}</p>
                        </div>
                    </Link>
                </div>

            }


            {(!showFace && !showBody && !showHair) &&

                <div key={index}>
                    <Link to={`/details/${elem.id}`} className="text-decoration-none" tabIndex="0" target="_self">
                        <div className="d-flex justify-content-center">
                            <img src={`/${elem.img}`} alt={`SkinNaturals ${elem.article}`} />
                        </div>

                        <div className="text-center mt-3">
                            <p className="fs-5">${elem.price}</p>
                            <p>{elem.article}</p>
                        </div>

                    </Link>
                </div>

            }
        </>
    )
};

export default Product;