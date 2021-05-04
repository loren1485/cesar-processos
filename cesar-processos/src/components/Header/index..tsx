import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import styles from './styles.module.scss';


export default function Header() {
  return (
    <Navbar bg="li">
      <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className={styles.link} href="#">Início</Nav.Link>
        <Nav.Link className={styles.link} href="#">Processos</Nav.Link>
      </Nav>
    </Navbar>
  )
}