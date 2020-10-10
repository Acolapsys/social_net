import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="wrapper">
          <div className="main__wrapper">
            <Sidebar />
            <Profile />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
