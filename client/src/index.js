import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import { GoogleOAuthProvider } from '@moeindana/google-oauth'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import './index.css'
import dotenv from 'dotenv'
dotenv.config()
const store = createStore(reducers, compose(applyMiddleware(thunk)))


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId= {process.dot.env.GOOGLE_ID} >
      <App />
    </GoogleOAuthProvider>
  </Provider>
);