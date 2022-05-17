/**
 *  04.05.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 *  Home page component v2.1.1
 */

import React from 'react';
import Carusel from './HomeComp/Carusel';
import Services from './HomeComp/Service';
import AboutUs from './HomeComp/AboutUs';
import Page404 from './Page404';

const HomePage = () => {
    return(
        <>
            <Carusel/>
            <Services/>
            <AboutUs/>
        </>
    );
};

export default HomePage
