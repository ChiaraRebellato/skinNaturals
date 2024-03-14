import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.querySelector('body').scrollIntoView({ behavior: 'smooth' });
    }, [pathname]);

    return <Outlet />;
}