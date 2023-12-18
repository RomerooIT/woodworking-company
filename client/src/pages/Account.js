import myImage from '../images/woodguru2.png'
import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    // MDBBtn,
    // MDBBreadcrumb,
    // MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
// import axios from 'axios'
// import {Button} from "react-bootstrap";


const Account = () => {
    // const ref = React.useRef(null)
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src={myImage}
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p className="text-muted mb-1">Деревообрабатывающая компания</p>
                                <p className="text-muted mb-4">г. Рогачёв</p>
                                <div className="d-flex justify-content-center mb-2">
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                                        <MDBIcon fas icon="globe fa-lg text-warning" />
                                        <MDBCardText className="text-primary">Часто задаваемые вопросы:</MDBCardText>
                                    </MDBListGroupItem>

                                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                                        <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                        <MDBCardText>
                                            Какие виды древесины вы обрабатываете? <br /> <br />

                                            Мы обрабатываем широкий спектр древесины, включая сосну, ель, дуб, бук, клен и другие породы.
                                        </MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                        <MDBCardText>Какой размер и формат пиломатериалов вы предлагаете? <br /> <br />

                                        Мы предлагаем пиломатериалы различных размеров и форматов, включая доски, бруски и фанеру
                                        </MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                        <MDBCardText>
                                            Можете ли вы выполнить индивидуальный заказ по производству мебели? <br /> <br />
                                            
                                            Да, мы можем разработать и изготовить мебель по вашим уникальным требованиям и предпочтениям.
                                            </MDBCardText>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Услуги</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Изготовление мебели на заказ, продажа пиломатериала, обработка древесины, лесозаготовка</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Эл. почта</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">woodguru@gmail.com</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Номер телефона</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">+375(29) 7147771</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Опыт работы</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted"> более 10 лет</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Адрес</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">ул. Ленина 43, Рогачёв</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">WoodGuru это:</span></MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Качество</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Скорость</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={97} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Креативность</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={95} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Опыт на рынке</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={96} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Плохие отзывы</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={0} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Ошибки</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={0} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1 d-flex justify-content-center align-items-center">Коротко нас:</span></MDBCardText>
                                        <div>
                                        Компания "WoodGuru" - лидер в области обработки дерева и изготовления мебели. Мы специализируемся на создании высококачественных изделий из древесины, объединяя традиционные ремесленные навыки с современными технологиями. <br /> "WoodGuru" гордится своим превосходством в качестве и вниманием к деталям. Мы используем только натуральные и экологически чистые материалы, чтобы создавать продукты, которые прослужат долгие годы и приносят радость нашим клиентам.
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                {/*<input ref={ref}/>
                <button onClick={async () => {
                    axios.post('http://192.168.177.208:3002/api/v1/teachers/event', {
                        "classId": 40,
                        "message": ref?.current.value || "Some text",
                        "teacherId": 41
                    })
                }}>Click me</button>*/}
            </MDBContainer>
        </section>
    );
};

export default Account;