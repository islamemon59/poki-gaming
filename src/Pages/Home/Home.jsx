import React from 'react';
import Games from '../../Components/Games/Games';
import Navbar from '../../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className='lg:pt-0 pt-26'>
                <Games/>
            </div>
        </div>
    );
};

export default Home;