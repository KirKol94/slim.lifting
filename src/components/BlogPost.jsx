import { Col, Image, Row } from 'react-bootstrap';

export default function ({
  img = 'https://images.pexels.com/photos/3644098/pexels-photo-3644098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  tittle = 'blog tittle',
  text = 'blog text',
}) {
  return (
    <Row className="d-flex align-items-center mt-4 ">
      <Col xs="12" sm="3">
        <Image fluid src={img} />
      </Col>
      <Col xs="12" sm="9">
        <h3>{tittle}</h3>
        <p>{text}</p>
      </Col>
      <hr className="mt-1" />
    </Row>
  );
}
