import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from './Tracklist';

const SearchResults = (props) => {

    return (
        <Tracklist tracks={props.searchResults} onAdd={props.onAdd} inPlaylist={false} />
    )
};

export default SearchResults;