import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function ({ sliderItems = [], height = 300 }) {
  return (
    <Carousel>
      {sliderItems.map((s, i) => (
        <Carousel.Item key={i}>
          <img src={s.img} className="d-block w-100" alt="" height={height} />

          <Carousel.Caption className="carousel-caption">
            <h3>{s.tittle}</h3>
            <p>{s.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
