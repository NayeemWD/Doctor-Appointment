import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';
import AppProvider from '../Provider/AppProvider';

const RootLayOut = () => {
    return (
        <div>
            <AppProvider>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </AppProvider>
        </div>
    );
};

export default RootLayOut;