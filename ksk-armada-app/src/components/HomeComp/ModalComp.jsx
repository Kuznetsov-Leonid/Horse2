import React from 'react';
import { Button, Container, Modal } from 'react-bootstrap';


/**
 * Модальное окно для подробного описания услуги
 * @param {onHide, title, body} props 
 * @returns serviceModal
 */
function ServiceModal(props){
    const onHide = props.onHide
    const title  = props.title
    const body   = props.body
    return(
        <>
            <Modal
            {...props}
            size            = 'lg'
            aria-labelledby = 'contained-modal-title-vcenter'
            centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
                </Modal.Header>
                    <Container>
                        {body}
                    </Container>
                <Modal.Footer>
                    <Button onClick = {onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export {
    ServiceModal
};