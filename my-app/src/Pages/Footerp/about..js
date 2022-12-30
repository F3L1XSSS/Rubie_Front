import React, { Component } from "react";
import { Button, Nav, Form, Col } from "react-bootstrap";

import logo from "../../Assets/logo.jpg";
import Footer from "../../Components/Footer";

export default class About extends Component {
    render() {
        return (
            <>
            <div className="fone3">
                <div className="red">
                    <br/>
                <div style={{display: "flex", marginLeft: "43%"}}>
                <img
                  src={logo}
                  height="40"
                  width="50"
                  className="d-inline-block align-top text-center"
                  alt="logo"
                  />
                    <h1 className="fw-bolder" style={{marginLeft: "1rem"}}>Rubie</h1>
                    </div>
                    <div className="text-center">
                        <br/>
                        <h5 className="fw-normal">Найкраща літературна платформа в Україні</h5>
                        <br/>
                        </div>
                        <div style={{marginLeft: "42%"}}>
                            <h5 className="fw-normal">
                            <ul>
                                <li>Найкращі збірки</li>
                                <li>Велика кілкість жанрів</li>
                                <li>Lorem ipsum</li>
                            </ul>
                            </h5>
                            </div>
                            <br/>
                </div>
                    <br/>
                    <h2 className="text-center fw-bolder" style={{color: "#7e1e59"}}>ПУБЛІКАЦІЯ КНИГ</h2>
                <br/>
                <Col sm="9">
                <p className="fw-normal text-center" style={{marginRight: "", marginLeft: "22rem"}}>На Rubie автори публікують свої книги на безкоштовній основі або продають їх за передплатою.
                 Таким чином, можна монетизувати книги, які знаходяться в процесі написання. Продаючи чернетки за передплатою, у авторів є можливість заробляти задовго до того, як їх романи будуть завершені.</p>
                </Col>
                <br/>
                <br/>
                <h2 className="text-center fw-bolder" style={{color: "#7e1e59"}}>СПІЛКУЙСЯ НАПРЯМУ З ЧИТАЧАМИ</h2>
                <br/>
                <Col sm="9">
                <p className="fw-normal text-center" style={{marginRight: "", marginLeft: "22rem"}}>Наша система блогів і коментарів дозволяє ознайомити читачів з новинами та отримати відгуки на кожну главу.
                 Спілкування з читачами збільшує число шанувальників, які будуть відслідковувати книги автора в майбутньому.</p>
                </Col>
                <br/>
                <br/>
                    <div className="red">
                    <br/>
                        <div className="text-center">
                            <h1 className="fw-bolder">ЗВІЛЬНІТЬ СВОЮ КРЕАТИВНІСТЬ</h1>
                            <h4 className="fw-normal">Приєднйтеся до родини Rubie</h4>
                            <br/>
                            <Button type="submit" variant="success" href="/lib"><h4 className="fw-bold"> Станьте автором </h4></Button>
                        </div>
                        <br/>
                    </div>
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