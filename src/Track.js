import React, { useState } from 'react';
import styles from './Track.module.css';


const Track = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (props.onAdd) {
            props.onAdd(props.track);
        } else if (props.onRemove) {
            props.onRemove(props.track);
        }
    }

    return (
        <div 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className={styles.container}>
            <div className={styles.text}>
                <p className={styles.song}>{props.title}</p>
                <p className={styles.artist}>{props.artist}</p>
            </div>
            <button className={styles.button}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33463 16L22.668 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg width="32" height="33" viewBox="0 0 32 33" fill='none' xmlns="http://www.w3.org/2000/svg">
                <path d="M16 23.1507V9.81738" stroke={isHovered ? '#C8EC5C' : '#ffffff'} stroke-width="2" stroke-linecap="round"/>
                <path d="M9.33463 16.4844L22.668 16.4844" stroke={isHovered ? '#C8EC5C' : '#ffffff'} stroke-width="2" stroke-linecap="round"/>
            </svg>
            </button>
        </div>
    )
};

export default Track;