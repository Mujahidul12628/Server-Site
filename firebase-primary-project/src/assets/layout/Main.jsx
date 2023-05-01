import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Header></Header>
        </div>
    );
};

export default Main;