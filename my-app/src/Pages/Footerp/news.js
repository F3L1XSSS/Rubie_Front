import React, {Component} from "react";
import { Button, Card, Carousel, Nav, CardGroup, Row, Col, Container, ListGroup, CardImg} from "react-bootstrap";
import { MDBTypography } from 'mdb-react-ui-kit';

import Footer from "../../Components/Footer";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default  class News extends Component {
    render() {
        return(
            <>
            <div className="fone">
            <Container>
                    <Row className="mx-5"> 
                        <Col md="9" style={{marginLeft: "8rem"}}>
                        <Card className="page-title mx-5" border="light">
                            <CardHeader>
                            <Card.Title>
                        <h4 className="m-2">
                            Новини
                            </h4>
                            </Card.Title>
                            </CardHeader>
                                <br/>
                            <Card className="mx-4">
                                <Card.Body>
                                    <Nav.Link href="n1">
                                        <Card.Title className="m-2">"Новорічна несподіванка" - конкурс обкладинок<br/></Card.Title>
                                    </Nav.Link>
                                        <Card.Text className="m-2">Друзі! У нашому конкурсі оповідань "Новорічна неспоіванка" з’явилася додаткова номінація - "Конкурс обкладинок".
                                         Автори з найкращими обкладинками отримають додаткову рекламу, а читачі, які напишуть найкращі<Nav.Link href="/n1"><MDBTypography listUnStyled className='blockquote-footer'><p>Читати далі</p></MDBTypography></Nav.Link> </Card.Text>
                                </Card.Body>
                            </Card>
                                <br/>
                            <Card className="mx-4">
                                <Card.Body>
                                    <Nav.Link href="n2">
                                        <Card.Title className="m-2">"Новорічна несподіванка"- термін продовжено<br/></Card.Title>
                                    </Nav.Link>
                                        <Card.Text className="m-2">Друзі, новорічна ніч все ближче, тому і несподіванок стає дедалі більше! Ми вирішили подовжити терміни прийому робіт на конкурс "Новорічна несподіванка". 
                                        Він триватиме до 25 грудня включно. Результати, як і планувалося<Nav.Link href="/n2"><MDBTypography listUnStyled className='blockquote-footer'><p>Читати далі</p></MDBTypography></Nav.Link> </Card.Text>
                                </Card.Body>
                            </Card>
                                <br/>
                        </Card>
                    </Col>
                </Row>
            </Container>
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