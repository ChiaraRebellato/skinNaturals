import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import ScrollToTop from './ScrollToTop';
import Layout from './Layout';
import Homepage from '../components/Homepage/Homepage';
import AboutUs from '../components/AboutUs/AboutUs';
import Shop from '../components/Shop/Shop';
import Details from '../components/Details/Details';
import Checkout from '../components/Checkout/Checkout';
import Privacy from '../components/SidePages/Privacy';
import Terms from '../components/SidePages/Terms';
import Login from '../components/Login/Login';
import ContactUs from '../components/Contact/ContactUs';
import Redirect from '../components/Redirect/Redirect';
import NotFound from '../components/NotFound/NotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
            <Route element={<ScrollToTop />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Homepage /> } aria-label="Homepage" />
                <Route path='about-us' element={<AboutUs />} aria-label="About Us"/>
                <Route path='shop' element={<Shop />} />
                <Route path='details/:id' element={<Details />} errorElement={<NotFound />} aria-label="Details of product" />
                <Route path='details' element={<Details />} />
                <Route path='checkout' element={<Checkout />}  aria-label="Checkout"/>
                <Route path='login' element={<Login />}  aria-label="Login"/>
                <Route path='contact-us' element={<ContactUs />}  aria-label="Contact Us"/>
                <Route path='privacy' element={<Privacy />}  aria-label="privacy"/>
                <Route path='terms' element={<Terms />}  aria-label="Terms"/>
                <Route path='redirect' element={<Redirect />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Route>
      </>
    )
  );

  return <RouterProvider router={router} />

};

export default App;