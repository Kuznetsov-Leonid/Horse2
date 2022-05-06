/**
 *  06.05.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 *  Service list component v2.1.1
 */

/**
 *  @To-Dos:
 * 1) Подготовить модальные окна
 * 2) Подготовить кнопки для модальных окон
 * 3) Доделать стилизацию основного компонента услуг
 * 4) Доработать массив добавить фотографии
 * 
 * Если забудешь чё происходит загляни сюда https://learn-reactjs.ru/basics/lists-and-keys
 * Документация по кайфу е жи...
 */

import React from 'react';
import styled from 'styled-components';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Styled = styled.div`
    .Service_bg{
        background-color: #FD9319;
        padding: 40px 0px 40px 0px;
    }
    .Servise_title{
        text-align: center;
        color: #ffffff;
    }
`;

const Service = () => {

    /**
     * пока так не совсем по кайфу - схематично
     * Массив с обьектами данных, ключ-значение, по хорошему
     * это всё надо запихнуть в json и фетчить из него 
     * */ 
    const data = [
        {id: 1, title: 'Обучение верховой езде', text: 'Обучаем с основ до профессионального уровня, даже если Вы до этого никогда не были в седле. Уроки проходят в группах или индивидуально, а лошадки подбираются в соответствии с возрастом, весом и навыками всадника.'},
        {id: 2, title: 'Постой лошадей', text: 'Создавать комфортные условия для жизни лошадей — наша работа!'},
        {id: 3, title: 'Конный прокат', text: 'Крутой прокат'},
        {id: 4, title: 'Экскурсии на конюшню', text: 'Супер экскурсии'},
        {id: 5, title: 'Иппотерапия', text: 'Мега иппотерапия'},
        {id: 6, title: 'Фотосессии с лошадьми', text: 'Фотосессии с супер лошадьми'}
    ];

    /**
     * 
     * @param {serviceTitle, serviceText} props 
     * @returns Обьект карты с пропсами. В пропсы, кстати, уже сразу 
     *          записаны нужные ключи для массива обьектов.
     */
    function ServiseItem(props){
        const serviceTitle = props.serviceTitle
        const serviceText  = props.serviceText
        return(
        <>
            <Col>
                <Card
                    className = 'mb-2'
                >
                <Card.Img 
                    variant = 'top' 
                    src     = "holder.js/100px160" 
                />
                <Card.Body>
                    <Card.Title>{serviceTitle.title}</Card.Title>
                    <Card.Text>{serviceText.text}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
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