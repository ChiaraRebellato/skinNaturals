import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {

    return (
        <>
            <header>

                <Navbar />
                <Link to="#main" className="skip" title="Skip to main content" tabIndex="-1" target="_self">Skip to main content</Link>

            </header>

            <main>

                <Outlet />

            </main>

            <footer className="p-4">
                <Footer />
            </footer>
        </>
    )
};

export default Layout;