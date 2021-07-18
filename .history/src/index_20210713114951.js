import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AuthContextProvider from './store/auth-context';

ReactDOM.render( <AuthContextProvider></AuthContextProvider>< App / > , document.getElementById('root'));