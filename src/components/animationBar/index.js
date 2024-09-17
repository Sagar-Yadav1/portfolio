import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import starImg from "../../icons/staricon";
import styles from "./style.module.css";
import StarIcon from "../../icons/staricon";

const AnimationBar = () => {
  return (
    <div className={styles.animation_bar}>
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className={styles.animation}>
              <StarIcon />
              <span>UI/UX Designer</span>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className={styles.animation}>
              <StarIcon />
              <span>Social Media </span>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className={styles.animation}>
              <StarIcon />
              <span>Graphic Design</span>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className={styles.animation}>
              <StarIcon />
              <span>Video Editing</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnimationBar;
