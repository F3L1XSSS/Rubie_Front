import React, { Component } from "react";
import { Container, Button, Form, Card, Row, Col, CardGroup, Nav, ListGroup, NavLink, CardImg, TabContent, Tab, TabPane } from "react-bootstrap";
import { MDBTypography } from 'mdb-react-ui-kit';


//Components
import Footer from "../Components/Footer";

export default class Kontakt extends Component{
    render(){
        return(
            <>
              <div className="fone">
                <Row>
                    <Tab.Container id="ledt-tab" defaultActiveKey="a">
              <Col sm={5}>
    <Card style={{marginTop: "5rem"}}>

      <Card.Header>
            <h4>Способи оплати</h4>
      </Card.Header>
      <ListGroup variant="flush">

        <Nav.Link data-toggle="tab" eventKey="a">
            <ListGroup.Item className="htap">Paypal</ListGroup.Item>
        </Nav.Link>


        <Nav.Link data-toggle="tab" eventKey="e">
            <ListGroup.Item className="htap">Monobank</ListGroup.Item>
        </Nav.Link>

        <NavLink data-toggle="tab" eventKey="f">
            <ListGroup.Item className="htap">Приват Банк</ListGroup.Item>
        </NavLink>

        <Nav.Link data-toggle="tab" eventKey="b">
            <ListGroup.Item className="htap">Оплатити картою</ListGroup.Item>
        </Nav.Link>

        </ListGroup>
    </Card>
    </Col>

    <Col sm={7} style={{marginTop: "5rem"}}>
        <TabContent>
            <TabPane eventKey="a">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">PayPal</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <h5 className="text-center">Інформація</h5>
                                        <h5>Ruslan Biedov</h5>
                                                                    <p>
                                                                               Tel.: +1***********<br/>
                                                                               E-mail: bedovruslan@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer&state=%2F">Оплатити</Button>
                                </Card>
                                </TabPane>

                                <TabPane eventKey="b">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">Оплатити картою</h5>
                                    </Card.Header>
                                    <Card.Body>
                                    <h5 className="text-center">Інформація</h5>
                                        <h5>Ruslan Biedov</h5>
                                                                    <p>
                                                                               Tel.: +1***********<br/>
                                                                               E-mail: bedovruslan@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="">Оплатити</Button> <p>*на данний момент оплата не працює</p>
                                </Card>
                                </TabPane>


                                <TabPane eventKey="e">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">Monobank</h5>
                                    </Card.Header>
                                    <Card.Body>
                                    <h5>Ruslan Biedov</h5>
                                                                    <p>
                                                                               Tel.: +1***********<br/>
                                                                               E-mail: bedovruslan@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="">Оплатити</Button> <p>*на данний момент оплата не працює</p>
                                </Card>
                                </TabPane>

                                <TabPane eventKey="f">
    <Card className="mx-5" border="light">
                                    <Card.Header className="yellow">
                                        <h5 className="text-center">Приват Банк</h5>
                                    </Card.Header>
                                    <Card.Body>
                                    <h5>Ruslan Biedov</h5>
                                                                    <p>
                                                                               Tel.: +1***********<br/>
                                                                               E-mail: bedovruslan@gmail.com
                                                                    </p>
                                    </Card.Body>
                                    <Button type="submit" variant="dark" href="">Оплатити</Button> <p>*на данний момент оплата не працює</p>
                                </Card>
                                </TabPane>
                    </TabContent>             
    </Col>
    </Tab.Container>
    </Row>
    <br/>
    <br/>
    <br/>
              </div>
              <div className="Footer">
                <Footer/>
            </div>
            </>
        )
    }
  }