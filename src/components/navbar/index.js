import React, { useState } from "react";
import styles from "./style.module.css";
import Logo from "../logo";
import MenuItem from "../menuitems";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";

const Navbar = () => {
    const MenuItems = [
        {
            id: 1,
            title: "Home",
            path: "/home",
        },
        {
            id: 2,
            title: "Shop",
            path: "/shop",
        },
        {
            id: 3,
            title: "Product",
            path: "/product",
        },
        {
            id: 4,
            title: "Contact",
            path: "/contact",
        },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.header_navbar}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={12}>
                        <div className={styles.hn_wrap}>
                            <Logo />
                            <div
                                className={`${styles.menubar} ${menuOpen ? styles.menuOpen : ""}`}
                            >
                                {MenuItems.map((item, index) => (
                                    <MenuItem key={index} item={item} />
                                ))}
                            </div>
                            <div className={styles.nav_btn}>
                                <Button type={"fill"} text={"Let’s Talk."} />
                            </div>
                            <button className={styles.menu_toggle} onClick={handleMenuToggle}>
                                ☰
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Navbar;