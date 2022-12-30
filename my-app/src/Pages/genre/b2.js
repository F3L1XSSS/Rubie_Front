import React, {Component} from "react";
import { Button, Card, Carousel, Nav, CardGroup, Row, Col, Container, ListGroup, CardImg, NavLink} from "react-bootstrap";
import { MDBTypography } from 'mdb-react-ui-kit';

import Footer from "../../Components/Footer";

//Assets
import k1 from "../../Assets/k1.jfif";
import k2 from "../../Assets/k2.jfif";
import k3 from "../../Assets/k3.jfif";

import l1 from "../../Assets/l1.jfif";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default class b2 extends Component {
    render() {
        return (
            <>
            <div className="fone">
            <Container>
                    <Row> 
                        <Col md="8">
                        
                        <Card className="page-title" border="light">
                            <br/>
                            <Card.Title>
                                <CardHeader>
                        <h4>
                        Еротика: кращі книги в жанрі
                            </h4>
                            </CardHeader>
                            </Card.Title>
                            <NavLink href="/inf1">
                            <div class="d-flex align-items-center">
                    <div class="flex-shrink-0"className='m-3'>
                <CardImg 
                width={100}
                height={150}
                src={k1}
                alt="Blog post"
                className="img btn"
                />
            </div>
                <div class="flex-grow-1 ms-3">
                    <h5>Разум черного короля</h5>
                    <p>Руслан Бедов</p>
                    <p>Опис</p>
            </div>
        </div>
        </NavLink>
        </Card>
                    </Col>

                    <Col md="4">
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Card>
                                            <Card.Header><h4 className="text-center">Набирають популярність</h4></Card.Header>
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