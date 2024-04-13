import React, { useEffect, useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import useWindowDimensions from '../../Hooks/UseDimensions';

const Layout = ({ children }) => { 
    const [open, setOpen] = useState(false);

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if(width > 766){
            setOpen(false);
        }
    }, [width])

    return (
        <div className='bg-dark-primary h-min-screen flex'>
            <Sidebar open={open} />
            <div className='bg-transparent w-[100%] md:w-[80%]'>
                <Header open={open} setOpen={setOpen} />
                <div className={`${open && 'hidden'}`}>{children}</div>
            </div>
        </div>
    )
}

export default Layout;
