import React, { Component, useState } from "react";
import { Button, Container, Nav, Navbar, Form, Dropdown, DropdownButton, NavLink } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

//Pages
import Rubi from "../Pages/Rubi";
import Blog from "../Pages/blog";
import Lib from "../Pages/Lib";

import A1 from "../Pages/blog/a1";
import A2 from "../Pages/blog/a2";

import Inf1 from "../Pages/books/inf1";
import Inf2 from "../Pages/books/inf2";
import Inf3 from "../Pages/books/inf3";
import Inf4 from "../Pages/books/inf4";
import Inf5 from "../Pages/books/inf5";
import Inf6 from "../Pages/books/inf6";

import B0 from "../Pages/genre/b0";
import B1 from "../Pages/genre/b1";
import B2 from "../Pages/genre/b2";
import B3 from "../Pages/genre/b3";
import B4 from "../Pages/genre/b4";
import B5 from "../Pages/genre/b5";
import B6 from "../Pages/genre/b6";
import B7 from "../Pages/genre/b7";
import B8 from "../Pages/genre/b8";
import B9 from "../Pages/genre/b9";
import B10 from "../Pages/genre/b10";
import B11 from "../Pages/genre/b11";
import B12 from "../Pages/genre/b12";
import B13 from "../Pages/genre/b13";

import Root from "../Pages/rootacc/Root";

import Singin from "../Pages/Sing/Singin";
import Signup from "../Pages/Sing/Singup";

import Pay from "../Pages/Pay";

import Search from "../Pages/Footerp/search";
import Info1 from "../Pages/Footerp/info1";
import Info2 from "../Pages/Footerp/info2";
import News from "../Pages/Footerp/news";
import Sup from "../Pages/Footerp/support";
import About from "../Pages/Footerp/about.";
import Faq from "../Pages/Footerp/Faq";

//directory
import N1 from "../Pages/Footerp/News/n1";
import N2 from "../Pages/Footerp/News/n2";
//Assets
import logo from "../Assets/logo1.png"

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={{style}}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Шукати..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled" >
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );
export default class Header extends Component {

    render() {

        
            return (
            <>
            <Navbar className="fone"
                sticky="top"
                collapseOnSelect
                variant="info"
                expand="lg"
            >
                <Container>
                <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="40"
                  width="30"
                  className="d-inline-block align-top text-center"
                  alt="logo"
                  style={{marginBottom: "10px"}}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/"><p style={{color: "black"}}> Головна </p></Nav.Link>
                  <Nav.Link href="/lib"><p style={{color: "black"}}>Бібліотека</p></Nav.Link>
                  <Nav.Link href="/blog"><p style={{color: "black"}}> Блоги </p></Nav.Link>

                  <Dropdown style={{marginLeft: "5px", marginTop: "8px", color: "black"}}> 
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
     Жанри
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item eventKey="1" href="/b0">Всі жанри</Dropdown.Item>
      <Dropdown.Item eventKey="2" href="/b1">Любовні романи</Dropdown.Item>
      <Dropdown.Item eventKey="3" href="/b2">Еротика </Dropdown.Item>
      <Dropdown.Item eventKey="4" href="/b3">Бойовик</Dropdown.Item>
      <Dropdown.Item eventKey="5" href="/b4">Містика/Жахи</Dropdown.Item>
      <Dropdown.Item eventKey="6" href="/b5">Історичний роман</Dropdown.Item>
      <Dropdown.Item eventKey="7" href="/b6">Детектив</Dropdown.Item>
      <Dropdown.Item eventKey="8" href="/b7">Дитяча література</Dropdown.Item>
      <Dropdown.Item eventKey="9" href="/b8">Фентезі</Dropdown.Item>
      <Dropdown.Item eventKey="10" href="/b9">Молодіжна проза</Dropdown.Item>
      <Dropdown.Item eventKey="11" href="/b10">Трилер</Dropdown.Item>
      <Dropdown.Item eventKey="12" href="/b11">Різне</Dropdown.Item>
      <Dropdown.Item eventKey="13" href="/b12">Жіночий роман</Dropdown.Item>
      <Dropdown.Item eventKey="14" href="/b13">Фантастика</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

                </Nav>
                <Form className= "d-flex">
                <Button href="/singin" variant="outline-dark m-2">Вхід</Button>
                <Button href="/singup" variant="dark m-2">Рєєстрація</Button>
            </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route path="/" element = {<Rubi />} />
                    <Route path="/blog" element = {<Blog />} />
                    <Route path="/lib" element = {<Lib />} />

                    <Route path="/a1" element = {<A1 />} />
                    <Route path="/a2" element = {<A2 />} />

                    <Route path="/inf1" element = {<Inf1 />} />
                    <Route path="/inf2" element = {<Inf2 />} />
                    <Route path="/inf3" element = {<Inf3 />} />
                    <Route path="/inf4" element = {<Inf4 />} />
                    <Route path="/inf5" element = {<Inf5 />} />
                    <Route path="/inf6" element = {<Inf6 />} />

                    <Route path="/rootacc" element = {<Root />} />

                    <Route path="/singin" element = {<Singin />} />
                    <Route path="/singup" element = {<Signup />} />

                    <Route path="/pay" element = {<Pay />} />

                    <Route path="/b0" element = {<B0 />} />
                    <Route path="/b1" element = {<B1 />} />
                    <Route path="/b2" element = {<B2 />} />
                    <Route path="/b3" element = {<B3 />} />
                    <Route path="/b4" element = {<B4 />} />
                    <Route path="/b5" element = {<B5 />} />
                    <Route path="/b6" element = {<B6 />} />
                    <Route path="/b7" element = {<B7 />} />
                    <Route path="/b8" element = {<B8 />} />
                    <Route path="/b9" element = {<B9 />} />
                    <Route path="/b10" element = {<B10 />} />
                    <Route path="/b11" element = {<B11 />} />
                    <Route path="/b12" element = {<B12 />} />
                    <Route path="/b13" element = {<B13 />} />

                    <Route path="/search" element = {<Search />} />
                    <Route path="/info1" element = {<Info1 />} />
                    <Route path="/info2" element = {<Info2 />} />
                    <Route path="/news" element = {<News />} />
                    <Route path="/sup" element = {<Sup />} />
                    <Route path="/about" element = {<About />} />
                    <Route path="/faq" element = {<Faq />} />

                    <Route path="n1" element = {<N1 />} />
                    <Route path="n2" element = {<N2 />} />
                </Routes>
            </Router>
        </>
            )
    }
    
}