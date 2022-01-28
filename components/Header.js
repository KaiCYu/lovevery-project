import { Nav, Navbar, Container } from 'react-bootstrap';
import Image from 'next/image'
import Logo from '../public/logo-green.svg';

import styles from '../styles/navbar.module.css';


export default function Header() {
  return (
    <Navbar fixed="top" expand="lg">
      <Container>
        <Nav className="me-auto w-100 d-flex justify-content-between">
          <div className="d-flex flex-row">
            <Nav.Link>Shop</Nav.Link>
            <Nav.Link>About us</Nav.Link>
          </div>
          <Image 
            alt=""
            src="/logo-green.svg"
            width="150"
            height="45"
            className="d-inline-block align-top"
          />
          <div className="d-flex flex-row">
            <Nav.Link>Help</Nav.Link>
            <Nav.Link>Sign In</Nav.Link>
            <Nav.Link>Cart</Nav.Link>
          </div>
        </Nav >
      </Container>
    </Navbar>
  )
};