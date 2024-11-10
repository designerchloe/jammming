import React, {useState} from 'react';
import Button from './Button';
import Tracklist from './Tracklist';
import styles from './Playlist.module.css';


const Playlist = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1369 3.6977C14.9963 3.55705 14.8055 3.47803 14.6066 3.47803C14.4077 3.47803 14.2169 3.55705 14.0763 3.6977L4.88388 12.8901C4.78965 12.9843 4.72223 13.1019 4.68856 13.2309L3.68856 17.0593C3.62127 17.3169 3.69561 17.5909 3.88388 17.7792C4.07215 17.9674 4.34614 18.0418 4.60375 17.9745L8.43218 16.9745C8.56111 16.9408 8.67874 16.8734 8.77297 16.7792L17.9654 7.58678C18.2582 7.29389 18.2582 6.81902 17.9654 6.52612L15.1369 3.6977ZM6.08843 13.8069L14.6066 5.28869L16.3744 7.05645L7.8562 15.5746L5.46344 16.1996L6.08843 13.8069Z" fill="white"/>
                        <path d="M4 19.478C3.58579 19.478 3.25 19.8138 3.25 20.228C3.25 20.6422 3.58579 20.978 4 20.978H19C19.4142 20.978 19.75 20.6422 19.75 20.228C19.75 19.8138 19.4142 19.478 19 19.478H4Z" fill="white"/>
                    </svg>
                    <input 
                    type="text" 
                    className={styles.input}
                    />
                </div>
                <Button />
            </div>
            <Tracklist />
        </div>
    )
};

export default Playlist;