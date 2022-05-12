import React from 'react';
import './App.css';
import Header from './components/framework/Header.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import QuizSelect from './components/QuizSelect';
import RandomQuiz from './components/RandomQuiz';

function App() {
  return (
    <React.Fragment>
      
      <Router>
        <Routes>
          <Route path="/" element={<QuizSelect/>}/>
          <Route path="/r/:topic" element={<RandomQuiz/>}/>
          
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
