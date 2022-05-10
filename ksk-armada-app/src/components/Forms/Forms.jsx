/**
 * Create by Kuznetsov Leonid 
 * 10.05.2022
 * Forms v2.1.1
 */
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {Modal, Button, Container, Form, CardGroup, Card, Spinner, Row, Col } from 'react-bootstrap';

const Forms = (props) => {
    const form = useRef();
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onTouched"
    }); 

    const sendEmail = (e) => {
        //  test ---- 'service_td3yqi6', 'template_g27ul53', form.current, 'user_RBIjAEvAriwtz46L0hxec'
        //  ARMADA ---- 'service_rla1tl2', 'template_04b0tu1', form.current, 'user_W6DyZvFT710FcvSPQiVd2'
        emailjs.sendForm('service_rla1tl2', 'template_04b0tu1', form.current, 'user_W6DyZvFT710FcvSPQiVd2')
        .then((result) => {
            console.log(result.text);
                function success() {
                    alert("Спасибо, мы скоро с Вами свяжемся!");
                    console.log("Успешное отправление формы.");
                    reset();
                }
                    success();
            }, (error) => {
                console.log(error.text);
                function notSuccess() {
                    alert("Что-то пошло не так, ошибка отправки.");
                    console.log("Ошибка отправки формы.");
                    reset();
                } 
                    notSuccess();
            });
        return (e.preventDefault())
    }   

    const onSubmit = (data) => {
        //alert(JSON.stringify(data));
        sendEmail();
    }

    return(
        <>
            <Form ref={form} onSubmit={handleSubmit(onSubmit)}> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имя*</Form.Label>
                    <Form.Control {...register("name", {
                        required: "Имя обязательно к заполнению",
                    })}
                    type="name" placeholder="Ваше имя" name="name" />
                    <br/>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control {...register("email", {
                        required: "Email обязателен к заполнению",
                        pattern: {
                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                            message: "Некорректный email"
                        }
                    })}
                    type="email" placeholder="Ваш email" name="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Номер телефона*</Form.Label>
                    <Form.Control {...register("tel", {
                        required: "Номер телефона обязателен к заполнению",
                        pattern: {
                            value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,14}(\s*)?$/,
                            message: "Некорректный номер"
                        }
                    })}
                    type="phone" placeholder="Ваш номер телефона" name="tel"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Сообщение</Form.Label>
                    <Form.Control {...register("message")} type="messege" placeholder="Ваше сообщение" as="textarea" name="message"  rows={3} />
                </Form.Group>  
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" name="checkbox1">
                        <div style={{'display':'flex', 'margin':'0'}}>
                            <Form.Check {...register("checkbox1",{
                                required: true
                            }
                            )} type="checkbox" name="checkbox1"/>
                            &nbsp; Согласие на обработку&nbsp;персональных данных*
                        </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button 
                            disabled  = {!isValid} 
                            variant   = 'light' 
                            type      = 'submit' 
                            value     = 'Send'
                            className = 'mr-2 btnCard' 
                            id        = 'send'
                            onClick   = {props.Click}
                        >
                            <b>Отправить сообщение</b> 
                        </Button>
                    </Col>
                </Row>
                
                <div style={{color:'red'}}>{errors?.tel && <p>{errors?.tel?.message || "Error!"}</p>}</div>
                <div style={{color:'red'}}>{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}</div>
                <div style={{color:'red'}}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
                <br/>
            </Form>
        </>
    );
}

export default Forms


