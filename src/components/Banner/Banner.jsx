import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation';
import styles from './Banner.module.css'
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    const roles = [".NET Developer", "Web Developer", ".NET Student"];
    const [currentRole, setCurrentRole] = useState('.NET Student');
    const [newRole, setNewRole] = useState('')

    useEffect(() => {
        const index = Math.floor(Math.random()*roles.length);
        const newRole = roles[index];

    })

  return (
    <section className={styles.banner} id='home'>
        <Container className='custom-container'>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my portfolio</span>
                    <h1>Hello! i'm Mathias a <TypeAnimation sequence={['.Net Student',2000,'Web Developer',3000,'.Net Developer',3000]} wrapper="span" cursor={true} repeat={Infinity} /></h1>
                    <p>Hi, I'm Mathias, a passionate student studying .NET development. I'm proficient in C#, Entity Framework, SQL, JavaScript, HTML, CSS, React, and ASP .NET. I love solving problems through software development and am eager to contribute to impactful projects. Let's connect and create something amazing together!</p>
                    <button className={styles.connectBtn}>Let's connect <FaArrowRight /></button>
                </Col>
                <Col xs={12} md={6} xl={7}>
                    <Image src=''></Image>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner