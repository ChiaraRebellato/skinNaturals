import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {

    useEffect(()=>{
        document.title=`404 | SkinNaturals`;
        document.querySelector('meta[name="description"]').setAttribute("content", `Page not found`);

    }, [])

    return (
        <>
            <div className="d-flex justify-content-center my-5 py-5">
                <div className="text-center">
                    <h1>OPS!</h1>
                    <p>404 - PAGE NOT FOUND</p>
                    <Link to="/" className="btn mt-3">Go to homepage</Link>
                </div>
            </div>
        </>
    )
};

export default NotFound;