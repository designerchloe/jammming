import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from './Spotify';

const results = [
  {
    title: 'Mary Jane.',
    artist: 'RAYE',
    id: '0',
    uri: 'spotify:track:3PLTYnLCus4KHeCyW2jsee'
  },
  {
    title: 'Genesis, pt. ii',
    artist: 'RAYE',
    id: '1',
    uri: 'spotify:track:1qvgsMTiNL4WwUnQ9yMz2m'
  },
  {
    title: 'The Thrill is Gone.',
    artist: 'RAYE',
    id: '2',
    uri: 'spotify:track:5eVG50IlyjSevPsWnSI76r'
  },
  {
    title: 'Oscar Winning Tears.',
    artist: 'RAYE',
    id: '3',
    uri: 'spotify:track:0iO2iCAjtX0t5duvczNQt6'
  },
  {
    title: 'Escapism.',
    artist: 'RAYE',
    id: '4',
    uri: 'spotify:track:5mHdCZtVyb4DcJw8799hZp'
  }
];

function App() {
  const [playlistName, setPlaylistName] = useState("Fresh new list");
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const addTrack = (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setPlaylistTracks((prev) => [...prev, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(prev => prev.filter((currentTrack) => currentTrack.id !== track.id))
  };

  const savePlaylist = () => {
    const uriArray = playlistTracks.map((track) => track.uri);
    setPlaylistTracks([]);
    setPlaylistName("Cool new list");
    console.log(uriArray);
    console.log(playlistName);
  };


  return (
    <div className='page-container'>
      <div className='main-column'>
        <h1>Create a Playlist</h1>
        <SearchBar onSearch={search} />
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
      </div>
      <Playlist 
      playlistName={playlistName} 
      onNameChange={updatePlaylistName}
      playlistTracks={playlistTracks}
      onRemove={removeTrack}
      onSave={savePlaylist}
       />
    </div>
  );
}

export default App;
