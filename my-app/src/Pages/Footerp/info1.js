import React, { Component } from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";

import Footer from "../../Components/Footer";

import { MDBTypography } from 'mdb-react-ui-kit';
import CardHeader from "react-bootstrap/esm/CardHeader";

export default class Info1 extends Component {
    render() {
        return (
            <>
            <div className="fone">
                <br/>
                <br/>
                <Row  className="mx-5">
                    <Col md="8" style={{marginLeft: "14rem"}}>
                    <Card className="page-title mx-2" border="light">
                    <div>
                        <CardHeader>
                            <Card.Title><MDBTypography variant='h3'>Довідка для читача</MDBTypography></Card.Title>
                            </CardHeader>
                            <Card.Body>
                                <p>Поширені питання, пов'язані з обліковим записом:</p>
                                <ul>
                                    <li>куди пропав мій акаунт?</li>
                                    <li>як потрапити в мій старий акаунт?</li>
                                    <li>в моєму акаунті зникли книги з Бібліотеки!</li>
                                    <li>в моєму акаунті пропав доступ до оплачених книг!</li>
                                </ul>
                                <p>Скоріше за все ви увійшли не в свій старий акаунт, а створили новий. Зазвичай вирішення проблеми дуже просте. Вам потрібно вийти зі свого профілю на сайті, натиснувши на кнопку «вихід», після чого залогінитися знову через іншу соцмережу. Тобто через ту, за допомогою якої ви реєструвалися на нашому сайті, або за допомогою номеру мобільного телефону, якщо ви так реєструвались. Це, найімовірніше, вирішить проблему.</p>
                                <br/>
                                <p className="fw-bold">Платний авторський контент на Сайті </p><p>Платний авторський контент на сайті - це завершені та незавершені твори, які розміщені авторами на Сайті. Ціни, і вміст цього контенту визначається виключно автором, який в будь-який момент може їх змінити. Форма доступу до контенту (скачування файлів або читання з Сайту) також визначається автором і вказано на сторінці контенту.</p>
                                <p className="fw-bold">Повернення</p><p>Повернення грошей здійснюється Сайтом при заявці з боку Автора контенту, тому претензії на якість і кількість контенту необхідно направити Автору контенту.</p>
                            </Card.Body>
                    </div>
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