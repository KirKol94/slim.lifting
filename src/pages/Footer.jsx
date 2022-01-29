import React from 'react';
import { Col, Container, Navbar } from 'react-bootstrap';
import inst from '../assets/img/icons/inst.png';
import phone from '../assets/img/icons/phone.png';
import vk from '../assets/img/icons/vk.png';
import review1 from '../assets/img/reviews/1.jpg';
import review2 from '../assets/img/reviews/2.jpg';
import review3 from '../assets/img/reviews/3.jpg';
import Carousel from '../components/Carousel';
import FormComponent from '../components/Form';

function Footer() {
  const reviews = [
    { tittle: null, text: null, img: review1 },
    { tittle: null, text: null, img: review2 },
    { tittle: null, text: null, img: review3 },
  ];

  return (
    <>
      <Container>
        <hr className="mt-5 mb-3" />
        <h3 className="text-center">Отзывы о наших услугах</h3>
        <Carousel height="100%" sliderItems={reviews} />
        <hr className="mt-2 mb-5" />

        <FormComponent />
      </Container>

      <Navbar bg="dark" variant="dark" className="footer text-white">
        <Container className="text-center d-flex flex-column align-items-center">
          <h3 className="h5">Наши контакты</h3>
          <Col xs="12" md="4">
            <a href="https://vk.com/studiy_massag_perm">
              <img className="p-2" src={vk} alt="" width={45} height={45} />
            </a>
            <a href="https://instagram.com/sslim.lifting?utm_medium=copy_link">
              <img className="p-2" src={inst} alt="" width={45} height={45} />
            </a>
            <a href="tel:+79024770577">
              <img className="p-2" src={phone} alt="" width={45} height={45} />
            </a>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
