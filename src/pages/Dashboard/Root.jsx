
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Root_Dashboard = () => {
    return (
        <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow p-5 bg-gray-100">
            <Outlet />
        </div>
    </div>
    );
};

export default Root_Dashboard;


