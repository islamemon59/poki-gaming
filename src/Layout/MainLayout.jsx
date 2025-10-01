import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <div className='min-h-screen bg-[url(./bg-diamante.svg)]'>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;