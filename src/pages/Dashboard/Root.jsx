
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Root_Dashboard = () => {
    return (
        <div className="flex">
            <div className='fixed'>
                <Sidebar />
            </div>
            <div className='ml-[200px] p-9'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root_Dashboard;


