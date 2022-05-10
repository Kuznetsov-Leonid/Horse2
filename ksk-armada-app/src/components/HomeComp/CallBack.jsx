/**
 * Create by Kuznetsov Leonid 
 * 10.05.2022
 * Call Back v2.1.1
 */
import { useForm } from 'react-hook-form';
import React, { useRef, useState } from 'react';
import { Container, Card, Accordion } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .callBack{
        background-color: #FECD5A;
        padding: 50px 0px 50px 0px;
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
                </Container>
            </div>
        </Styles>
        </>
    );
};

export default CallBack
