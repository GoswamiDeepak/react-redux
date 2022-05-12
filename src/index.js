import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//react-redux taking createStore from redux
import { createStore } from 'redux'; 
//Provider from the react-redux
import { Provider } from 'react-redux';
//Taking all funtion coming from the reducer's index which is blend of combineReducers 
import rootProvider from './services/Reducers/index'

//Storing the reducer in createStore
const store = createStore(rootProvider);
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >

      <App />
    </Provider>

);


