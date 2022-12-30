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
                                    <Card.Title><h2 className="fw-bolder"> Новорічна несподіванка" - терміни подовжено </h2></Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <h5 className="fw-normal">
                                    Друзі!<br/>

                                    Друзі, новорічна ніч все ближче, тому і несподіванок стає дедалі більше!

Ми вирішили подовжити терміни прийому робіт на конкурс "Новорічна несподіванка". Він триватиме до 25 грудня включно. Результати, як і планувалося, оголосимо 30 грудня.

Незважаючи на всі складнощі, кількість бажаючих взяти участь у конкурсі приємно вражає. Тому всі, хто бажає приєднатись до світу чарівної новорічної літератури, матимуть для цього ще більше можливостей.
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