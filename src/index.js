import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom'

import rootReducer from './reducers'

const initialState = [
  {
      id: '0',
      subReddit: 'pugs',
      poster: 'DukeOfWindsor',
      timeOfPost: 'Sat Sep 14 2019 19:03:20 GMT-0700 (Pacific Daylight Time)',
      title: 'Angry pug',
      src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4376924f-8207-49a6-85a4-60f2fe20ce91-profile_image-300x300.png',
      upvotes: 10000,
      downvotes: 300,
      comments: []
  }
]


/**
 *    OPTIONAL
 *    `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`
 *    added for Redux tools to work in browser 
 */
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));