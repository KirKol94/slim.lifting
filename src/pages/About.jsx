import {
  Accordion, Button, Container, Image,
} from 'react-bootstrap';

function About() {
  return (
    <Container>
      <h1 className="text-center mt-5 mb-3">Наши мастера</h1>

      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2>Тимур</h2>
          </Accordion.Header>
          <Accordion.Body className="text-center">
            <Image
              fluid
              src="https://sun9-20.userapi.com/impg/OgruwGQNxA43CEHja8G_SNuk0K97zVYWOj_F5Q/6HxOmwnOC5s.jpg?size=1280x1600&quality=96&sign=1ccb498aa17328d24d8dba0e73d23ffe&type=album"
            />

            <div className="mt-3" style={{ textAlign: 'left' }}>
              <p>Привет! Меня зовут Тимур.</p>
              <p>
                Я занимаюсь массажем почти 2 года. На выбор данного ремесла
                сыграли 2 причины. Во-первых, у меня с детства развита мелкая
                моторика рук. Сами ладони вели меня к тому, что принесёт
                пользу людям.
              </p>
              <p>
                А во-вторых, я всегда увлекался психологией и телесными
                практиками, а соединив их вместе, получил массаж. Более того,
                это ремесло может кормить меня в любой части планеты.
              </p>
            </div>
            <Button
              className="btn btn-dark btn-outline-success"
              style={{ width: 200 }}
              href="#form"
            >
              Записаться
            </Button>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h2>Наталья</h2>
          </Accordion.Header>
          <Accordion.Body className="text-center">
            <Image
              fluid
              src="https://sun9-25.userapi.com/impg/BAELPlKiKkP00ulnmGXSG_3huw1aUjxvzRqKAw/1WjHozgiyow.jpg?size=684x871&quality=96&sign=ba979157b2ff82306ec107cdc4c2d2bd&type=album"
            />
            <div style={{ textAlign: 'left' }}>
              <p>
                Я косметолог и массажист. Помогла многим девушкам решить
                эстетические проблемы лица при помощи массажа и
                профессиональной уходовой косметики. Каждый день возвращаю в
                строй мужчин и женщин при помощи профессионального массажа по
                телу.
              </p>
              <p>
                В массаже я более 20 лет. За это время овладела многими
                техниками.
              </p>
              <h4>Массаж по лицу:</h4>
              <ul>
                <li>Косметический</li>
                <li>Пластический</li>
                <li>Лимфодринажный</li>
                <li>Скульптурирующий</li>
                <li>Моделирующий</li>
              </ul>
              <h4>Процедуры для лица</h4>
              <ul>
                <li>Пилинг</li>
                <li>УЗ-чистка лица</li>
              </ul>
              <h4>Массаж по телу:</h4>
              <ul>
                <li>Классический</li>
                <li>Расслабляющий</li>
                <li>Лимфодринажный</li>
                <li>Тайский</li>
                <li>Медовый</li>
                <li>SPA Процедуры для тела</li>
              </ul>
              <p>
                Чтобы быть с красотой на «ты» постоянно повышаю свой
                профессиональный уровень и прохожу обучения. Принимаю участие
                в семинарах для косметологов и массажистов:
              </p>
              <ul>
                <li>
                  курс «Три шага к идеальному телу: детоксикация, уменьшение
                  объемов, лифтинг»
                </li>
                <li>
                  семинар «Антицеллюлит: «интенсивное воздействие и уход»
                </li>
                <li>
                  семинар по теме «Патогенез отеков. Современный подход
                  лечения»
                </li>
              </ul>
              <p>
                Работая с вами, всегда стараюсь найти индивидуальный подход.
                Подбираю косметические средства с учетом эстетических проблем
                и типов кожи лица. Рекомендую только те массажные процедуры,
                которые помогут, оздоровят, уравновесят.
              </p>
              <p>
                Индустрия красоты не стоит на месте. Появляется много
                аппаратных методик для омоложения, массажеров для лица и тела.
                У клиента всегда есть выбор. Но согласитесь, вряд ли когда-то
                появится более совершенный «аппарат», чем тепло и мастерство
                человеческих рук.
              </p>
            </div>
            <Button
              className="btn btn-dark btn-outline-success"
              style={{ width: '200px' }}
              href="#form"
            >
              Записаться
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default About;
