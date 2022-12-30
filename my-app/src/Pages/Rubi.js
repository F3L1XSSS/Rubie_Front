import React, {Component} from "react";
import { Button, Card, Carousel, Nav, CardGroup, Row, Col, ListGroup, CardImg, NavLink} from "react-bootstrap";

//Components
import CarouselBox from "../Components/Carousel";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { MDBTypography } from 'mdb-react-ui-kit';

//Assets
import q1 from "../Assets/q1.jfif";
import q2 from "../Assets/q2.jfif";
import q3 from "../Assets/q3.jfif";

import k1 from "../Assets/k1.jfif";
import k2 from "../Assets/k2.jfif";
import k3 from "../Assets/k3.jfif";
import k4 from "../Assets/k4.jfif";
import k5 from "../Assets/k5.jfif";
import k6 from "../Assets/k6.jfif";

import l1 from "../Assets/l1.jfif";

import s1 from "../Assets/s1.jpg";
import s2 from "../Assets/s2.jpg";

//Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Footer from "../Components/Footer";

export default class Rubi extends Component {
    render() {
        return (
            <>
            <div className="fone">
                    <Row className="mx-5"> 
                        <Col md="9">
                        <Card className="page-title mx-2" border="light">
                    <div>
                    <br/>

                        <Card>
                            <Card.Title className="text-center">Останні оновлення</Card.Title>
                            <Card.Body>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={5}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <CardGroup>
                                <SwiperSlide>
                                    <Nav.Link href="/inf1">
                                     <Card>
                                        <Card.Img className="img" variant="top" src={k1} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf2">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k2} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Nav.Link href="/inf3">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k3} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf4">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k4} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf5">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k5} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf6">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k6} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>


                                </CardGroup>
                            </Swiper>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Carousel>
      <Carousel.Item>
        <img
        style={{height:"300px", width: "100%"}}
          src={s1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:"300px", width: "100%"}}
          src={s2}
          alt="Second slide"
        />

      </Carousel.Item>
      </Carousel>
                        <br/>
                        <Card>
                            <Card.Title className="text-center">Гарячі новинки</Card.Title>
                            <Card.Body>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={5}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <CardGroup>
                                <SwiperSlide>
                                    <Nav.Link href="/inf1">
                                     <Card>
                                        <Card.Img className="img" variant="top" src={k1} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf2">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k2} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Nav.Link href="/inf3">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k3} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf4">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k4} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf5">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k5} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf6">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k6} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>


                                </CardGroup>
                            </Swiper>
                            </Card.Body>
                        </Card>

                        <br/>
                        <br/>
                        <Card>
                            <Card.Title className="text-center">Бестселери</Card.Title>
                            <Card.Body>
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={5}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <CardGroup>
                                <SwiperSlide>
                                    <Nav.Link href="/inf1">
                                     <Card>
                                        <Card.Img className="img" variant="top" src={k1} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf2">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k2} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Nav.Link href="/inf3">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k3} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf4">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k4} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf5">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k5} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <Nav.Link href="/inf6">
                                    <Card>
                                    <Card.Img className="img" variant="top" src={k6} />
                                        <Card.Title> </Card.Title>
                                        <Card.Text className="text-center"> Lorem Ipsum</Card.Text>
                                    </Card>
                                    </Nav.Link>
                                </SwiperSlide>


                                </CardGroup>
                            </Swiper>
                            </Card.Body>
                        </Card>
                        <br/>
                        <br/>
                        <Card>
                            <Card.Title><h4 style={{ marginLeft:"20px"}}>Про Рубие</h4></Card.Title>
                            <Card.Text>
                                <h5 style={{ marginLeft:"20px"}}>Рубие - це літературна платформа для читачів та письменників</h5>

<p style={{ marginLeft:"20px", marginRight:"15px"}}>В нашій електронній бібліотеці можна як читати онлайн, так і скачати книги безкоштовно, а також купити книги популярних жанрів. У нас є мобільна версія сайту, завдяки чому можна комфортно читати книги онлайн з телефону або планшету. Зручно читати з будь-якого браузера на смартфоні і зі звичайного комп'ютера. Для системи Android розроблений окремий додаток-читалка. Легко завантажити і читати книги для підлітків, бойовики, детективи, а також трилери. Вам цікаві фанфіки? Гумор? Різні жанри творів? Тоді ви прийшли за адресою, адже кращі електронні книги чекають Вас тут!

