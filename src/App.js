import React, { Component } from 'react';
import styles from './App.module.css';
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';


class App extends Component {
  
  render() {
    
    return (
      <div className={styles.App}>
        <HeaderContainer />
        
        <Main/>
        <Footer />
      </div>
    );
  }
}

export default App;
