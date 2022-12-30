import React, { Component } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";

import Footer from "../../Components/Footer";

import { MDBTypography } from 'mdb-react-ui-kit';

export default class Info2 extends Component {
    render() {
        return (
            <>
            <div className="fone">
                <br/>
                <Row  className="mx-5">
                    <Col md="8" style={{marginLeft: "14rem"}}>
                    <Card className="page-title mx-2" border="light">
                    <div>
                        <Card.Header>
                            <Card.Title> <h3 className="fw-normal">Довідка для автора</h3></Card.Title>
                        </Card.Header>

                            <Card.Body>
                                <MDBTypography variant="h3">Принципи работи сайту</MDBTypography>
                                <MDBTypography variant="p">Rubie – це насамперед ресурс безкоштовного самвидаву.
                                 Саме численність безкоштовних текстів приваблює читачів, частина яких у подальшому буде купувати передплату на вашу нову книгу, а також купувати готові електронні книги.
Rubie пропонує авторам три основних напрямки роботи:<br/>
            <ul>
                <li>безкоштовний самвидав (в процесі і завершені книги)</li>
                <li>платна передплата на нову книгу, що публікується</li>
                <li>продаж завершених книг</li>
            </ul>
</MDBTypography>
                            </Card.Body>
                    </div>
                </Card>
                    </Col>
                    <br/>
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