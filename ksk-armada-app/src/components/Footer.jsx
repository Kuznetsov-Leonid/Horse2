/**
 *  02.05.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 *  Footer component v2.1.1
 */

import React from 'react';
import styled from 'styled-components';
import { Button, Container, CardGroup, Card } from 'react-bootstrap';
import Rider from '../Img/Rider.png';
import Point from '../Img/Point.png';
import SmartPhone from '../Img/SmartPhone.png';
import Chat from '../Img/Chat.png';
import Vk from '../Img/VkWhite.png';
import Tel from '../Img/TelWhite.png';
import { MapCard } from './Ifraim/Iframe';


const Styles = styled.div`
    .Footer{
        background-color: rgba(30, 33, 44, 1);
        height: auto;
        color: #FFFFFF;
        font-family: inherit;
        padding: 30px;
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
        width: 100%;
        margin: auto;
    }

    .linkIco{
        margin: auto;
        opacity: 60%;
        transition: 0.5s;
        width: 100px;
        height: 75px;
        padding: 5px;
    }
    .linkIco:hover{
        opacity: 100%;
    }
    .linkIco:focus{
        opacity: 100%;
        background-color: gray;
        box-shadow: 0 -4px 16px #2f3640;
    }
    .linkIco:active{
        opacity: 100%;
        background-color: black;
        box-shadow: 0 -4px 16px #2f3640;
    }
    
    .vkontacte{
        width: 70px;
    }
    .telegram{
        width: 60px;
    }
    .mapContact{
        width: 100%;
        height: 100%;
        border-radius: 50px;
    }
    .SubFooter{
        background-color: #656872;
        border: none;
        text-align: center;
    }
    .footer-copir-txt{
        /* extrasmall/regular */
        color: #000;
        margin-top: 20px;
        font-size: .7em;
        line-height: 150%;
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
                                <h1>
                                    Наши контакты
                                </h1>
                            </div>
                            <table>
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
                            <hr />
                            <div style={{'textAlign':'center'}}>
                                <h1>Мы в соцсетях</h1>
                                <Button 
                                    variant   = 'link'
                                    target    = '_blank'
                                    href      = 'https://vk.com/ksk_armada'
                                    className = 'linkIco'
                                >
                                    <img 
                                        src       = {Vk} 
                                        alt       = 'VKontacte'
                                        className = 'vkontacte'
                                    />
                                </Button>
                                <Button 
                                    variant   = 'link'
                                    target    = '_blank'
                                    href      = 'https://t.me/ksk_armada'
                                    className = 'linkIco'
                                >
                                    <img 
                                        src       = {Tel}     
                                        alt       = 'Telegram'
                                        className = 'telegram' 
                                    />
                                </Button>
                            </div>
                            <div style={{'textAlign':'center', 'margin':'20px'}}>
                                <h6>СТАТИСТИКА</h6>
                                <Button className = "pg-0" variant="link"  href="https://webmaster.yandex.ru/siteinfo/?site=ksk-armada.ru" target='_blank'>
                                    <img className='iconX' alt='' src="https://yandex.ru/cycounter?ksk-armada.ru&theme=dark&lang=ru"/>
                                </Button>
                            </div>
                        </Card>
                        <Card className = 'CardSetting'>
                            <img 
                                src       = {Rider} 
                                alt       = {Obj.alt} 
                                className = 'Rider'
                            />
                        </Card>
                    </CardGroup>
                </Container>
                <Card 
                    className = 'CardSetting' 
                    style     = {{'height':'550px'}}
                >
                        <MapCard/>
                </Card>
            </div>
            <div className = 'SubFooter'>
                
                    <Card className = 'CardSetting'>
                        <p className = 'footer-copir-txt'>&copy;&ensp; All rights reserved. Made by Orlan1211@yahoo.com. E.S.C. ARMADA</p>
                    </Card>
                
            </div>
        </Styles>
        </>
    );
};

export default Footer