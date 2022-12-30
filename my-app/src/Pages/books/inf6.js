import React, { Component } from "react";
import { Row, Col, Nav, NavLink, Container, Tab, TabContent, TabPane, Card, CardGroup, Form, ProgressBar, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBTypography } from 'mdb-react-ui-kit';

//Assets
import k6 from "../../Assets/k6.jfif"

//Components
import Footer from "../../Components/Footer";

export default class Kontakt extends Component{
    render(){
        return(
            <>
            <div className="page-title">
            <Row className="mx-4">
                        <Col md="9" className="mx-4">
                        <div className="d-flex align-items-center m-4 mx-4">
                            <div className="flex-shrink-0 mx-4">
                                <img src={k6} alt="..."  className="img-thumbnail mx-4"/>
                        </div>
                        <div className="mx-4 flex-grow-1 ms-3">
                            <h4 className="mx-4">Lorem Ipsum</h4>
                                <p className="mx-4">Руслан Бєдов</p>
                                <div className="m-4 mx-4">
                                <Button href="/pay" variant="outline-dark">Замовити</Button>
                                </div>
                                </div>
                            </div>
                    </Col>
                </Row>
                    <Container>
                        <Tab.Container id="ledt-tub-example" defaultActiveKey="projekt">
                            <Row>
                                <Col sm={8}>
                                    <Nav className="flex-column mt-2">
                            <ul class="nav nav-tabs">
                                <li class="nav-item mx-3">
                            <Nav.Item>
                                <NavLink data-toggle="tab" eventKey="projekt" variant="dark"><p style={{color: "black"}}>Анотація</p></NavLink>
                            </Nav.Item>     
                                </li>  
                                <li class="nav-item mx-3">                          
                            <Nav.Item>
                                <NavLink data-toggle="tab" eventKey="koment" variant="dark"><p style={{color: "black"}}>Коментарі</p></NavLink>
                            </Nav.Item>
                            </li> 
                                <li class="nav-item mx-3">
                                    <Nav.Item>
                                        <NavLink data-toggle="tab" eventKey="expert" variant="dark"><p style={{color: "black"}}>Аналіз</p></NavLink>
                                    </Nav.Item>
                                </li>
                            <li class="nav-item mx-3">                          
                            <Nav.Item>
                                <NavLink data-toggle="tab" eventKey="document" variant="dark"><p style={{color: "black"}}>Загрузити демо-версію</p></NavLink>
                            </Nav.Item>
                            </li> 
                        </ul>
                    </Nav>
                </Col>
                <TabContent>
                            <TabPane eventKey="projekt">
                                <div class="maw_content m-3">
                                    <Card className="light-gray" style={{width: "50rem"}}>
                                        <Card.Text className="mx-4 m-4">
                                        <MDBTypography listUnStyled className='blockquote-footer mb-0'>
                                        Інформація про книжку
                                </MDBTypography>
                                    </Card.Text>
                                </Card>
                                </div>
                            </TabPane>

                        

                            <TabPane eventKey="koment">
                            <Card style={{width: "50rem"}} >
                            <Form.Group as={Row} className="mb-3 m-4" controlId="formHorizontalEmail">
                            <Form.Label column sm={1}>
                                </Form.Label>   
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Твій комментар" />
                                </Col>
                                <Form.Label column sm={1}>
                                </Form.Label>   
                            </Form.Group>
                                    <h1><br/><br/></h1>
                                    <MDBTypography listUnStyled className='mb-0 text-center'>На цю книжку ще нема коментарів</MDBTypography>
                                    <h1><br/><br/></h1>
                            </Card>
                            </TabPane>

                            <TabPane eventKey="expert">
                            <Card style={{width: "50rem"}} >
                            <Form.Group as={Row} className="mb-3 m-4" controlId="formHorizontalEmail">
                            <Form.Label column sm={1}>
                                </Form.Label>   
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Твій аналіз" />
                                </Col>
                                <Form.Label column sm={1}>
                                </Form.Label>   
                            </Form.Group>
                                    <h1><br/><br/></h1>
                                    <MDBTypography listUnStyled className='mb-0 text-center'>На цю книжку ще нема критики</MDBTypography>
                                    <h1><br/><br/></h1>
                            </Card>
                            </TabPane>

                            <TabPane eventKey="document">
                            <Card style={{width: "50rem"}} >
                                        <Button  href=" " type="submit" variant="outline-dark">Скачати</Button>
                                </Card>
                            </TabPane>
                        </TabContent>
                </Row>                            
            </Tab.Container>
         </Container>
            <br/>
            <br/>
            <br/>
            <br/>

         <div className="Footer">
                <Footer/>
            </div>
        </div>
    
    </>
        )
    }
}