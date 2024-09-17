import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Figma from '../../icons/figma';
import Graphic from '../../icons/graphic';
import Instagram from '../../icons/insta';

const Portfolio = () => {
    return (
        <div className={styles.services}>
            <Container>
                <Row className="g-3">
                    <Col lg={12}>
                        <div className={styles.service_head}>
                            <p>Portfolio</p>
                            <span>Click the cards to view portfolios in the related category.</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.service_col}>
                            <Figma />
                            <p>UI/UX Design</p>
                            <span>I create stunning designs for your UI/UX projects. I can handle any project related to landing page design, e-commerce designs, portfolios, business websites, and more according to your requirements.</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.service_col}>
                            <Graphic />
                            <p>Graphic Design</p>
                            <span>I provide amazing and professional graphic assets for your project, such as social media post design, logo creation, posters, thumbnails, blog graphics, product label design, and many more categories, tailored to your specific requirements. Let me enhance your visual identity with creative and impactful designs.</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.service_col}>
                            <Instagram />
                            <p>Social Media </p>
                            <span>Quality social media post designs are essential for promoting your business online. I specialize in creating engaging and eye-catching posts tailored to your brand. From promotional graphics to event updates, my designs aim to captivate your audience and strengthen your brand identity. Let me help enhance your social media presence with effective visual communication.</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio;