import React from 'react'
import {Navbar, Nav, Button,Container, Row, Col} from 'react-bootstrap'
import styles from './Navigation.module.css'
import { FaLinkedin, FaLaptopCode } from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar className={styles.navbar}>
        <Container className={styles.customContainer}>
          <Row>
            <Col>
              <Nav>
                <Nav.Link className={styles.a} href="#Home">Home</Nav.Link>
                <Nav.Link className={styles.a} href='#Skills'>Skills</Nav.Link>
                <Nav.Link className={styles.a} href='#Projects'>Projects</Nav.Link>
                <Nav.Link className={styles.a} href='#CV'>CV</Nav.Link>
              </Nav>
            </Col>

            <Col>
              <Nav>
                <Container className={styles.socials}>
                  <Nav.Link className={styles.iconLink}><FaLinkedin className={styles.icon}/></Nav.Link>
                  <button className={styles.contactButton}>Contact</button>
                </Container>
              </Nav>
            </Col>
          </Row>
        </Container>
    </Navbar>
  )
}

export default Navigation