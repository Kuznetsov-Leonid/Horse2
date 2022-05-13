/**
 *  06.05.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 *  Service list component v2.1.1
 */

/**
 * Если забудешь чё происходит загляни сюда https://learn-reactjs.ru/basics/lists-and-keys
 * Документация по кайфу е жи...
 */

import React, {useState} from 'react';
import styled from 'styled-components';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { ServiceModal } from './ModalComp';

import imgWalk from './img/imgWalk.jpg';
import imgPhotoSet from './img/imgWidthHorse2.jpg';
import imgTerapy from './img/imgTerapy.jpg';
import imgPost from './img/imgPost.jpg';
import imgHorse from './img/imgHorse.jpg';
import imgStady from './img/imgStady.jpg';


/**
 * Медиа настройки в файле
 * @class .btnCard .btnCardLay .title
 * ../src/App.scss и ../src/App.css
 */
const Styled = styled.div`
    .Service_bg{
        background-color:  rgba(30, 33, 44, 1);
        padding: 40px 0px 40px 0px;
    }
    .Servise_title{
        text-align: center;
        color: #ffffff;
        margin-bottom: 50px;
    }
    
`;

const Service = () => {

    /**
     * пока так не совсем по кайфу - схематично
     * Массив с обьектами данных, ключ-значение, по хорошему
     * это всё надо запихнуть в json и фетчить из него 
     * */ 
    const data = [
        {id: 1, title: 'Обучение верховой езде', text: 'Обучаем с основ до профессионального уровня, даже если Вы до этого никогда не были в седле. Уроки проходят в группах или индивидуально, а лошадки подбираются в соответствии с возрастом, весом и навыками всадника.', img: imgStady},
        {id: 2, title: 'Постой лошадей', text: 'Создавать комфортные условия для жизни лошадей — наша работа!', img: imgPost},
        {id: 3, title: 'Конный прокат', text: 'Крутой прокат', img: imgWalk},
        {id: 4, title: 'Экскурсии на конюшню', text: 'Супер экскурсии', img: imgHorse},
        {id: 5, title: 'Иппотерапия', text: 'Мега иппотерапия', img: imgTerapy},
        {id: 6, title: 'Фотосессии с лошадьми', text: 'Фотосессии с супер лошадьми', img: imgPhotoSet}
    ];

    /**
     * 
     * @param {serviceTitle, serviceText, serviceImg} props 
     * @returns Обьект карты с пропсами. В пропсы, кстати, уже сразу 
     *          записаны нужные ключи для массива обьектов.
     */
    function ServiseItem(props){
        const [modalShow, setModalShow] = useState(false);
        const serviceTitle = props.serviceTitle
        const serviceText  = props.serviceText
        const serviceImg   = props.serviceImg
        return(
        <>
            <Col>
                <Card
                    className = 'mb-2 text-white CardSetting'
                >
                    <Card.Img 
                        variant   = 'top' 
                        src       = {serviceImg.img} 
                        alt       = 'KSK Armada'
                        className = 'CardImg'
                    />
                    <Card.ImgOverlay>
                        <Card.Title className = 'title'>{serviceTitle.title}</Card.Title>
                        <div className = 'btnCardLay'>
                            <Button 
                                className = 'btnCard'
                                onClick={() => setModalShow(true)}
                            >
                                <b>
                                    ПОДРОБНЕЕ
                                </b>
                            </Button>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <ServiceModal
                show   = {modalShow}
                onHide = {() => setModalShow(false)}
                title  = {serviceTitle.title}
                body   = {serviceText.text}
            />
        </>
        );
    }


    /**
     * Остальная магия для того что бы не копипастить один и тот же код
     * а сделать один обьект и рендрерить в зависимости от длинны массива
     * @param {data, items} props 
     * @returns ServicesList согласно размеру массива, читай key = {service.id}
     *          по id читает кол-во обьектов
     */
    function ServicesList(props){
        const data  = props.data
        const items = data.map((service) =>{
            return <ServiseItem 
                key          = {service.id}
                serviceTitle = {service}
                serviceText  = {service}
                serviceImg   = {service}
            />
        })
        return (
            <>
                <Row 
                    xs        = {1} 
                    md        = {3} 
                    className = 'g-4'
                >
                    {items}     
                </Row>
            </>
        )
    }

    return(
        <>
        <Styled>
            <div className = 'Service_bg'>
                <Container>
                    <h1 className = 'Servise_title'>
                        Услуги
                    </h1>
                    <ServicesList data = {data}/>
                </Container>
            </div>
        </Styled>
        </>
    );
};

export default Service