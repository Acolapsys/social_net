import React, { Component } from 'react';
import styles from './App.module.css';


import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends Component {
  
  render() {
    
    return (
      <div className={styles.App}>
        <Header />
        
        <Main state={this.props.state} addPost={this.props.addPost} updateNewPostText={this.props.updateNewPostText}/>
        <Footer />
      </div>
    );
  }
}

export default App;
