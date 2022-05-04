/**
 * Create by Kuznetsov Leonid 
 * 04.05.2021
 */
import React from 'react';
import styled from 'styled-components';


const JumboObj = {
    btn : <OnlineEntry onClick={() =>{pingBtn('reachGoal', 'OnlineEntry')}}/>,
    num : <h4>+7 (967) 017-99-63</h4>
}

//Стили обьектов
const Styles = styled.div `
    .JumboEducationHorseRide {
        background: url(${imgHorse}) no-repeat fixed top;
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