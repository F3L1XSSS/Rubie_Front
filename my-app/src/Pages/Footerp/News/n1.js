import React, { Component } from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import Footer from "../../../Components/Footer";

export default class N1 extends Component {
    render() {
        return (
            <>
                <div className="fone3">
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <Col sm="7" style={{marginLeft: "10rem"}}>
                            <Card>
                                <Card.Header>
                                    <Card.Title><h2 className="fw-bolder"> Новорічна несподіванка" - конкурс обкладинок </h2></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <h5 className="fw-normal">
                                    Друзі!<br/>

                            У нашому конкурсі оповідань "Новорічна неспоіванка" з’явилася додаткова номінація - "Конкурс обкладинок". 
                            Автори з найкращими обкладинками отримають додаткову рекламу, а читачі, 
                            які напишуть найкращі коментарі до обраних обкладинок, отримають персональну зниз до будь-якої платної книги на Rubie.
                            <br/>
                            LoremIpsum
                                    </h5>
                                </Card.Body>
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