import React from 'react';
import Navbar from './components/PlaceholderNavbar';
import Sidebar from './components/Sidebar';
import Posts from './components/PlaceholderPosts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Posts />
    </div>
  );
}

export default App;
