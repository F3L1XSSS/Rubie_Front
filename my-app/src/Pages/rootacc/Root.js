import React, {Component} from "react";
import { Button, Container, Nav, Navbar, Form, Card, TabPane, TabContent, Tab, Row, Col, ListGroup, ListGroupItem, CardImg, TabContainer, NavItem } from "react-bootstrap";
import { MDBTypography } from 'mdb-react-ui-kit';

import Footer from "../../Components/Footer";

//Assets
    import Rus from "../../Assets/acctest.jfif";
    import Bg from "../../Assets/user_bg.jpg";

    import k1 from "../../Assets/k1.jfif";
    import k2 from "../../Assets/k2.jfif";
    import k3 from "../../Assets/k3.jfif";
    
    import l1 from "../../Assets/l1.jfif";


export default class Root extends Component {
render() {
    return (
        <div className="fone2">
            <Container>
            <Tab.Container id="ledt-tab" defaultActiveKey="komm" >
            <div>
            <Row className="mx-5"> 
                        <Col md="11" className="mx-5">
                        <Card className="mx-5" border="light">
                                <CardImg src={Bg} style={{position: "relative"}}/>

                                <Card.Header>
                                    <Nav variant="tabs">
                                        
                                        <NavItem>
                                        <Nav.Link data-toggle="tab" variant="dark" style={{width: "10rem"}}> </Nav.Link>
                                        </NavItem>

                                        <Nav.Item>
                                            <Nav.Link data-toggle="tab" eventKey="komm" variant="dark"><p style={{color: "black"}}>Коментарі</p></Nav.Link>
                                        </Nav.Item>
                                            
                                        <Nav.Item> 
                                            <Nav.Link data-toggle="tab" eventKey="about" variant="dark"><p style={{color: "black"}}>Про мене</p></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Card.Header>
                                    <Card.Body>
                                    <div>
                            <Row>
                        <Col md="3">
                        <Card className='' bg='light'>
                            <Card.Header className="text-center">Меню</Card.Header>
                            <ListGroup variant="flush"  defaultActiveKey="aa">
                        <Nav.Link data-toggle="tab" eventKey="aa">
                            <ListGroup.Item className="htap">Мої книги</ListGroup.Item>
                        </Nav.Link>

                        <Nav.Link data-toggle="tab" eventKey="bb">
                            <ListGroup.Item className="htap">Я читаю</ListGroup.Item>
                        </Nav.Link>

                        <Nav.Link data-toggle="tab" eventKey="cc">
                            <ListGroup.Item className="htap">Мої рецензії</ListGroup.Item>
                        </Nav.Link>
                        </ListGroup>
                        </Card>
                        <CardImg src={Rus} style = {{borderRadius: "150px", boxShadow: "0 0 0 3px green, 0 0 13px #333", width: "120px", height: "120px", position: "relative", bottom:"21rem", left:"1rem"}} />
                    </Col>

                    
                    <Col md='5'>
                    <Tab.Content>
                    <Tab.Pane eventKey="komm">
                    <Card style={{width: "40rem"}} >
                    <Form>
                            <h4 className="text-center">0 Коментарів</h4>
                            
                            <Form.Group className="m-4" controlId="formBasicPassword"> 
                            <Form.Label> </Form.Label>              
                        <Form.Control as="textarea" rows="3" placeholder="Напишіть свій коментар..." />  
                            </Form.Group>
                            <div className="text-center">
                            <Button variant="outline-dark" type="submit" style={{width: "150px"}}>Опубліковати</Button>
                            </div>
                            <br/>
                            </Form>
                            </Card>
                        </Tab.Pane>
                        

                        <TabPane eventKey="about">
                            <h4>Про мене</h4>
                            <p>...</p>
                            <p>Зарєєстрований 11.12.2022</p>
                        </TabPane>

                        <TabPane eventKey="aa">
                            <h4>Мої книги</h4>
                                <p>Нємає жодної книги</p>
                        </TabPane>

                        <TabPane eventKey="bb">
                            <h4>Поточні книги</h4>
                                <p>Нємає поточних книг</p>
                        </TabPane>

                        <TabPane eventKey="cc">
                            <h4>Мої рецензії</h4>
                                <p>Нємає рецензій</p>
                        </TabPane>
                        </Tab.Content>
                    </Col>
                </Row>
            </div>
                   </Card.Body>
                       </Card>
                    </Col>
                </Row>

                               
                    </div>

            </Tab.Container>
            </Container>
        <br/>
        <div className="Footer">
        <Footer />
    </div>
    </div>
        )
    }
}