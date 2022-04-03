import React from 'react';
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

        <Route path="/understand">
          <UnderstandingItem />
        </Route>

        <Route path="/support">
          <SupportedItem />
        </Route>

        <Route path="/comment">
          <CommentItem />
        </Route>

        <Route path="/review">
          <ReviewItem />
        </Route>

        <Route path="/success">
          <SuccessItem />
        </Route>


      </div>
    </Router>
  );
}

export default App;
