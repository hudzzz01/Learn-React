import { Link, NavLink } from "react-router-dom";
import "../css/login.css"
import { useEffect, useState } from "react";
import { LoginUser, RegisterUserApi } from "../../api/api";

function Login() {

    const [isLogin, setIsLogin] = useState(true);
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


    async function regist(registData) {

        const data = {
            email: registData.emailRegister,
            nama : registData.nameRegister,
            password: registData.passwordRegister,
            alamat : '',
            role : '',
        }

        // console.log(data)


        const resultRegist = await RegisterUserApi(data) 
        console.log(resultRegist)

        if (resultRegist.status === 'ok') {
            //console.log(resultLogin)
            setIsLogin(true);
            alert('berhasil membuat user baru')
        } else {
            alert(resultRegist.error);
            
        }
    }


    useEffect(() => {
        if (isAuth) {
            const link = document.getElementById("goto-dashboard")
            link.click();
            //console.log(localStorage);
        }
    }, [isAuth])

    function handleClickRegist() {
        setIsLogin(false)
    }

    function handleClickLogin() {
        setIsLogin(true)
        //console.log(isLogin)
    }

    function handleRegister(){
        const registerData = {}
        registerData.emailRegister = document.getElementById("email-register").value;
        registerData.nameRegister = document.getElementById("name-register").value;
        registerData.passwordRegister = document.getElementById("password-register").value;

        

        if (registerData.emailRegister && registerData.passwordRegister != '') {
            regist(registerData)
        }
    }

    function handleLogin() {
        const loginData = {}
        loginData.emailLogin = document.getElementById("email-login").value;
        loginData.passwordLogin = document.getElementById("password-login").value;

        if (loginData.emailLogin && loginData.passwordLogin != '') {
            login(loginData)
        }
    }

    return (
        <div>
            <div>
                <div className=" w-full h-full flex justify-center" id="container" style={{ background: "url('sekai.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="container w-full h-screen bg-white rounded flex justify-center gap-1">
                        <div id="hero-image" className="w-full h-full bg-slate-500">
                            <img className="w-full h-full object-cover " src="armor.jfif" alt="" />
                        </div>

                        <div id="login-form" className="w-full h-full flex justify-center flex-col bg-white">
                            <div className="bg-white flex flex-col justify-center gap-4">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-40 bg-white rounded-full">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                                {isLogin ?

                                    <div id="login">
                                        <div>
                                            <label className="input input-bordered flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                                </svg>

                                                <input id="email-login" type="email" className="grow" placeholder="email" />
                                            </label>
                                        </div>
                                        <div className="">
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
                                                <input id="password-login" type="password" className="grow" placeholder="Password" />
                                            </label>
                                            <p className=" text-center">Don't Have Account ? <span className="text-cyan-600" onMouseEnter={(e) => { e.target.style.cursor = "pointer" }} onClick={handleClickRegist} >Register</span></p>
                                            <div className="flex justify-center flex-col">
                                                <button className=" h-16 bg-slate-400 text-slate-500 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleLogin} >sign-in</button>
                                            </div>
                                        </div>

                                    </div>



                                    :

                                    <div id="register">
                                        <div>
                                            <label className="input input-bordered flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    fill="currentColor"
                                                    className="h-4 w-4 opacity-70">
                                                    <path
                                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                                </svg>
                                                <input id="name-register" type="text" className="grow" placeholder="Name" />
                                            </label>
                                        </div>
                                        <div>
                                            <label className="input input-bordered flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                                </svg>

                                                <input id="email-register" type="email" className="grow" placeholder="email" />
                                            </label>
                                        </div>



                                        <div>
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
                                                <input id="password-register" type="password" className="grow" />
                                            </label>
                                        </div>
                                        <p className=" text-center">All'Ready Have Account ? <span className="text-cyan-600" onMouseEnter={(e) => { e.target.style.cursor = "pointer" }} onClick={handleClickLogin} >Login</span></p>
                                        <div className="flex justify-center flex-col">
                                            <button onClick={handleRegister} className=" h-16 bg-slate-400 text-slate-500 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" >Sign-up</button>
                                        </div>
                                    </div>



                                }






                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Link to="/dashboard" id="goto-dashboard">AAA</Link>
        </div>
    )
}

export default Login;