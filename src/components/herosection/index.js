import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../button';
import HeroImg from '../../assets/images/hero.png';

const HeroSection = () => {
    return (
        <Container>
            <Row className={styles.herosection}>
                <Col lg={8} xs={12} className={styles.herocnt}>
                    <h5>HEY, I’M <span>John Doe</span>, A Creative UI/UX DESIGNER.</h5>
                    <p>Hello, I'm John Doe, a UI/UX designer from Pakistan. I have more than one year of experience in designing websites and apps. I've got certificates from Google, and I've worked on creating and improving many websites and apps on my own.</p>
                    <Button type={"fill"} text={"About Me."} customCss={styles.hero_btn} />
                </Col>
                <Col lg={4} xs={12} className={styles.heroimg}>
                    <img src={HeroImg} alt="HeroSection" />
                </Col>
            </Row>
        </Container >
    )
}

export default HeroSection;