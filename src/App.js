import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from './Spotify';

function nameGenerator() {
  const prefixes = ['Fresh', 'Cheeky', 'Cool', 'Stunning', 'Sweet', 'Breathtaking', 'Phenomenal', 'Astonishing', 'Gorgeous'];
  const randInd = Math.floor(Math.random() * 9);
  return `${prefixes[randInd]} New List`;
};

function App() {
  const [playlistName, setPlaylistName] = useState(nameGenerator());
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const addTrack = (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setShowPlaylist(true);
    setPlaylistTracks((prev) => [...prev, track]);
  };

  const removeTrack = (track) => {
    setPlaylistTracks(prev => prev.filter((currentTrack) => currentTrack.id !== track.id))
  };

  const savePlaylist = () => {
    const uriArray = playlistTracks.map((track) => track.uri);
    Spotify.save(playlistName, uriArray).then(() => {
      setPlaylistTracks([]);
      setPlaylistName(nameGenerator());
      setShowPlaylist(false);
    })
  };


  return (
    <div className='page-container'>
      <div className='main-column'>
        <h1>Create a Playlist</h1>
        <SearchBar onSearch={search} />
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
      </div>
      <div className='playlist-container' style={showPlaylist === false ? {display: 'none'} : {display: 'block'}} >
        <Playlist 
        playlistName={playlistName} 
        onNameChange={updatePlaylistName}
        playlistTracks={playlistTracks}
        onRemove={removeTrack}
        onSave={savePlaylist}
        />
       </div>
    </div>
  );
}

export default App;
