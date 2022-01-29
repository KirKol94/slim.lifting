import {
  Container, Image, Nav, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import NavBarLink from '../components/NavlBarLink';

function Header() {
  const links = [
    { to: '/', name: 'Главная' },
    { to: '/about', name: 'Мастера' },
  ];

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand as="div" className="text-success">
            <Image src={logo} width={50} />
            <span className="m-3">sslim.lifting</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {links.map((link, i) => (
              <NavBarLink key={i} to={link.to} name={link.name} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
