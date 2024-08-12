import { useContext, useState } from "react";
import Bag from "./Bag";
import { BagContext } from "./BagProvider";
import { Link, NavLink, useLocation } from "react-router-dom";
function Navbar({setIsloginView, isLoginView}) {
    const [isBagOpen, setIsbagOpen] = useState(false);
    const { bagCollection } = useContext(BagContext);

    const path = useLocation().pathname;
    const navBar = document.getElementById('navbar')
    
    if(path == '/login'){
        // setIsloginView(true);
    }else{
        // setIsloginView(false);
    }
    

    function handleClickbag() {

        const bagElement = document.getElementById("bag-user");

        if (isBagOpen) {
            bagElement.style.visibility = "hidden"
            setIsbagOpen(false)
        } else {
            bagElement.style.visibility = "visible"
            setIsbagOpen(true)
        }
        console.log(isBagOpen)
    }
    return (
        <div>
            <div id="navbar"   className= {!isLoginView? "bg-slate-50 w-full h-20 flex gap-8 justify-between" : "bg-slate-50 w-full h-20 flex gap-8 justify-between"} >
                <div>
                    <div className="flex flex-col justify-center  p-1">
                        <div className="collapse z-50 w-36   bg-slate-50 rounded-s">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium h-full flex justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                                </svg>


                            </div>
                            <div className="collapse-content flex flex-col justify-center">
                                <NavLink
                                    to="/"
                                    className={isActive =>
                                        "nav-link" + (!isActive ? " unselected" : "")
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/admin"
                                    className={isActive =>
                                        "nav-link" + (!isActive ? " unselected" : "")
                                    }
                                >
                                    Admin
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className={isActive =>
                                        "nav-link" + (!isActive ? " unselected" : "")
                                    }
                                >
                                    Login
                                </NavLink>
                                
                                {/* <Link to='/' > <p>Home </p> </Link>
                                <Link to='/admin' > <p>Admin </p> </Link>
                                <Link to='/login' > <p>Login </p> </Link> */}

                            </div>
                        </div>
                    </div>

                </div>
                <div className="ml-20">
                    <img className="w-20" src="logo.png" alt="" />
                </div>
                <div className="flex flex-row gap-2 text-lg font-semibold mr-6">
                    <div className="flex flex-col justify-center p-3" >
                        <p className="h-5 ">About</p>
                    </div>
                    <div className="flex flex-col justify-center  p-3" >
                        <p className="h-5 ">FaQS</p>
                    </div>

                    {/* bag */}
                    <div className="">
                        <div onClick={handleClickbag} className="flex flex-col justify-center w-20 ">
                            <div className="collapse z-10 w-full bg-slate-50 rounded-sm">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium h-full flex w-24  justify-center mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className="flex flex-col justify-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                    </div> */}

                </div>

            </div>
            <Bag bagCollection={bagCollection} />

        </div>
    )
}
export default Navbar;