import { useContext, useEffect, useState } from 'react';
import { navigation } from './Navigations';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';


const Navbar = () => {

    const [state, setState] = useState(false)
    const [drapdownState, setDrapdownState] = useState({ isActive: false, idx: null })
    const [auth, setAuth] = useContext(AuthContext);
    const router = useNavigate();

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu")) setDrapdownState({ isActive: false, idx: null });
        };
    }, [])

    return (
        <>
            <nav className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>
                <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/" className='text-4xl'>
                            E-commerce
                        </Link>
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                        </svg>

                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`} style={{ zIndex: drapdownState.isActive ? 2 : 1 }}>
                        <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            {
                                                item.isDrapdown ? (
                                                    <button className="w-full flex items-center justify-between gap-1 hover:text-[#EC4899]"
                                                        onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive })}
                                                    >
                                                        {item.title}
                                                        {
                                                            drapdownState.idx == idx && drapdownState.isActive ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                                                </svg>

                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                                </svg>
                                                            )
                                                        }
                                                    </button>
                                                ) : (
                                                    <Link to={item.path} className="block hover:text-[#EC4899]">
                                                        {item.title}
                                                    </Link>
                                                )
                                            }
                                            {/* {
                                                item.isDrapdown && drapdownState.idx == idx && drapdownState.isActive ? (
                                                    <div className="mt-6 inset-x-0 top-20 w-full bg-white md:absolute md:border-y md:shadow-md md:mt-0">
                                                        <ul className='max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3'>
                                                            {item?.navs.map((x, idx) => (
                                                                <li key={idx}>
                                                                    <ul className='mt-5 space-y-6'>
                                                                        <li key={idx} className="group">
                                                                            <a href={x.path} className='flex gap-3 items-center'>
                                                                                <div className='w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14'>
                                                                                    {x.icon}
                                                                                </div>
                                                                                <div>
                                                                                    <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">{x.title}</span>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : ""
                                            } */}
                                        </li>
                                    )
                                })
                            }
                            {!auth?.token ? (<div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                                <li>
                                    <Link to="/login-page" className="block py-3 text-center hover:text-[#EC4899] border rounded-lg md:border-none">
                                        Log in
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sign-up-page" className="block py-3 px-4 font-medium text-center text-white bg-[#EC4899] hover:bg-[#BA4B4F] active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                        Sign up
                                    </Link>
                                </li>
                                {/* <li>
                                    <button
                                        className="block py-3 px-4 text-center hover:text-[#EC4899] border rounded-lg md:border-none"
                                        onClick={() => {
                                            router("/dashboard")
                                        }}>
                                        Dashboard
                                    </button>
                                </li> */}
                            </div>
                            ) : (
                                <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                                    <Link
                                        to="/login-page"
                                        className="block py-3 px-4 font-medium text-center text-white bg-[#EC4899] hover:bg-[#BA4B4F] active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                                        onClick={() => {
                                            setAuth({ user: null, token: "" })
                                        }}>
                                        Logout
                                    </Link>
                                    {/* <button
                                        className="block py-3 px-4 text-center hover:text-[#EC4899] border rounded-lg md:border-none"
                                        onClick={() => {
                                            router("/dashboard")
                                        }}>
                                        Dashboard
                                    </button> */}
                                </div>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
            {
                state ? (
                    <div
                        className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setState(false)}></div>
                ) : ""
            }
        </>
    )
};

export default Navbar;