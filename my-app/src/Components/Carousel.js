import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

//Assets
import q1 from "../Assets/q1.jfif";
import q2 from "../Assets/q2.jfif";
import q3 from "../Assets/q3.jfif";

export default class Home extends Component{
    render(){
        return(

            <Carousel>

                <Carousel.Item className="text-center">
                <img
                        style={{height: "10rem", width: "20rem"}}
                        className="d-block"
                        src={q1}
                        alt="q1"
                        />
                    <Carousel.Caption>
                        <h4> </h4>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                            style={{height: "10rem", width: "20rem"}}
                            className="d-block"
                            src={q2}
                            alt="q2"
                            />
                        <Carousel.Caption>
                            <h4>
                            </h4>
                        </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                            style={{height: "10rem", width: "20rem"}}
                            className="d-block"
                            src={q3}
                            alt="q3"
                            />
                        <Carousel.Caption>
                            <h4>
                            </h4>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}