На РУБІ Ви можете читати найбільш популярні жанри:<br/>
<ul>
    <NavLink>
<li className="link">любовні романи;</li>
</NavLink>
<NavLink>
<li className="link">фентезі;</li>
</NavLink>
<NavLink>
<li className="link">фантастика;</li>
</NavLink>
<NavLink>
<li className="link">жіноча проза.</li>
</NavLink>
</ul>
На нашій літературній платформі талановиті письменники можуть легко реалізувати власний талант, публікуючи нові книги, оповідання чи романи. Тут відбувається живе спілкування в коментарях між активними авторами і читачами, що позитивно сприяє збільшенню  читацької аудиторії та шанувальників. Після набуття популярності на платформі автор може стати комерційним і продавати власні електронні книги за передплатою (продаж доступу до твору в процесі написання), а також як завершені твори. Наразі на сайті діє 3 мовні версії:
<ul>
<li>українська;</li>
<li>англійська;</li>
</ul>
Наша безкоштовна бібліотека щоденно поповнюється новими творами від популярних авторів, молодих талантів і вже налічує понад 50 000 електронних книг, які можна безкоштовно завантажити у зручному форматі .fb2 або купити електронні книги у Ваших улюблених авторів.

Ви читаєте фантастику, сучасну прозу, еротику, чи бойовик? Хочете знайти найпопулярніші книги за жанром? Вам допоможе зручна система рейтингів, пошук книг, авторів і серій.

На нашому сайті Ви знайдете безліч романів про мільйонерів, а також інші напрямки любовних романів, до того ж ви зможете читати безкоштовно книги онлайн без реєстрації. Вибір книг онлайн ще ніколи не був такий простий. Історичні романи, жіночі книги, книги для дівчаток і книги для молоді, фантастика, і, звичайно ж, книги про кохання також дуже легко знайти на Рубие.</p>
                            </Card.Text>
                        </Card>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    </Card>
                </Col>

                <Col md="3">
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Card>
                                            <Card.Header><h4 className="text-center">Популярні</h4></Card.Header>
                                            <Nav.Link href="/inf1">
                                                <Row>
                                                    <Col sm={5}>
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={k1} style={{height: "10rem", width: "7rem"}} />
                                        </Col>
                                        <Col sm={7}>
                                            <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Ruslan Biedov</h5>
                                            <p className="text-center" style={{marginRight: "30px"}}>Разум черного короля</p>
                                        </Col>
                                                </Row>
                                    </Nav.Link>
                                        <br/>
                                            <Nav.Link href="/inf2">
                                                <Row>
                                                    <Col sm={5}>
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={k2} style={{height: "10rem", width: "7rem"}} />
                                        </Col>
                                        <Col sm={7}>
                                        <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Ruslan Biedov</h5>
                                            <p className="text-center" style={{marginRight: "30px"}}>Русский богатырь и лесное воинство</p>
                                        </Col>
                                                </Row>
                                    </Nav.Link>
                                    <br/>
                                            <Nav.Link href="/inf3">
                                                <Row>
                                                    <Col sm={5}>
                                        <Card.Img className="img btn img-thumbnail" variant="top" src={k3} style={{height: "10rem", width: "7rem"}} />                                          
                                        </Col>
                                        <Col sm={7}>
                                        <h5 className="text-center" style={{marginTop: "30px", marginRight: "30px"}}>Ruslan Biedov</h5>
                                            <p className="text-center" style={{marginRight: "30px"}}>Лавка богов</p>
                                        </Col>
                                                </Row>
                                    </Nav.Link>
                                    </Card>

                                </ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className='mt-3' bg='light'>
                            <Card.Body>
                            <Card.Header><h5 className="text-center">Місце для реклами</h5></Card.Header>
                                <Card.Text></Card.Text>
                                <CardImg className="img" variant="top" src={l1} />
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