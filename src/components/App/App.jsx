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
        <Route path="/" exact>
          <FeelingItem />
        </Route>
        <Route path="/understand" exact>
          <UnderstandingItem />
        </Route>
        <Route path="/support" exact>
          <SupportedItem />
        </Route>
        <Route path="/comment" exact>
          <CommentItem />
        </Route>
        <Route path="/review" exact>
          <ReviewItem />
        </Route>
        <Route path="/review" exact>
          <SuccessItem />
        </Route>


      </div>
    </Router>
  );
}

export default App;
