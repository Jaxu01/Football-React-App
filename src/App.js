import * as React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Content />
     <Footer />
    </div>
  );
}

export default App;
