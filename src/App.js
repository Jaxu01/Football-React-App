import * as React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'
import Paper from '@mui/material/Paper';

function App() {
  return (
    <div className="App">
     <Paper />
     <Navbar />
     <Content />
     <Footer />
    </div>
  );
}

export default App;
