import  'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers'
//action creators


//()=>[] -> reducers add here
//{} -> initial state (or server side rendering)
//applyMiddleware like Redux Thunk etc
const store = createStore(reducers,{},applyMiddleware(reduxThunk))


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.querySelector('#root'));
