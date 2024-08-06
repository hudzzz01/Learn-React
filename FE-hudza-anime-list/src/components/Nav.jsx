
import { NavLink } from "react-router-dom";
import { Link, Element, animateScroll as scroll } from 'react-scroll';

function Nav() {

    return (
        <div className="w-full flex flex-row-reverse">

            <div className="w-16 fixed z-50 top-24" >


                <ul className="menu bg-base-200 rounded-box">
                    <li>



                        <>
                            <NavLink
                                to="/"
                                className={`${({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    } w-12`}


                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </NavLink>
                        </>
                    </li>
                    <li>
                        <>
                            <NavLink
                                to="/recomendation"
                                className={`${({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    } w-12`}


                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </NavLink>

                        </>
                    </li>
                    <li>
                        <>
                            <NavLink
                                to="/about"
                                className={`${({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    } w-12`}


                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </NavLink>

                        </>
                    </li>
                    <li>
                        <>
                            <NavLink
                                to="/login"
                                className={`${({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                    } w-12`}


                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                </svg>

                            </NavLink>

                        </>
                    </li>
                    <li>
                        <>
                            <Link to="hero" smooth={true} duration={500} className="w-12">


                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                                </svg>



                            </Link>
                        </>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Nav;