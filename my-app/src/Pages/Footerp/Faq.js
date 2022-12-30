import React, { Component } from "react";
import { Button, Form, Card, Nav, Col, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

import Footer from "../../Components/Footer";

export default class Faq extends Component {
    render() {
        return (
            <>
            <div className="fone3">
                <br/>
                <Row>
                    <Col md="8" style={{marginLeft: "17rem"}}>
                        <Card>
                            <CardHeader>
                                <Card.Title>Правовласникам</Card.Title>
                            </CardHeader>
                            <Card.Body>
                                <p>Якщо ви виявили у нас на порталі контент, розміщений не його автором, а іншою особою і без авторського дозволу,
                                прохання повідомити нам про це через: <Nav.Link href="sup" style={{color: "blue", display:"flex"}}>Форму зворотного зв'язку</Nav.Link> У темі повідомлення напишіть "порушення авторських прав", а в тексті листа обов'язково вкажіть URL твору-порушника і свій е-мейл для зв'язку. </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
                
                <div className="Footer">
                    <Footer />
                </div>
            </>
        )
    }
}