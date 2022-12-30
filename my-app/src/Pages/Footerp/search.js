import React, { Component } from "react";
import { Button, Card, Nav, Form, Row, Col, ListGroup } from "react-bootstrap";

//Assets
import k1 from "../../Assets/k1.jfif";
import k2 from "../../Assets/k2.jfif";
import k3 from "../../Assets/k3.jfif";

import Footer from "../../Components/Footer";

export default class Search extends Component {
    render() {
        return (
            <>
            <div className="fone2">
                <br/>
            <Row>
                <Col sm={9}>
                    <div style={{marginTop: "1rem", marginLeft: "20rem"}}>
                    <Form.Group className="m-4" controlId="formBasicPassword">
                                <Form.Label><h5>Пошук користувачів</h5></Form.Label>
                                <div className="text-center">
                                </div>
                                <Form.Control as="textarea" rows="1" placeholder="Введіть ім'я користувача..." style={{width: '40rem'}}/>
                                <br/>
                                <div style={{marginLeft: "17rem"}}>
                                <Button type="submit" variant="outline-dark" >Шукати</Button>
                                </div>
                            </Form.Group>
                </div>
                               
                </Col>
                <Col md="3">
                        <Card style={{marginTop: "1rem", marginRight: "1rem"}}>
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