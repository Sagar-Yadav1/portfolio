import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../button';

const Services = () => {
    return (
        <div className={styles.services}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={styles.service_head}>
                            <p>Services</p>
                            <span>Here are the services I offer to you.</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.service_col}>
                            <span>UI/UX Designing</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.service_col}>
                            <span>App UI/UX</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.service_col}>
                            <span>Video Editing</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.service_col}>
                            <span>Graphic Design</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.service_col}>
                            <span>Social Media </span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.service_col}>
                            <span>Landing Pages Design</span>
                        </div>
                    </Col>
                    <div className={styles.service_btn}>
                        <Button type={"fill"} text={"View All"} />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Services;