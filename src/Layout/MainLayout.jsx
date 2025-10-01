import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <div className='min-h-screen bg-[url(./bg-diamante.svg)]'>
            <Navbar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;