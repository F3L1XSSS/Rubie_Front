import React from 'react';
import { Button } from 'react-bootstrap';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

import Footer from '../../Components/Footer';

function Signup() {
  return (
    <>
    <div className="darks">
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

            <h2 className="fw-bold mb-2 text-uppercase">Реєстрація</h2>
              <p className="text-white-50 mb-5">Будь ласка введіть свій логін і пароль!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Введіть Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Придумайте пароль' id='formControlLg' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Введіть пароль повторно' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Забули пароль?</a></p>
              <Button variant='dark' type='submit' className='mx-2 px-5' color='white' size='lg'>
                Зареєстроватися
              </Button>

              <ul class="social-icons">
  <li><a class="social-icon-twitter" href="https://twitter.com/i/flow/login" title="..." target="_blank" rel="noopener"></a></li>
  <li><a class="social-icon-fb" href="https://www.facebook.com/?stype=lo&jlou=AfcwQ-1XdqT0X9EWsu98OT_fXnDvhfTD1hgJfj7noD-3xQekpGX78hXpsAfOZozxHZt6CxSDOoQgScIlz0FAjxkfJKW4-hmPSW7wRI4lQZBqqA&smuh=37738&lh=Ac-nTKb-R6ytqLj_ywU" title="..." target="_blank" rel="noopener"></a></li>
  <li><a class="social-icon-telegram" href="https://web.telegram.org/k/" title="..." target="_blank" rel="noopener"></a></li>
    </ul>

    <div>
                <p className="mb-0">Вже зареєстровані? <a href="/singin" class="text-white-50 fw-bold">Увійти</a></p>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
    <div className='Footer'>
        <Footer />
    </div>
    </>
  );
}

export default Signup;