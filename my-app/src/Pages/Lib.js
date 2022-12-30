    import React, {Component} from "react";
    import { Button, Container, Nav, Navbar, Form, Card, TabPane, TabContent, Tab, Row, Col, ListGroup, ListGroupItem, CardImg, NavLink, TabContainer } from "react-bootstrap";
    import { MDBTypography } from 'mdb-react-ui-kit';

    import Footer from "../Components/Footer";

    //Assets
        import Rus from "../Assets/acctest.jfif";
        import Bg from "../Assets/user_bg.jpg";
        import Em from "../Assets/empty.png";

        import k2 from "../Assets/k2.jfif";
        import k1 from "../Assets/k1.jfif";

import CardHeader from "react-bootstrap/esm/CardHeader";
 

export default class Lib extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'None'};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});

        event.preventDefault();
      }

    render() {
        return (
        <div className="fone2">
            <div>
            <Container>
            <Tab.Container defaultActiveKey="c" id="ledt-tabs">
                
             <Row className="mx-5"> 


             <Col sm={9} className=" ">
             <TabContent>              
                        <TabPane eventKey="c">

                        <Card className="page-title mx-2" border="light" style={{marginTop: "5rem"}}>
                <CardHeader>
            <MDBTypography variant='h3'>Бібліотека</MDBTypography>
            </CardHeader>
            <br/>
            <div style={{marginLeft: "50px", marginRight: "50px"}}>

                <Tab.Container id="ledt-tab" defaultActiveKey="now">
            <Card>
      <Card.Header className="fone2">
      <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link data-toggle="tab" eventKey="now" variant="dark"><p style={{color: "black"}}>Читаю зараз</p></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link data-toggle="tab" eventKey="will" variant="dark"><p style={{color: "black"}}>Хочу прочитати</p></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link data-toggle="tab" eventKey="arch" variant="dark"><p style={{color: "black"}}>Архів</p></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link data-toggle="tab" eventKey="blog" variant="dark"><p style={{color: "black"}}>Блоги</p></Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
    <TabContent>
                <TabPane eventKey="now">
                                <div class="maw_content m-3">
                                    <Card className="light-gray">
                                        <Card.Text className="mx-4 m-4 text-center">
                                        <MDBTypography listUnStyled className='mb-0'>
                                            В бібліотеці немає книг
                                </MDBTypography>
                            </Card.Text>
                        </Card>
                    </div>
                </TabPane>

                <TabPane eventKey="will">
                <div class="maw_content m-3">
                                    <Card className="light-gray">
                                        <Card.Text className="mx-4 m-4 text-center">
                                        <MDBTypography listUnStyled className='mb-0'>
                                            В бібліотеці немає книг
                                </MDBTypography>
                            </Card.Text>
                        </Card>
                    </div>
                </TabPane>



            <TabPane eventKey="arch">
                <div class="maw_content m-3">
                                    <Card className="light-gray">
                                        <Card.Text className="mx-4 m-4 text-center">
                                        <MDBTypography listUnStyled className='mb-0'>
                                            В бібліотеці немає книг
                                </MDBTypography>
                            </Card.Text>
                        </Card>
                    </div>
                </TabPane>

                <TabPane eventKey="blog">
                <div class="maw_content m-3">
                                    <Card className="light-gray">
                                        <Card.Text className="mx-4 m-4 text-center">
                                        <MDBTypography listUnStyled className='mb-0'>
                                            Ви ще не додавали записи з блогів у свою бібліотеку
                                </MDBTypography>
                            </Card.Text>
                            </Card>
                        </div>
                </TabPane>
            </TabContent>
        </Tab.Container>
    </div>
    </Card>
    
</TabPane>

            <TabPane eventKey="a">
                <div style={{marginTop: "5rem"}}>
                    <Row className="mx-5"> 
                        <Col md="11" className="mx-5">
                            <Card className="mx-5" border="light">
                                <CardImg src={Bg} style={{position: "relative"}}/>
                                    <CardHeader>
                                        <h5 className="text-center">Ruslan Biedov</h5>
                                        <p className="text-center">Зареєстрований: 11.12.2021</p>
                                    </CardHeader>
                                    <Card.Body>
                                    <div>
                            <Row>
                            <TabContainer defaultActiveKey="aaa">
                        <Col md="4">
                            
                        <Card className='' bg='light'>
                            <Card.Header className="text-center">Меню</Card.Header>
                            <ListGroup variant="flush">
                        <Nav.Link data-toggle="tab" eventKey="aaa">
                            <ListGroup.Item className="htap">Про себе</ListGroup.Item>
                        </Nav.Link>

                        <Nav.Link data-toggle="tab" eventKey="bbb">
                            <ListGroup.Item className="htap">Країна</ListGroup.Item>
                        </Nav.Link>

                        <Nav.Link data-toggle="tab" eventKey="ccc">
                            <ListGroup.Item className="htap">e-mail</ListGroup.Item>
                        </Nav.Link>

                        </ListGroup>
                        </Card>
                        <CardImg src={Rus} style = {{borderRadius: "150px", boxShadow: "0 0 0 3px green, 0 0 13px #333", width: "120px", height: "120px", position: "relative", bottom:"21rem", left:"1rem"}} />
                        </Col>


                        <Col md="8">
                        <Tab.Content>

                        <TabPane eventKey="aaa">
                        
                        <Form>
                            <Form.Group className="m-4" controlId="formBasicPassword"> 
                            <Form.Label><h5>Про себе</h5></Form.Label>              
                        <Form.Control as="textarea" rows="3" placeholder="Напишіть про себе..." />  
                            </Form.Group>
                            <div className="text-center">
                            <Button variant="outline-dark" type="submit" style={{width: "150px"}}>Опубліковати</Button>
                            </div>
                            <br/>
                            </Form>
                        </TabPane>

                        <TabPane eventKey="bbb">
                            <Form.Group className="m-4" controlId="formBasicPassword">
                                <Form.Label><h5>Країна проживання</h5></Form.Label>
                                <Form.Control as="textarea" rows="1" placeholder="Напишіть свою країну..." />
                                <div className="text-center">
                                <Button type="submit" variant="outline-dark" style={{marginTop: "1rem"}}>Зберегти</Button>
                                </div>
                            </Form.Group>
                        </TabPane>

                        <TabPane eventKey="ccc">
                            <Form.Group className="m-4" controlId="formBasicPassword">
                                <Form.Label><h5>E-mail</h5></Form.Label>
                                <Form.Control as="textarea" rows="1" placeholder="Напишіть E-mail..." />
                                <div className="text-center">
                                <Button type="submit" variant="outline-dark" style={{marginTop: "1rem"}}>Зберегти</Button>
                                </div>
                            </Form.Group>
                        </TabPane>
                        </Tab.Content>
                        
                        </Col>
                        </TabContainer>
                    </Row>
            </div>
                   </Card.Body>
                       </Card>
                    </Col>
                </Row>

                               
                    </div>
            </TabPane>

            <TabPane eventKey="b">

            <Card className="fone2 mx-2" border="light" style={{marginTop: "5rem"}}>
                <CardHeader>
            <MDBTypography variant='h3'>Сповіщення</MDBTypography>
            </CardHeader>
                <p className="m-3">Немає сповіщень</p>
            <div style={{marginLeft: "50px", marginRight: "50px"}}>
    </div>
    </Card>
            </TabPane>

            <TabPane eventKey="d">
            <Card className="fone2 mx-2" border="light" style={{marginTop: "5rem"}}>
                <CardHeader>
            <MDBTypography variant='h3'>Відстежую</MDBTypography>
            </CardHeader>
                <p className="m-3">Немає інформації для відображення</p>
            <div style={{marginLeft: "50px", marginRight: "50px"}}>
    </div>
    </Card>
            </TabPane>

            <TabPane eventKey="e">
            <Card className="fone2 mx-2" border="light" style={{marginTop: "5rem"}}>
                <CardHeader>
            <MDBTypography variant='h3'>Мої відстежувачі</MDBTypography>
            </CardHeader>
                <p className="m-3">Немає інформації для відображення</p>
            <div style={{marginLeft: "50px", marginRight: "50px"}}>
    </div>
    </Card>
            </TabPane>

            <TabPane eventKey="f">
            <Card className="fone2 mx-2" border="light" style={{marginTop: "5rem"}}>
                <CardHeader>
            <MDBTypography variant='h3'>Новий твір</MDBTypography>
            </CardHeader>
            <br/>
            <div style={{marginLeft: "50px", marginRight: "50px"}}>
            <Row>
                        <Col md="9">
                        <div class="d-flex m-2">
                            <div class="flex-shrink-0">
                                <img src={Em} alt="..." height="321px" width="225px" class="img-thumbnail"/>
                        </div>
                            <div class="ms-3">
                            <Form.Group className="m-4" controlId="formBasicPassword">
                                <Form.Label><h5>Назва</h5></Form.Label>
                                <Form.Control as="textarea" rows="1" placeholder="Напишіть назву..." style={{width: "20rem"}}/>
                            </Form.Group>

                            <Form.Group onSubmit={this.handleSubmit} className="m-4">
        <Form.Label>
          <h5>Жанр:</h5>
        </Form.Label>
        <br/>
          <select value={this.state.value} onChange={this.handleChange} class="form-select" aria-label="Default select example">
            <option value="None">Не вибрано</option>
            <option value="1">Фентезі</option>
            <option value="2">Cучасна проза</option>
            <option value="3">Жіночій роман</option>
            <option value="4">Любовні романи</option>
            <option value="5">Молодіжна проза</option>
            <option value="6">Фантастика</option>
            <option value="7">Історичний роман</option>
            <option value="8">Фанфік</option>
            <option value="9">Детектив/Трилер</option>
            <option value="10">Містика/Жахи</option>
            <option value="11">Не художня література</option>
            <option value="12">Різне</option>
          </select>
        
      </Form.Group>

                            <Form.Group className="m-4" onSubmit={this.handleSubmit}>
                                <Form.Label>
                                    <h5>Номер Циклу</h5>
                                    </Form.Label>

                                    <br/>
          <select class="form-select" aria-label="Default select example">
                <option value="None">Не вибрано</option>
                <option value="13">Перший</option>
                <option value="14">Наступний</option>
            </select>
                            </Form.Group>


                            </div>
                        </div>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label><h5>Цитати</h5></Form.Label>
                                <Form.Control as="textarea" rows="1" placeholder="Цитата 1" style={{width: "50rem"}}/>
                                <br/>
                                <Form.Control as="textarea" rows="1" placeholder="Цитата 2" style={{width: "50rem"}}/>
                                <br/>
                                <Form.Control as="textarea" rows="1" placeholder="Цитата 3" style={{width: "50rem"}}/>
                            </Form.Group>
                                <br/>
                            <Form.Group controlId="formBasicPassword">
                            <Form.Label><h5>Анотація</h5></Form.Label>
                            <Form.Control as="textarea" rows="4"/>
                            </Form.Group>
                            <br/>
                            <div class="form-check">
                            <input variant="outline-dark" class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <Form.Label class="form-check-label" for="flexCheckDefault">
                            Містить контент 18+
                        </Form.Label>
                            <br/>
                            <br/>
                            <div style={{marginRight: "15rem"}}>
                        <Button variant="outline-dark" type="submit">Зберегти</Button>
                        </div>
                        <br/>
</div>
                        </Col>  
                    </Row>
    </div>
    </Card>
            </TabPane>

            <TabPane eventKey="g">
                <h3>Блоги</h3>
            </TabPane>

            <TabPane eventKey="h">
            <Row>
                    <Col sm="3">
                        <Card className="fone2 mx-2" border="light" style={{marginTop: "5rem"}}>
                            <CardHeader>Твори користувача</CardHeader>
                            <Card.Body>
                            <Nav.Link href="/inf2">
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={k2} style={{height: "10rem", width: "7rem", marginLeft: "1rem"}} />
                                        </Nav.Link>
                                        <br/>
                                        <Nav.Link href="/inf1">
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={k1} style={{height: "10rem", width: "7rem", marginLeft: "1rem"}} />
                                        </Nav.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="8">

                    <TabContainer id="ledt-tab" defaultActiveKey="l30">
                    <Card className="fone2 mx-2" border="light" style={{marginTop: "5rem"}}>
                        <CardHeader className="fone2">
                    <h3> Статистика </h3>
                    </CardHeader>
 
      <Card.Body>
        
      <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link data-toggle="tab" eventKey="l30" variant="dark"><p style={{color: "black"}}>останні 30 днів</p></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link data-toggle="tab" eventKey="mounth" variant="dark"><p style={{color: "black"}}>попередній місяць</p></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link data-toggle="tab" eventKey="year" variant="dark"><p style={{color: "black"}}>За рік</p></Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link data-toggle="tab" eventKey="all" variant="dark"><p style={{color: "black"}}>За весь час</p></Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Body>
    

            <TabContent>
                <TabPane eventKey="l30">
            <div class="maw_content m-3">
                                    <Card className="light-gray">
                                        <Card.Text className="mx-4 m-4">
                                        <MDBTypography listUnStyled className='mb-0'>
                                        Немає прочитань за даний період
                                </MDBTypography>
                            </Card.Text>
                        </Card>
                    </div>
                    </TabPane>

                <TabPane eventKey="mounth">
                <div class="maw_content m-3">
                                    <Card className="light-gray">
                                        <Card.Text className="mx-4 m-4">
                                        <MDBTypography listUnStyled className='mb-0'>
                                        Немає прочитань за даний період
                                </MDBTypography>
                            </Card.Text>
                        </Card>
                    </div>
                </TabPane>

                <TabPane eventKey="year">
                <div class="maw_content m-3">
                                    <Card className="light-gray">
                                        <Card.Text className="mx-4 m-4">
                                        <MDBTypography listUnStyled className='mb-0'>
                                        Немає прочитань за даний період
                                </MDBTypography>
                            </Card.Text>
                        </Card>
                    </div>
                </TabPane>

                <TabPane eventKey="all">
                <div class="maw_content m-3">
                                    <Card className="light-gray">
                                        <Card.Text className="mx-4 m-4">
                                        <MDBTypography listUnStyled className='mb-0'>
                                        Немає прочитань за даний період
                                </MDBTypography>
                            </Card.Text>
                        </Card>
                    </div>
                </TabPane>
            </TabContent>
            </Card>
    </TabContainer>
                    </Col>
                </Row>
            </TabPane>

            <TabPane eventKey="j">
            <Card className="fone2 mx-2" border="light" style={{marginTop: "5rem"}}>
                <CardHeader>
            <MDBTypography variant='h3'>Фінансова історія. Всі операції купівлі</MDBTypography>
            </CardHeader>
                <p className="m-3">Немає інформації для відображення</p>
            <div style={{marginLeft: "50px", marginRight: "50px"}}>
    </div>
    </Card>
            </TabPane>

            </TabContent>
        </Col>
        
<Col sm={3}>
    <Card style={{ width: '18rem', marginTop: "70px"}}>

      <Card.Header>
        <CardImg src={Rus} style = {{borderRadius: "150px", boxShadow: "0 0 0 3px green, 0 0 13px #333", width: "50px", height: "50px"}} />
        <p style={{position: "relative", bottom:"2.5rem", left:"4rem"}}>Ruslan Biedov (author)</p>
      </Card.Header>
      <ListGroup variant="flush">
        <Nav.Link href="/rootacc">
            <ListGroup.Item className="htap" >Моя сторінка</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="a">
            <ListGroup.Item className="htap">Редагувати профіль</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="b">
            <ListGroup.Item className="htap">Сповіщення</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="c">
            <ListGroup.Item className="htap">Бібліотека</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="d">
            <ListGroup.Item className="htap">Відстежую</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="e">
            <ListGroup.Item className="htap">Мoї відстежувачі</ListGroup.Item>
        </Nav.Link>

        <NavLink data-toggle="tab" eventKey="f">
            <ListGroup.Item className="htap">Додати твір</ListGroup.Item>
        </NavLink>

        <Nav.Link data-toggle="tab" eventKey="g">
            <ListGroup.Item className="htap">Мій блог</ListGroup.Item>
        </Nav.Link>

        <Nav.Link data-toggle="tab" eventKey="h">
            <ListGroup.Item className="htap">Статистика</ListGroup.Item>
        </Nav.Link>

            <Card.Header>
            Фінансова інформація
            </Card.Header>

        <Nav.Link data-toggle="tab" eventKey="j">
            <ListGroup.Item className="htap">Фінансова історія</ListGroup.Item>
        </Nav.Link>
      </ListGroup>
    </Card>
    </Col>
    
    </Row>
    
    </Tab.Container>
            </Container>
    
            <br/>
        </div>

                <div className="Footer">
                    <Footer />
                </div>
        </div>
        )
    }
}