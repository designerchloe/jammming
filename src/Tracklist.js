import React from 'react';
import styles from './Tracklist.module.css';
import Track from './Track';

const Tracklist = (props) => {
    
    return (
        <div className={styles.tracklist}>
            {props.tracks.map((track) => (
                <Track 
                track={track}
                key={track.id} 
                artist={track.artist} 
                title={track.title}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                inPlaylist={props.inPlaylist} />
            ))}
        </div>
     )
};

export default Tracklist;