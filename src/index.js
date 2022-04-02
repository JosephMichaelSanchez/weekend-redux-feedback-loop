import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const oneReducer = (state = 'oneReducerOutput', action) => {
    console.log('I am the oneReducer');

    return state;
};

const twoReducer = (state = 'twoReducerOutput', action) => {
    console.log('I am the twoReducer');

    return state;
};

const threeReducer = (state = 'threeReducerOutput', action) => {
    console.log('I am the threeReducer');

    return state;
};

const fourReducer = (state = 'fourReducerOutput', action) => {
    console.log('I am the fourReducer');

    return state;
};

const storeInstance = createStore(
    combineReducers(
        {
            oneReducer,
            twoReducer,
            threeReducer,
            fourReducer
        }
    )
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
