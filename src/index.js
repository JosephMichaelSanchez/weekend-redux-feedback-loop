import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = 'feelingReducerOutput', action) => {
    console.log('I am the feelingReducer');

    return state;
};

const understandingReducer = (state = 'understandingReducerOutput', action) => {
    console.log('I am the understandingReducer');

    return state;
};

const supportedReducer = (state = 'supportedReducerOutput', action) => {
    console.log('I am the supportedReducer');

    return state;
};

const commentReducer = (state = 'commentReducerOutput', action) => {
    console.log('I am the commentReducer');

    return state;
};


const storeInstance = createStore(
    combineReducers(
        {
            feelingReducer,
            understandingReducer,
            supportedReducer,
            commentReducer
        }
    ),
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
