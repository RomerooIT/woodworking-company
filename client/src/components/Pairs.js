import React, {useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    // MDBBtn,
    MDBRow,
    // MDBCardGroup,
    MDBCol,
} from 'mdb-react-ui-kit';

import {Button} from "react-bootstrap";
import ModalForm from "./ModalForm4";
// import {values} from "mobx";
// import {defaults} from "axios";
let btnInfo={}
const Pairs = () => {
    const [modal,setModal]=useState(false)
    const toggleShow = () => {
        setModal(!modal)
    };
    const Pairs=[
        {id:1,title:'Заявка',group:'021703',teacher:'Физрук Физрукович',type:'Практическое занятие',time:'10:30-11:50'},
        {id:2,title:'Заявка',group:'021703',teacher:'Физрук Физрукович',type:'Практическое занятие',time:'10:30-11:50'},
        {id:3,title:'Заявка',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'},
        {id:11,title:'Заявка',group:'021703',teacher:'Ночная ночь',type:'Лаборатоная работа',time:'23:59-32:95'}

    ]
    return (
        <div className='w-75 ms-auto me-auto mt-2' >
            <MDBRow className='row-cols-1 row-cols-md-5 g-4' >
                {Pairs.map((item) =>
                    <MDBCol>
                        <MDBCard className='m-1' shadow='0' border='dark' background='dark'>
                            <MDBCardBody className='text-dark'>
                                <MDBCardTitle className='text-white'>{item.id}. {item.title}</MDBCardTitle>
                                <MDBCardText className='text-white'>
                                    <p>Вид товара: {item.group}</p>
                                    <p>Материал: {item.teacher}</p>
                                    <p>Адрес заказчикаe: {item.type}</p>
                                    <p>Tребования: {item.time}</p>
                                </MDBCardText>
                                <Button size={ "sm" } variant={'outline-light'} onClick={()=>{btnInfo=item;toggleShow()}}>
                                    Select
                                </Button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                )}
                <ModalForm active={modal} setActive={setModal} info={btnInfo}/>
            </MDBRow>
        </div>
    );
};

export default Pairs;