import React from 'react';
import styles from './SearchResults.module.css';
import Track from './Track';

const SearchResults = (props) => {

    return (
        <div className={styles.container}>
            {props.searchResults.map((result) => (
                <div>
                    <Track title={result.title} artist={result.artist} id={result.id} />
                    <div className={styles.rule}></div>
                </div>
            ))}
        </div>
    )
};

export default SearchResults;