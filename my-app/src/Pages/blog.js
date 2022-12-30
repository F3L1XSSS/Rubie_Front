import React, {Component} from "react";
import { Button, Card, Carousel, Nav, CardGroup, Row, Col, Container, ListGroup, CardImg} from "react-bootstrap";
import { MDBTypography } from 'mdb-react-ui-kit';

import Footer from "../Components/Footer";

//Assets
import k1 from "../Assets/k1.jfif";
import k2 from "../Assets/k2.jfif";
import k3 from "../Assets/k3.jfif";

import l1 from "../Assets/l1.jfif";

export default class Blog extends Component {
    render() {
        return (
            <>
            <div className="fone">
            <Container>
                    <Row className="mx-5"> 
                        <Col md="8" className="">
                        <Card className="page-title mx-5" border="light">
                            <br/>
                            <Card.Title>
                        <h4 className="mb-0 m-4">
                            Літературні Блоги
                            </h4>
                            </Card.Title>
                            <br/>

                            <Card className="mx-4">
                                <Card.Body>
                                    <Nav.Link href="a1">
                                        <Card.Title className="m-2">Залоковано книгу :(<br/></Card.Title>
                                    </Nav.Link>
                                        <Card.Text className="m-2">Мою книгу "Пухкенька я" заблокували, хоча еротичних сцен там не було, але модератори вважають інакше)<br/>
                                         Я вимушена змінити вік головної героїні) тепер вона буде ученицею ВУЗу)<br/> 
                                         Тобто повнолітньою) Хух, не приємно, особливо... <Nav.Link href="/a1"><MDBTypography listUnStyled className='blockquote-footer mb-0'><p>Читати далі</p></MDBTypography></Nav.Link> </Card.Text>
                                </Card.Body>
                            </Card>
                                <br/>
                                <br/>
                            <Card className="mx-4">
                                <Card.Body>
                                    <Nav.Link href="a2">
                                        <Card.Title className="m-2">Подарунки!<br/></Card.Title>
                                    </Nav.Link>
                                        <Card.Text className="m-2">Вітаю мої любі! Не знаю, чи святкуєте ви сьогодні, але подарунки під подушку приготувала))<br/>
                                         Протягом сьогоднішньої доби на дві мої книги з циклу «Омріяне кохання» діятиме знижка 20% Щиро запрошую!<br/>
                                         Дихаю тобою... <Nav.Link href="/a2"><MDBTypography listUnStyled className='blockquote-footer mb-0'><p>Читати далі</p></MDBTypography></Nav.Link> </Card.Text>
                                </Card.Body>
                            </Card> 
                                <br/>
                                <br/>

                                <Card className="mx-4">
                                <Card.Body>
                                    <Nav.Link href="a1">
                                        <Card.Title className="m-2">Заблоковано книгу :(<br/></Card.Title>
                                    </Nav.Link>
                                        <Card.Text className="m-2">Мою книгу "Пухкенька я" заблокували, хоча еротичних сцен там не було, але модератори вважають інакше)<br/>
                                         Я вимушена змінити вік головної героїні) тепер вона буде ученицею ВУЗу)<br/> 
                                         Тобто повнолітньою) Хух, не приємно, особливо... <Nav.Link href="/a1"><MDBTypography listUnStyled className='blockquote-footer mb-0'><p>Читати далі</p></MDBTypography></Nav.Link> </Card.Text>
                                </Card.Body>
                            </Card>
                                <br/>
                                <br/>
                            <Card className="mx-4">
                                <Card.Body>
                                    <Nav.Link href="a2">
                                        <Card.Title className="m-2">Подарунки!<br/></Card.Title>
                                    </Nav.Link>
                                        <Card.Text className="m-2">Вітаю мої любі! Не знаю, чи святкуєте ви сьогодні, але подарунки під подушку приготувала))<br/>
                                         Протягом сьогоднішньої доби на дві мої книги з циклу «Омріяне кохання» діятиме знижка 20% Щиро запрошую!<br/>
                                         Дихаю тобою... <Nav.Link href="/a2"><MDBTypography listUnStyled className='blockquote-footer mb-0'><p>Читати далі</p></MDBTypography></Nav.Link> </Card.Text>
                                </Card.Body>
                            </Card> 
                                <br/>
                        </Card>
                    </Col>

                    <Col md="4">
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Card>
                                            <Card.Header><h4 className="text-center">Популярні</h4></Card.Header>
                                            <Nav.Link href="/inf1">
                                                <Row>
                                                    <Col sm={5}>
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={k1} style={{height: "10rem", width: "7rem"}} />
                                        </Col>
                                        <Col sm={7}>
                                            <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Ruslan Biedov</h5>
                                            <p className="text-center" style={{marginRight: "30px"}}>Разум черного короля</p>
                                        </Col>
                                                </Row>
                                    </Nav.Link>
                                        <br/>
                                            <Nav.Link href="/inf2">
                                                <Row>
                                                    <Col sm={5}>
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={k2} style={{height: "10rem", width: "7rem"}} />
                                        </Col>
                                        <Col sm={7}>
                                        <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Ruslan Biedov</h5>
                                            <p className="text-center" style={{marginRight: "30px"}}>Русский богатырь и лесное воинство</p>
                                        </Col>
                                                </Row>
                                    </Nav.Link>
                                    <br/>
                                            <Nav.Link href="/inf3">
                                                <Row>
                                                    <Col sm={5}>
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={k3} style={{height: "10rem", width: "7rem"}} />                                          
                                        </Col>
                                        <Col sm={7}>
                                        <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Ruslan Biedov</h5>
                                            <p className="text-center" style={{marginRight: "30px"}}>Лавка богов</p>
                                        </Col>
                                                </Row>
                                    </Nav.Link>
                                    </Card>

                                </ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className='mt-3' bg='light'>
                            <Card.Body>
                            <Card.Header><h5 className="text-center">Місце для реклами</h5></Card.Header>
                                <Card.Text></Card.Text>
                                <CardImg className="img" variant="top" src={l1} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
            </Container>
        </div>
                <div className="Footer">
                    <Footer />
                </div>
            </>
        )
    }
}