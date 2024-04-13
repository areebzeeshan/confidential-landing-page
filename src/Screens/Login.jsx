import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';

const initvalues = {
    email: "",
    password: "",
};

const Login = () => {
    const router = useNavigate()
    const [auth, setAuth] = useContext(AuthContext)
    const [formData, setformData] = useState(initvalues);

    const onchange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
        // console.log({ [e.target.name]: e.target.value })
    };

    const submitFunc = async (e) => {
        e.preventDefault()
        console.log(formData, "here is my form data")

        try {
            const { data } = await axios.post("");
            if(data.error){
                return alert(data.error)
            }
            else{
                console.log(data)
                setAuth({ user: data.user, token: data.token })
                localStorage.setItem("auth", JSON.stringify(data))
                router("/");
            }
        } catch (error) {
            console.log(error)
        }
    };


    // if we have token
    useEffect(() => {
      if(auth && auth?.token) {
        router("/")
      }
    }, [auth && auth?.token])
    

    return (
        <div>
            <Navbar />
            <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
                <div className="container h-full p-10">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                            <div
                                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="g-0 lg:flex lg:flex-wrap">
                                    <div className="px-4 md:px-0 lg:w-6/12">
                                        <div className="md:mx-6 md:p-12">
                                            <h1 className='text-xl lg:text-5xl font-bold mb-10'>Login</h1>
                                            <form onSubmit={submitFunc}>
                                                <p className="mb-4">Please login to your account</p>
                                                <div className="mb-4">
                                                    <label className="block text-white text-sm font-bold mb-2" for="username">
                                                        Email
                                                    </label>
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                                    id="username" 
                                                    type="email"   
                                                    name='email'                                                  
                                                    value={formData.email}
                                                    onChange={onchange} />
                                                </div>
                                                <div className="mb-6">
                                                    <label className="block text-white text-sm font-bold mb-2" for="password">
                                                        Password
                                                    </label>
                                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                                    id="password" 
                                                    type="password"      
                                                    name='password'                                               
                                                    value={formData.password}
                                                    onChange={onchange} />
                                                </div>
                                                <div className="mb-12 pb-1 pt-1 text-center">
                                                    <button
                                                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs bg-[#EC4899] font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                        typeof='submit'
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light"
                                                        onSubmit={submitFunc}>
                                                        Log in
                                                    </button>

                                                    <a href="#!">Forgot password?</a>
                                                </div>
                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 mr-2">Don't have an account?</p>
                                                    <Link to={"/sign-up-page"}
                                                        type="button"
                                                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light">
                                                        Register
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                        style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);" }}>
                                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                            <h4 className="mb-6 text-xl font-semibold">
                                                We are more than just a company
                                            </h4>
                                            <p className="text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
