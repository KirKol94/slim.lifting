import {
  Accordion, Button, Card, Col, Image,
} from 'react-bootstrap';

function HomeCard({
  info, img, alt, cost,
}) {
  return (
    <Col xs="12" sm="4">
      <Card className="p-2 mt-3">
        <Image fluid src={img} variant="top" alt={alt} />
        <Card.Title />
        <Card.Text>
          <label>
            Цена:
            {cost}
            ₽
          </label>
        </Card.Text>
        <Accordion defaultActiveKey={false}>
          <Accordion.Item>
            <Accordion.Header className="w-100">Подробнее</Accordion.Header>
            <Accordion.Body>
              <p>{info}</p>
              <Button
                className="btn btn-dark btn-outline-success w-100"
                href="#form"
              >
                Записаться
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Col>
  );
}

export default HomeCard;
