/**
 *  02.05.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 *  Footer component v2.1.1
 */

//To-do's Доделать вёрстку соц. сетей и сделать карту, добавить нижнюю роспись, подготовить юнит тесты

import React from 'react';
import styled from 'styled-components';
import { Button, Container, CardGroup, Card } from 'react-bootstrap';
import Rider from '../Img/Rider.png';
import Point from '../Img/Point.png';
import SmartPhone from '../Img/SmartPhone.png';
import Chat from '../Img/Chat.png';
import Vk from '../Img/VkWhite.png';
import Tel from '../Img/TelWhite.png';



const Styles = styled.div`
    .Footer{
        background-color: #2B8180;
        height: auto;
        color: #FFFFFF;
        font-family: inherit;
    }
    .CardSetting{
        background: transparent;
        border: none;
        
    }
    .Footer_icon{
        margin: 10px;
    }
    .Point{
        width: 40px;
    }
    .SmartPhone{
        position: relative;
        left: 6px;
        width: 25px;
    }
    .Chat{
        width: 40px;
    }
    .Rider{
        width: 25rem;
        margin: auto;
    }
`;

const Obj = {
    alt      : 'KSK Armada',
    phone    : 'phone',
    mail     : 'mail',
    mapPoint : 'map point'
};

const Footer = () => {
    return(
        <>
        <Styles>
            <div className = 'Footer'>
                <Container>
                    <CardGroup>
                        <Card className = 'CardSetting'>
                            <div style = {{
                                    'margin':'20px',
                                    'textAlign':'center'
                                    }}
                            >
                                <h2>
                                    Наши контакты
                                </h2>
                            </div>
                            <table style = {{'margin':'20px'}}>
                                <tr >
                                    <td>
                                        <img 
                                            src       = {Chat} 
                                            alt       = {Obj.mail} 
                                            className = 'Footer_icon Chat'
                                        />
                                    </td>
                                    <td>
                                        <h6 style = {{'marginTop':'20px'}}>Эл. почта</h6>
                                        <h5>ksk_armada@Yahoo.com</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img 
                                            src       = {SmartPhone} 
                                            alt       = {Obj.phone} 
                                            className = 'Footer_icon SmartPhone'
                                        />
                                    </td>
                                    <td>
                                        <h6 style = {{'marginTop':'20px'}}>Наш номер</h6>
                                        <h5>+7 (967) 017-99-63</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img 
                                            src       = {Point} 
                                            alt       = {Obj.mapPoint} 
                                            className = 'Footer_icon Point'
                                        />
                                    </td>
                                    <td>
                                        <h6 style = {{'marginTop':'20px'}}>Наш адрес</h6>
                                        <h5>Новорязанское шоссе, дер. Дурниха Раменского района владение 79, 25&nbsp;км от&nbsp;МКАД.</h5>
                                    </td>
                                </tr>
                            </table>
                            <table style = {{'margin':'20px'}}>
                                <tr>
                                    <td>
                                        <Button variant="link">
                                            <img 
                                                src = {Vk} 
                                                alt = "VKontacte" 
                                            />
                                        </Button>
                                    </td>
                                    <td>
                                        <Button variant="link">
                                            <img 
                                                src = {Tel} 
                                                alt = "Telegram" 
                                            />
                                        </Button>
                                    </td>
                                </tr>
                            </table>
                        </Card>
                        <Card className = 'CardSetting'>
                            <img 
                                src = {Rider} 
                                alt = {Obj.alt} 
                                className = 'Rider'
                            />
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </Styles>
        </>
    );
};

export default Footer