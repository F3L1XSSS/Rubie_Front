import React, {Component} from "react";
import { Button, Card, Carousel, Nav, CardGroup, Row, Col, Form} from "react-bootstrap";
import { MDBTypography } from 'mdb-react-ui-kit';

import Footer from "../../Components/Footer";

export default class Blog extends Component {
    render() {
        return (
            <>
                 <div className="fone">
                    <br/>
                    <Row className="mx-5"> 
                        <Col md="11" className="mx-5">
                        <Card className="page-title mx-5" border="light">
                            <br/>
                            <Card.Title>
                                <h3 className="m-4 text-center">Подарунки!</h3>
                            </Card.Title>
                            <Card.Text>
                            <MDBTypography listUnStyled><p className="m-3">
                            <h5 className="text-center">Вітаю мої любі!</h5>

Не знаю, чи святкуєте ви сьогодні, але подарунки під подушку приготувала))<br/>
Протягом сьогоднішньої доби на дві мої книги з циклу «Омріяне кохання» діятиме знижка 20% Щиро запрошую!<br/>
        <h5 className="text-center">Дихаю тобою</h5>
Чи вірите ви у кохання? Велике й світле почуття, яке дарує крила за спиною? Я не вірила, допоки не зустріла Його... <br/>
Він неочікувано з'явився й забрав з собою моє серце. Відтоді мені належить тільки одна його половина, а інша знаходиться в його руках.<br/>
 І як вчинити, коли в очах чоловіка бачу тільки ненависть? Що робити з коханням, яке так невчасно звалилося на мою голову?<br/>
  Втікати від нього чи зробити крок назустріч?<br/>
    <h5 className="text-center">Мить, що змінила нас </h5>
Ця подорож мала стати гарним відпочинком, веселою прогулянкою, а стала моєю особистою катастрофою. <br/>
Мить — і все перевернулося з ніг на голову. Ми тепер інші. Хлопець, ліпший друг, мій янгол-охоронець, той хто завжди був поруч більше не той.<br/> 
Як врятувати дружбу, що роками була міцнішою за сталь? Та й чи варто це робити, якщо на заміну прийшло почуття набагато сильніше?<br/>
А на додаток маю солоденьке у вигляді нового розділу новинки «Терпкий смак кохання» О п’ятій ранку обов’язково зазирайте у гості до Вікторії,<br/>
вона чекатиме))<br/>
Щиро дякую за увагу.<br/>
Сонячного ранку та мирного дня усім!<br/>
З повагою, Ерін.<br/></p> </MDBTypography>
                            </Card.Text>
                            <Card>
                                <Card.Title>
                                    <h4 className="m-4">Коментарі</h4>
                                </Card.Title>
                                <Card.Body>
                                <Card style={{width: "50rem"}} >
                            <Form.Group className="mb-3 m-4" controlId="formHorizontalEmail">
                            <Form.Label column sm={1}>
                                </Form.Label>   
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Твій коментар" />
                                </Col>
                                <Form.Label column sm={1}>
                                </Form.Label>   
                            </Form.Group>
                                    <h1><br/><br/></h1>
                                    <MDBTypography listUnStyled className='mb-0 text-center'>Ще немає Коментарів...</MDBTypography>
                                    <h1><br/><br/></h1>
                            </Card>
                                </Card.Body>
                            </Card>
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