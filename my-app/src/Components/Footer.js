import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>О нас</Heading>
            <FooterLink href="/about">О нас</FooterLink>
            <FooterLink href="/news">Новини</FooterLink>
            <FooterLink href="/info1">Довідка для читача</FooterLink>
            <FooterLink href="/info2">Довідка для автора</FooterLink>
          </Column>
          <Column>
            <Heading>Оплата</Heading>
            <FooterLink href="/pay">Методи оплати</FooterLink>
            <FooterLink href="/search">Пошук користувачів</FooterLink>
            <FooterLink href="#"> </FooterLink>
            <FooterLink href="#"> </FooterLink>
          </Column>
          <Column>
            <Heading>Підтримка</Heading>
            <FooterLink href="/sup">Техпідтримка</FooterLink>
            <FooterLink href="https://drive.google.com/file/d/1C-6_nqb_u4H2pqMT71YI0ZT_LAjGftgb/view?usp=share_link">Політика конфеденційності</FooterLink>
            <FooterLink href="/Faq">Правовласникам</FooterLink>
            <FooterLink href="#"> </FooterLink>
          </Column>
          <Column>
            <Heading>Соціальні мережі</Heading>
            <FooterLink href="https://www.facebook.com/ruslan.biedov.9">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/biedovruslan/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/@bedovr">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;