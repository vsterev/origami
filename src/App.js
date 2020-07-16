import React from 'react';
import styles from './App.module.css';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
