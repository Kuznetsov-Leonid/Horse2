/**
 *  17.05.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 *  Page404 component v2.1.1
 */

import React from "react";
import styled from 'styled-components';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Cowboy from '../Img/cowboy.png';

const Styles = styled.div`
    .Page404{
        margin: 50px 0px 50px 0px;
    }
    .Page404_txt{
        margin: 50px 0px 0px 0px;
    }
    .Page404_btn{
        text-align: center;
        margin: 40px;
    }
    .Page404_btn_bt{
        color: black;
        background: linear-gradient(55.95deg, #FD9319 0%, #FD9319 100%);
        border-color: #FD9319;
        border-radius: 50px;
        width: 10rem;
        transition: 0.3s;
    }
    .Page404_btn_bt:hover{
        color: white;
        transition: 0.3s;
    }
`;

const Page404 = () =>{
    return(
        <>
        <Styles>
            <div className = 'Page404'>
                <Container>
                    <Row>
                        <Col>
                            <div className = 'Page404_img'>
                                <img 
                                    src       = {Cowboy} 
                                    alt       = 'KSK Armada' 
                                    style     = {{'width':'25rem'}}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className = 'Page404_txt'>
                                <h1>404&nbsp;СТРАНИЦА&nbsp;НЕ&nbsp;НАЙДЕНА</h1>
                                <h3>Увы... Что-то пошло не так...</h3>
                                <h2>Попробуй начать всё сначала!</h2>
                            </div>
                            <div className = 'Page404_btn'>
                                <Button 
                                    className = 'Page404_btn_bt'
                                    href = '/'
                                    >
                                        <b>
                                            НА ГЛАВНУЮ
                                        </b>
                                    </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Styles>
        </>
    );
}

export default Page404