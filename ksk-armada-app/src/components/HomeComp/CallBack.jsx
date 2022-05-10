/**
 * Create by Kuznetsov Leonid 
 * 10.05.2022
 * Call Back v2.1.1
 */
import React from 'react';
import { Container, Card, Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import Forms from '../Forms/Forms';


const Styles = styled.div`
    .callBack{
        background-color: #FECD5A;
        padding: 50px 0px 50px 0px;
    }
    .btnCard{
        background-color: #FC712B;
        color: #000000;
        border-color: #FC712B;
    }
    .btnCard:hover{
        background-color: #FF5500;
    }
`;

const CallBack = () => {
    return(
        <>
        <Styles>
            <div className = 'callBack'>
                <Container>
                    <h6>Остались вопросы?</h6>
                    <h1>Напишите нам</h1> 
                    <Forms/>
                </Container>
            </div>
        </Styles>
        </>
    );
};

export default CallBack
