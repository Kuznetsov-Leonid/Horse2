/**
 *  01.05.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 *  Header component v2.1.1
 */

import React from 'react';
import styled from 'styled-components';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';

import Logo from '../Img/Logo.png';
import Vk from '../Img/Vk.png';
import Tel from '../Img/Tel.png';
import Phone from '../Img/Phone.png';

//Routing
import Page404 from './Page404';
import HomePage from './HomePage';


/**
 * Медиа настройки в файле
 * @class .navbar-dark .navbar-nav .nav-link
 * ../src/App.scss и ../src/App.css
 */

const Styles = styled.div`
    .Header{
        height: auto;
        background: linear-gradient(65.86deg, #F26638 0%, #FD9319 100%);
        padding: 0;
    }
    .Header_layout{
        display: flex;
    }
    .Header_logo{
        width: 98.54px;
        blend: Pass through;
    }
    .Header_nav_Vk{
        width: 60px;
        height: 35px;
        padding: 0;
    }
    .Header_nav_Tel{
        width: 50px;
        height: 45.45px;
        padding: 0;
    }
    .Header_numb_tel{
        background-color: #FFFFFF;
    }
    .Header_numb_tel_img{
        width: 24px;
    }
`;

const Obj = {
    alt: 'KSK Armada'
};

const Header = () => {
    return(
        <>
        <BrowserRouter 
            forceRefresh = {true} 
            basename     = '/'
        >
            <Styles>
                <Navbar 
                    sticky = "top"
                    collapseOnSelect 
                    variant   = 'dark' 
                    expand    = 'lg'
                    className = 'Header'
                >
                    <Container>
                        <Navbar.Brand 
                            href = '/'
                            className='Header_layout'
                        >
                            <img 
                                src       = {Logo} 
                                alt       = {Obj.alt}
                                className = 'Header_logo' 
                            />
                            <h6 style={{'margin':'auto'}}><b>Конно-спортивный клуб</b></h6>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls = 'responsive-navbar-nav'/>
                        <Navbar.Collapse id = 'responsive-navbar-nav'>
                        <Nav className = 'me-auto' style = {{'margin':'auto'}}>
                            {/* <Nav.Link 
                                eventKey  = {1} 
                                href      = '#section1'
                            >
                                Услуги
                            </Nav.Link>
                            <Nav.Link
                                eventKey  = {2} 
                                href      = '#section2'
                            >
                                О нас
                            </Nav.Link>
                            <Nav.Link 
                                eventKey  = {3} 
                                href      = '#section3'
                            >
                                Контакты
                            </Nav.Link> */}
                        </Nav>
                        <Nav>
                            <div className = 'Header_numb_tel'>
                                <img 
                                    src       = {Phone} 
                                    alt       = {Obj.alt}
                                    className = 'Header_numb_tel_img'
                                />
                                <b>+7(967)017-99-63</b>
                            </div>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <Routes>
                <Route exact path = '/' element={<HomePage/>} />
                <Route exact path = '*' element={<Page404/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default Header