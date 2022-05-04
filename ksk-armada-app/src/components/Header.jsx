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

const Styles = styled.div`
    .Header{
        height: auto;
        background-color: #07B1BC;
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
    .Header_numb_tel{
        border-radius: 50px;
        text-align: center;
        padding: 16px 30px 15px 30px;
        margin: 5px 0px 5px 0px;
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
                            <h6 style={{'margin':'auto'}}>Конно-спортивный клуб</h6>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls = 'responsive-navbar-nav'/>
                        <Navbar.Collapse id = 'responsive-navbar-nav'>
                        <Nav className = 'me-auto' style = {{'margin':'auto'}}>
                            <Nav.Link eventKey={1} href='#section1'>Услуги</Nav.Link>
                            <Nav.Link eventKey={2} href='#section2'>О нас</Nav.Link>
                            <Nav.Link eventKey={3} href='#section3'>Контакты</Nav.Link>
                        </Nav>
                        <Nav>
                            <Row style = {{'margin':'auto'}}>
                                <Col>
                                    <Nav.Link 
                                        eventKey = {4} 
                                        href     = 'https://vk.com/ksk_armada' 
                                        style    = {{'padding':'5px'}}
                                        target   = '_blank'
                                    >
                                        <img 
                                            src       = {Vk} 
                                            alt       = {Obj.alt}
                                            className = 'Header_nav_Vk'
                                        />
                                    </Nav.Link>
                                </Col>
                                <Col>
                                    <Nav.Link 
                                        eventKey = {5} 
                                        href     = 'https://t.me/ksk_armada' 
                                        style    = {{'padding':'0'}}
                                        target   = '_blank'
                                    >
                                        <img 
                                            src       = {Tel} 
                                            alt       = {Obj.alt} 
                                            className = 'Header_nav_Tel'
                                        />
                                    </Nav.Link>
                                </Col>
                            </Row>
                            <div className = 'Header_numb_tel'>
                                <img 
                                    src       = {Phone} 
                                    alt       = {Obj.alt}
                                    className = 'Header_numb_tel_img'
                                />
                                +7(967)017-99-63
                            </div>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <Routes>
                    
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default Header