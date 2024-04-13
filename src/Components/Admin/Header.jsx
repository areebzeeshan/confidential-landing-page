import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = ({ open, setOpen }) => {

  const navigation = [
    { title: "Customers" },
    { title: "Careers" },
    { title: "Guides" },
    { title: "Partners" }
  ]

  return (
    // <div>
    //   <div className='bg-orange-300 h-auto p-3'>
    //     <div className='flex justify-between'>
    //       <h5>Ecommerce</h5>
    //       { !open ? (
    //         <AiOutlineMenu onClick={() => setOpen(!open)} />
    //       ) : (
    //       <AiOutlineClose onClick={() => setOpen(!open)} />
    //       )         
    //       }
    //     </div>
    //   </div>

    //   {
    //     open &&
    //     <div className='bg-orange-300 h-auto p-3 block md:hidden'>
    //       Dropdown
    //     </div>
    //   }
    // </div>
    <nav className="bg-dark-secondary w-full md:border-0 md:static block md:hidden">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link className='text-white'>Ecommerce</Link>
          <div className="md:hidden">
            <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setOpen(!open)}
            >
              {
                !open ? <AiOutlineMenu /> : <AiOutlineClose />
              }
            </button>
          </div>
        </div>
        <div className={`h-screen flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${open ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {
              navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-600  text-white hover:text-indigo-600">
                    <a href="#">
                      {item.title}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a href="javascript:void(0)" className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header;
