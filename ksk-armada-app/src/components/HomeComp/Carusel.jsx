/**
 * Create by Kuznetsov Leonid 
 * 04.05.2021
 */

import React from 'react';
import { 
    JumboPrise,  
    JumboEducationHorseRide, 
    JumboHorseRide, 
    JumboHoldUpWithHorse, 
    JumboPhotoWithHorse 
    } from './Jumbotrone';
import { Carousel } from 'react-bootstrap';

const Carusel = () => {
    return(
        <>
            <Carousel fade>
                <Carousel.Item>
                    <JumboPrise/>
                </Carousel.Item>
                <Carousel.Item>
                    <JumboEducationHorseRide/>
                </Carousel.Item>
                <Carousel.Item>
                    <JumboHorseRide/>
                </Carousel.Item>
                <Carousel.Item>
                    <JumboHoldUpWithHorse/>
                </Carousel.Item>
                <Carousel.Item>
                    <JumboPhotoWithHorse/>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Carusel