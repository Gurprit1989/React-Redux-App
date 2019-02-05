import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import {  createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';
import Header from './components/Header';

ReactDOM.render(
    <Provider store = {createStore(reducers)}>
    <Header/>
    <App/>, 
    </Provider>,
    document.querySelector('#root')
)