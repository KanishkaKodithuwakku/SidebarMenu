import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router';


const AppLayout = () => { 


    return (
        
        <>
            <Navbar />
            <Outlet/>
        </>
    )

}

export default AppLayout;
