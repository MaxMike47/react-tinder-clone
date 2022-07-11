
// react modules
import React from 'react';

// custom imports
import './App.css';
import Header from './views/Header/Header'
import SwipeButtons from './views/Swipe Buttons/SwipeButtons';
import TinderCards from './views/Tinder Cards/TinderCards';

function App() {
  return (
    <div className="app">

      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
