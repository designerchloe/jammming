import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

const results = [
  {
    title: 'Mary Jane.',
    artist: 'RAYE',
    id: '0'
  },
  {
    title: 'Genesis, pt. ii',
    artist: 'RAYE',
    id: '1'
  },
  {
    title: 'The Thrill is Gone.',
    artist: 'RAYE',
    id: '2'
  },
  {
    title: 'Oscar Winning Tears.',
    artist: 'RAYE',
    id: '3'
  },
  {
    title: 'Escapism.',
    artist: 'RAYE',
    id: '4'
  }
];

// const chosenTracks = [
//   {
//     title: 'Mary Jane.',
//     artist: 'RAYE',
//     id: '0'
//   },
//   {
//     title: 'Genesis, pt. ii',
//     artist: 'RAYE',
//     id: '1'
//   }
// ];

function App() {
  const [playlistName, setPlaylistName] = useState("Fresh new list");
  const [searchResults, setSearchResults] = useState(results);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const addTrack = () => {

  }


  return (
    <div className='page-container'>
      <div className='main-column'>
        <h1>Create a Playlist</h1>
        <SearchBar />
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
      </div>
      <Playlist 
      playlistName={playlistName} 
      onNameChange={updatePlaylistName}
      playlistTracks={playlistTracks}
       />
    </div>
  );
}

export default App;
