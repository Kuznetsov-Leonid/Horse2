/**
 *  08.05.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 *  About Us component v2.1.1
 */

import React from 'react';
import styled from 'styled-components';
import { Container, Card, Accordion } from 'react-bootstrap';
import horsesBg from './img/horsesBg.jpg';
import ImgPerson from './img/imgPerson.jpg';


const Styles = styled.div`
    .AboutUs{
        background: url(${ImgPerson}) no-repeat fixed top;
    }
    .condComp{
        background-size: cover;
        color: #efefef;
        height: 850px;
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
        background: rgba(19, 19, 19, 0.7);
        padding: 5%;
        border-radius: 51px;
        display: block;
    }
    .CardSetting{
        background: transparent;
        border: none;
    }
    .AboutUsText{
        text-align: center;
        margin: 0px 0px 40px 0px;
    }
`;

/**
 * @returns AboutUsMore
 */
const AboutUsMore = () => {

    const data = [
        {id: 0, title: 'Конюшня', text: 'Высокие потолки и большие окна. Денники стандартные 3×3 м., оборудованные автопоилками.'},
        {id: 1, title: 'Кормление', text: 'Сено — от 15 кг в сутки, раздаётся 4 раза в денники и докладывается в левады. Концентраты: 3 раза в день, овес/каша/овес по вашим нормам. Дача подкормок и ваших дополнительных кормов ( мюсли, жмыхи, жомы и т. д) входит в стоимость постоя!'},
        {id: 2, title: 'Уборка денников', text: 'Основная — утром, далее пробор навоза и мокрых опилок — в течение дня. Подстилка — древесная стружка.'},
        {id: 3, title: 'Для работы', text: 'Имеется крытый манеж, выездковый и конкурный плацы, крытая бочка и уличный кодовый круг. Есть выезд в поля.'},
        {id: 4, title: 'Выгул', text: 'Выгул от 4-х часов в день! Стабуненные лошади гуляют от 8 часов! В левадах есть сено и организован водопой.'},
        {id: 5, title: 'Персонал', text: 'У нас работают опытные русскоговорящие конюхи! Вежливые и ответственные. Подкормки, попоны, пролив/замачивание сена, рептух.'},
        {id: 6, title: 'Для владельцев', text: 'Комната отдыха, индивидуальные шкафчики, амуничники, тёплый туалет.'},
    ]

    /**
     * @param {AboutUsKey, AboutUsTitle, AboutUsText} props 
     * @returns AboutUsMoreItem
     */
    function AboutUsMoreItem(props){
        const AboutUsKey   = props.AboutUsKey
        const AboutUsTitle = props.AboutUsTitle
        const AboutUsText  = props.AboutUsText

        return(
        <>
        <Accordion.Item eventKey = {AboutUsKey.id} className = 'CardSetting'>
            <Accordion.Header>{AboutUsTitle.title}</Accordion.Header>
            <Accordion.Body>
                {AboutUsText.text}
            </Accordion.Body>
        </Accordion.Item>
        </>
        );
    }

    /**
     * @param {data, items} props 
     * @returns AboutUsList
     */
    function AboutUsList(props){
        const data = props.data 
        const items = data.map((variant) =>{
            return <AboutUsMoreItem
                key          = {variant.id}
                AboutUsKey   = {variant}
                AboutUsTitle = {variant}
                AboutUsText  = {variant}
            />
        })
        return (
            <>
            <Accordion>
                {items}
            </Accordion>
            </>
        );
    }

    return(
        <>
            <AboutUsList data = {data}/>
        </>
    );
}


const AboutUs = () => {
    return(
        <>
            <Styles>
                <div className = 'AboutUs condComp'>
                    <Container>
                        <Card className='overlay'>
                            <div className = 'AboutUsText'>
                                <h4>О нас</h4>
                                <h6>
                                    Конно-спортивный клуб «Армада» приглашает на <br/>
                                    постой лошадей любого пола и возраста! <br/>
                                </h6>
                                <h2>Работаем с 9:00 до 21:00  </h2>
                                    
                                
                            </div>
                            <AboutUsMore/>
                        </Card>
                    </Container>
                </div>
            </Styles>
        </>
    );
};

export default AboutUs
