import React from 'react';
import styles from './Tracklist.module.css';
import Track from './Track';

const Tracklist = (props) => {
    
    return (
        <div className={styles.tracklist}>
            {props.tracks.map((track) => (
                <Track title={track.title} artist={track.artist} id={track.id} />
            ))}
        </div>
     )
};

export default Tracklist;