import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './index.css'
import { Link } from 'react-router-dom';
import { SidebarNav } from './SidebarNav';
import Logo from '../../assets/Logo';
import { CiUser } from "react-icons/ci";

const Sidebar = () => {

  const [active, setActive] = useState("")

  return (
    <>
      <div className={'bg-dark-secondary hidden md:block w-[20%] h-min-screen'}>
        <div className='py-5'>
          <div className='mt-2 px-7'>
            <Logo />
          </div>

          <div className={'flex justify-start items-center gap-3 px-3 mt-5 cursor-pointer text-gray-300 bg-[#272E57] font-bold p-2'}>
            <CiUser /> <span>Areeb Zeeshan</span>
          </div>

          {SidebarNav.map((x) => (
            <div key={x.name} onClick={() => setActive(x.name)} className={`flex justify-start items-center ${x.name === 'Logout' ? 'mt-9' : 'mt-5'} gap-3 px-3 
            mt-5 cursor-pointer ${active === x.name ? 'text-purple font-bold border-r-2 border-purple' : 'text-gray-300'}`}>
              {x.icon} <span>{x.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar;
