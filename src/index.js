import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducer to store the feeling score
const feelingReducer = (state = 0, action) => {
    console.log('I am the feelingReducer');
    if (action.type === 'SET_FEELING_NUMBER') {
        return Number(action.payload)
    } else if (action.type === 'RESET_ALL') {
        state = 0;
    }

    return state;
};

// reducer to store the understanding score
const understandingReducer = (state = 0, action) => {
    console.log('I am the understandingReducer');
    if (action.type === 'SET_UNDERSTANDING_NUMBER') {
        return Number(action.payload)
    } else if (action.type === 'RESET_ALL') {
        state = 0;
    }

    return state;
};

// reducer to store the supported score
const supportedReducer = (state = 0, action) => {
    console.log('I am the supportedReducer');
    if (action.type === 'SET_SUPPORT_NUMBER') {
        return Number(action.payload)
    } else if (action.type === 'RESET_ALL') {
        state = 0;
    }

    return state;
};

// reducer to store the final comment
const commentReducer = (state = '', action) => {
    console.log('I am the commentReducer');
    if (action.type === 'SET_COMMENT') {
        return action.payload
    } else if (action.type === 'RESET_ALL') {
        state = '';
    }

    return state;
};

// create store and combine reducers
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
