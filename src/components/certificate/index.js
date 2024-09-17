import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Google from '../../icons/google';
import Great from '../../icons/great';
import Canva from '../../icons/canva';

const Certificate = () => {
    return (
        <div className={styles.certificates}>
            <Container>
                <Row className="g-3">
                    <Col lg={12}>
                        <div className={styles.certificate_head}>
                            <p>Certificates</p>
                            <span>Here are the certificates I have earned.</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.certificate_col}>
                            <Google />
                            <p>Google</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.certificate_col}>
                            <Great />
                            <p>Great Learning</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className={styles.certificate_col}>
                            <Canva />
                            <p>Canva</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Certificate;