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

function App() {
  return (
    <div className='page-container'>
      <div className='main-column'>
        <h1>Create a Playlist</h1>
        <SearchBar />
        <SearchResults />
      </div>
      <Playlist />
    </div>
  );
}

export default App;
