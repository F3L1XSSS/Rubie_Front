import React, {Component} from "react";
import { Button, Card, Carousel, Nav, CardGroup, Row, Col, Form} from "react-bootstrap";
import { MDBTypography } from 'mdb-react-ui-kit';

import Footer from "../../Components/Footer";

export default class Blog extends Component {
    render() {
        return (
            <>
                 <div className="fone">
                    <br/>
                    <Row className="mx-5"> 
                        <Col md="11" className="mx-5">
                        <Card className="page-title mx-5" border="light">
                            <br/>
                            <Card.Title>
                                <h4 className="m-4">Зоблоковано книгу :(</h4>
                            </Card.Title>
                            <Card.Text>
                            <MDBTypography listUnStyled><p className="m-3">
                            Мою книгу "Пухкенька я" заблокували, хоча еротичних сцен там не було, але модератори вважають інакше)<br/> 
                            Я вимушена змінити вік головної героїні) тепер вона буде ученицею ВУЗу) Тобто повнолітньою)<br/>

                                Хух, не приємно, особливо коли стільки старань вкладено) Ну, нічого, можливо, через те, що я з Фікбуку,<br/>
                             а там немає такої жорстокої політики, то я ще не розумію багато чього)<br/>

                            Почекайте, будь ласка, я все виправлю і подам заявку на знаття з бану))</p> </MDBTypography>
                            </Card.Text>
                            <Card>
                                <Card.Title>
                                    <h4 className="m-4">Коментарі</h4>
                                </Card.Title>
                                <Card.Body>
                                <Card style={{width: "50rem"}} >
                            <Form.Group className="mb-3 m-4" controlId="formHorizontalEmail">
                            <Form.Label column sm={1}>
                                </Form.Label>   
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Твій коментар" />
                                </Col>
                                <Form.Label column sm={1}>
                                </Form.Label>   
                            </Form.Group>
                                    <h1><br/><br/></h1>
                                    <MDBTypography listUnStyled className='mb-0 text-center'>Ще немає Коментарів...</MDBTypography>
                                    <h1><br/><br/></h1>
                            </Card>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>
                </Row>
                <br/>
            </div>
            <div className="Footer">
                <Footer />
            </div>
            </>
        )
        }
    }