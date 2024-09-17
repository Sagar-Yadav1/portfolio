import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

const Button = ({ to, type, size, customCss, onClick, text, icon }) => {
    return (
        <Link
            to={to}
            className={` ${styles.button} ${styles[type]} ${styles[size]} ${customCss}`} onClick={onClick}>
            {text}
            {icon}
        </Link>
    )
}

export default Button;