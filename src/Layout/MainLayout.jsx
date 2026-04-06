import React from 'react';
import NavBar from '../Components/Shered/NavBar/NavBar';
import { Outlet } from 'react-router';
import HomePage from '../Pages/HomePage';

const MainLayout = () => {
    return (
        <div>
           
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;