import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import { GoogleOAuthProvider } from '@moeindana/google-oauth'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  
  <Provider store={store}>
    <GoogleOAuthProvider clientId="217761154938-2o94b5kes8cgm95plp4s2dtm7dhbjrrh.apps.googleusercontent.com" >
    <App />
  </GoogleOAuthProvider>
  </Provider>
);