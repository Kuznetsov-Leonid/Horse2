/**
 * Create by Kuznetsov Leonid 
 * 04.05.2021
 */
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Prise from './img/prise.jpg';
import imgPost from './img/imgPost.jpg';
import imgTerapy from './img/imgTerapy.jpg';
import imgWalk from './img/imgWalk.jpg';
import imgPhotoSet from './img/imgPhotoSet.jpg';


//Стили обьектов
const Styles = styled.div`
    .JumboPrise{
        background: url(${Prise}) no-repeat fixed top;
    }
    .JumboEducationHorseRide{
        background: url(${imgPost}) no-repeat fixed top;
    }
    .JumboHippotherapy{
        background: url(${imgTerapy}) no-repeat fixed top;  
    }
    .JumboHorseRide{
        background: url(${imgWalk}) no-repeat fixed top;  
    }
    .JumboHoldUpWithHorse{
        background: url(${imgPost}) no-repeat fixed top;  
    }
    .JumboPhotoWithHorse{
        background: url(${imgPhotoSet}) no-repeat fixed top;  
    }
    .condComp{
        background-size: cover;
        color: #efefef;
        height: 700px;
        width: auto;
        position: realetive;
        z-index: -2;
        display: flex;
        align-items: center;
        align-content: center; 
        justify-content: center; 
        overflow: auto;   
    }
    .overlay{
        background: rgba(19, 19, 19, 0.6);
        padding: 10%;
        border-radius: 20px;
        display: block;
    }
`;

const JumboObj = {
    num : <h4>+7 (967) 017-99-63</h4>
};

//Cоревнования
const JumboPrise = () => {
    return(
        <>
            <Styles>
                <div 
                    fluid
                    className = 'JumboPrise condComp'
                >
                    <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Спортивные мероприятия</h1>
                                <Col>
                                    <h6>
                                        На нашей базе регулярно проходят соревнования по конкуру и конной выездке.  
                                    </h6>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}


//Школа верховой езды
const JumboEducationHorseRide = () => {
    return(
        <>
            <Styles>
                <div 
                    fluid
                    className = 'JumboPrise condComp'
                >
                    <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Обучение верховой езде</h1>
                                <Col>
                                    <h6>
                                    Обучаем с&nbsp;основ до&nbsp;профессионального уровня, 
                                    даже если&nbsp;Вы до&nbsp;этого никогда не&nbsp;были в&nbsp;седле. 
                                    Уроки проходят в&nbsp;группах или индивидуально, а&nbsp;лошадки подбираются 
                                    в&nbsp;соответствии с&nbsp;возрастом, весом и&nbsp;навыками всадника.
                                    </h6>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}

//Прогулки в поле
const JumboHorseRide = () => {
    return(
        <>
            <Styles>
                <div 
                    fluid
                    className = 'JumboPrise condComp'
                >
                <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Конные прогулки</h1>
                                <Col>
                                    <h6>
                                        Наслаждайтесь природой и&nbsp;общением с&nbsp;животными. Лучший выбор для семейного отдыха и&nbsp;встреч с&nbsp;друзьями.
                                    </h6>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}

//Постой лошадей
const JumboHoldUpWithHorse = () => {
    return(
        <>
            <Styles>
                <div 
                    fluid
                    className = 'JumboPrise condComp'
                >
                <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Постой лошадей</h1>
                                <Col>
                                    <h6>
                                        Создавать комфортные условия для жизни лошадей&nbsp;&mdash; наша работа!
                                    </h6>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}

//Фотосессии с лошадьми
const JumboPhotoWithHorse = () => {
    return(
        <>
            <Styles>
                <div 
                    fluid
                    className = 'JumboPrise condComp'
                >
                <Container>
                        <Card className='overlay'>
                            <Row>
                                <h1>Фотосессии с лошадьми</h1>
                                <Col>
                                    <h6>
                                        Чтoбы вaши впeчaтлeния сoхрaнились нe&nbsp;тoлькo в&nbsp;вaшeй пaмяти, мы&nbsp;прeдлaгaeм прoфeссиoнaльную фoтoсeссию с&nbsp;лoшaдьми.
                                    </h6>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
}

export {
    JumboPrise,
    JumboEducationHorseRide, 
    JumboHorseRide, 
    JumboHoldUpWithHorse,
    JumboPhotoWithHorse
};