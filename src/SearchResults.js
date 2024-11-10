import React from 'react';
import styles from './SearchResults.module.css';
import Track from './Track';

const SearchResults = ( { results, updatePlaylist } ) => {


    return (
        <div className={styles.container}>
            {/* {results.map((result) => (
                <div>
                    <Track inTracklist={false} updatePlaylist={updatePlaylist} results={results} title={result.title} artist={result.artist} id={result.id} />
                    <div className={styles.rule}></div>
                </div>
            ))} */}
        </div>
    )
};

export default SearchResults;