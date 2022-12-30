import React from 'react'
import { Button, Card, Row, Col, Container } from "react-bootstrap"

import Footer from '../../Components/Footer'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Відправити')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Відправка...')
    const { name, email, message, headmessage } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      topic: headmessage.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
    <div className='fone'>
    <Row>
        <Col md="8" style={{marginLeft: "16rem"}}>
    <Card>
    <Container>
        <br/>
      <h2 className="text-center">Технічна підтримка</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
          Ваше ім'я
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
             Ваш E-mail
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='headmessage'>
                Тема
            </label>
            <input className='form-control' id='headmessage' required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Сповіщення
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <br/>
        <div className='text-center'>
        <Button className="btn" variant='outline-dark' type="submit">
          {formStatus}
        </Button>
        </div>
        <br/>
      </form>
    </Container>
    </Card>
    </Col>
    </Row>
    <br/>
</div>
    
<div className='Footer'>
    <Footer />
</div>
</>
  )
}
export default ContactForm