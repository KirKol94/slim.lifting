import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBarLink({ to }) {
  return (
    <Link to={to}>
      <Nav.Link as="span" className="text-success" />
    </Link>
  );
}

export default NavBarLink;
