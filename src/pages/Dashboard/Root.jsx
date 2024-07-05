
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Root_Dashboard = () => {
    return (
        <div className="flex">
            <div className='realative'>
                <Sidebar />
            </div>
            <div className='py-5 px-6'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root_Dashboard;


