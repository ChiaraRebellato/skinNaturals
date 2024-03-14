import { useEffect } from 'react';
import './Login.css';

function Login() {

    useEffect(()=>{
        document.title=`Login | SkinNaturals`;
        document.querySelector('meta[name="description"]').setAttribute("content", `Log into your account`);

    }, [])

    return (
        <>
            <section id="login" className="px-3 px-md-5">

                <div className="d-md-flex justify-content-center align-items-center">

                    <div id="loginBanner" className="d-flex align-items-center justify-content-center">
                        <h1>Welcome Back</h1>
                    </div>

                    <div className="loginForm p-4 py-5 ms-md-4">

                        <h2 className="text-muted fw-bolder">Log In</h2>

                        <fieldset className="mb-3">
                            <legend className="text-muted mb-4">Please fill in the form to sign in</legend>

                            <form action="#" enctype="text/plain" id="signInForm" autoComplete="on">

                                <div className="form-floating mt-5 mb-4">
                                    <input type="email" className="form-control rounded-0" id="floatingInputEmail"
                                        placeholder="name@example.com" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                        required autoFocus autoComplete="email" aria-required="true" />
                                    <label htmlFor="floatingInputEmail" className="fs-6">Email address<sup>*</sup></label>
                                </div>

                                <div className="form-floating mb-5">
                                    <input type="password" className="form-control rounded-0" id="floatingPassword" placeholder="Password"
                                        required autoComplete="current-password" aria-required="true" />
                                    <label htmlFor="floatingPassword" className="fs-6">Password<sup>*</sup></label>
                                </div>

                                <div className="d-md-flex align-items-center">

                                    <div className="form-check text-start my-3 flex-md-grow-1">
                                        <input className="form-check-input" type="checkbox" value="remember-me"
                                            id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> Remember me </label>
                                    </div>

                                    <a className="text-decoration-none text-muted fs-6" href="#" tabindex="0" target="_self">Forgot your
                                        password?</a>
                                </div>

                                <input className="btn border rounded-0 w-100 py-2 mt-3" type="submit" value="Sign In" />

                            </form>

                        </fieldset>

                        <span className="fs-6"><sup>*</sup>Required</span>

                        <p className="mt-4">New user? <a className="text-decoration-none fw-bolder" href="#" tabindex="0" target="_self">Sign Up
                            here</a></p>

                    </div>
                </div>

            </section>
        </>
    )
};

export default Login;