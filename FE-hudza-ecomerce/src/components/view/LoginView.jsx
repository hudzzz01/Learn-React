import { Link, NavLink } from "react-router-dom";
import './css/LoginView.css'
import { LoginUser } from "../../../api/api";
import { useEffect, useState } from "react";

export default function LoginView({setLogin}) {
    const [isAuth, setIsAuth] = useState(false);
    
    
    async function login(loginData) {
        

        const data = {
            email: loginData.emailLogin,
            password: loginData.passwordLogin
        }

        const resultLogin = await LoginUser(data)


        if (resultLogin.status === 'ok') {
            //console.log(resultLogin)
            localStorage.setItem("userId", resultLogin.data.userId);
            localStorage.setItem("token", resultLogin.data.token);
            setIsAuth(true);
            
        } else {
            alert("username atau password salah")
        }
    }

    useEffect(() => {
        if (isAuth) {
            setLogin(true)
            const link = document.getElementById("goto-dashboard")
            link.click();
            //console.log(localStorage);
        }
    }, [isAuth])

    function handleLogin() {
        
        const loginData = {}
        loginData.emailLogin = document.getElementById("username-login").value;
        loginData.passwordLogin = document.getElementById("password-login").value;

        if (loginData.emailLogin && loginData.passwordLogin != '') {
            login(loginData)
        }else{
            alert("ga boleh kosong")
        }
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-start bg-slate-100 w-80 h-96 rounded-xl mt-10 text-slate-600 p-5 gap-2">
                    <div className="font-bold text-center text-xl mt-5"> Agent Login</div>
                    <div className="font-light text-center text-md text-wrap">Hey enter your detail to sing-in to your account</div>
                    
                    <label className="input input-bordered flex items-center gap-2 mt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username" id="username-login" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" id="password-login" />
                    </label>
                    <div className="font-light ml-2 text-md text-wrap" > Having trouble sing-in ? </div>
                    <button className="btn bg-slate-500 mt-3" onClick={handleLogin} >Sign-in</button>
                    <div className="font-semibold    text-center text-sm text-wrap">- Or Sign in With -</div>
                    <div className="flex flex-row gap-2 justify-center ">
                    <button className="bg-slate-200 rounded " >Google </button>  
                    <button className="bg-slate-200 rounded " >Apple ID </button>
                    <button className="bg-slate-200 rounded " >Facebook </button>
                    </div>
                    
                </div>



            </div>
            <Link to="/admin" id="goto-dashboard" className="text-white">AAA</Link>
        </div>
    )
}