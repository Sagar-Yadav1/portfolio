import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../logo';
import Button from '../button';
import FaceBook from '../../icons/facebook';
import Linkedin from '../../icons/linkdin';
import ColorInsta from '../../icons/colorinsta';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className={styles.footer_sub}>
                            <div className={styles.footer_logo}>
                                <Logo />
                            </div>
                            <div className={styles.footer_btn}>
                                <Button text={"Contact Us"} type={"outline"} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={styles.footer_page}>
                            <ul>
                                <li>HOME</li>
                                <li>WORK</li>
                                <li>BLOG</li>
                                <li>ABOUT</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className={styles.footer_social}>
                            <FaceBook />
                            <Linkedin />
                            <ColorInsta />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;