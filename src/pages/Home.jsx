import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import bodyMassage from '../assets/img/massage-img/back-massage.jpeg';
import faceMassage from '../assets/img/massage-img/face-massage.jpg';
import faceSpa from '../assets/img/massage-img/face-spa.jpeg';
import slide from '../assets/img/slide.jpg';
import Carousel from '../components/Carousel';
import HomeCard from '../components/HomeCard';

function Home() {
  const sliderItems = [
    {
      img: slide,
      tittle: 'Мы студия красоты и здоровья sslim.lifting',
      text: 'Немного о нас -->',
    },
    {
      img: slide,
      tittle: 'Мы находимся в центе Перми',
      text: 'ул. 25 Октября 77. Недалеко от трк «Семья»',
    },
    {
      img: slide,
      tittle: 'Наши мастера с медицинским образованием и многолетним опытом',
      text: 'Выполняют свою работу качественно с индивидуальным подходом к каждому клиенту',
    },
    {
      img: slide,
      tittle: 'Демократичные цены',
      text: 'Массаж-знакомство с мастером всего 690₽',
    },
  ];
  const cards = [
    {
      name: 'Массаж лица',
      info: 'Процедура обладает комплексным действием: предотвращает появление морщин, повышает тонус кожи, улучшает кровоснабжение, снимает отеки и улучшает цвет лица. За счет стимуляции кровообращения в процессе массажа кожа насыщается кислородом, усиливаются регенеративные процессы.',
      cost: '790',
      img: faceMassage,
      alt: 'Изображение массажа лица',
    },
    {
      name: 'Общий массаж тела',
      info: 'Общий массаж – это такой вид массажа, который делают от макушки до кончиков пальцев ног, прекрасная оздоравливающая процедура, которая помогает быстро снять усталость, восстановить работоспособность и настроиться на хорошее настроение.',
      cost: '1790',
      img: bodyMassage,
      alt: 'Изображение массажа спины',
    },
    {
      name: 'SPA процедуры',
      info: 'Спа-процедура – комплексное воздействие на организм человека, которое позволяет расслабиться, получить оздоровление и улучшить состояние кожи и психики.',
      cost: '990',
      img: faceSpa,
      alt: 'Изображение SPA-процедуры лица',
    },
  ];

  return (
    <>
      <Carousel sliderItems={sliderItems} />

      <Container>
        <h1 className="text-center mt-5 mb-3">Все наши услуги</h1>

        <CardGroup>
          <Row>
            {cards.map((card, i) => (
              <HomeCard
                key={i}
                name={card.name}
                info={card.info}
                cost={card.cost}
                img={card.img}
                alt={card.alt}
              />
            ))}
          </Row>
        </CardGroup>

        <h3 className="text-center mt-5 mb-xxl-3">
          Мы находимся в центре города
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2114.041777059787!2d56.26105456272151!3d58.00406078265169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e8c6d53c3fefd5%3A0x782c550801c26c75!2z0YPQuy4gMjUg0J7QutGC0Y_QsdGA0Y8sIDc3LCDQn9C10YDQvNGMLCDQn9C10YDQvNGB0LrQuNC5INC60YDQsNC5LCA2MTQwMDc!5e0!3m2!1sru!2sru!4v1643277522115!5m2!1sru!2sru"
          title="location"
          width="100%"
          height="450"
          style={{ border: 0, margintop: '40px' }}
          allowFullScreen=""
          loading="lazy"
        />
      </Container>
    </>
  );
}

export default Home;
