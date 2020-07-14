import React from 'react';
import styles from './App.module.css';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
