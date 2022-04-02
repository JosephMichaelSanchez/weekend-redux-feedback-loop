import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingItem from '../FeelingItem/FeelingItem';
import UnderstandingItem from '../UnderstandingItem/UnderstandingItem';
import SupportedItem from '../SupportedItem/SupportedItem';
import CommentItem from '../CommentItem/CommentItem';
import ReviewItem from '../ReviewItem/ReviewItem';
import SuccessItem from '../SuccessItem/SuccessItem';


function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <FeelingItem />
        <UnderstandingItem />
        <SupportedItem />
        <CommentItem />
        <ReviewItem />
        <SuccessItem />


      </div>
    </Router>
  );
}

export default App;
