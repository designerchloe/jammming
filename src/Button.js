import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {

    const handleClick = (e) => {
        props.onSave();
    };

    return (
        <button onClick={handleClick} className={styles.button}>Save</button>
    )
};

export default Button;