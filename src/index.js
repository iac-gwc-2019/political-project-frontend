import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import $ from 'jquery';
import * as serviceWorker from './components/serviceWorker';


ReactDOM.render(<AppRouter />, document.getElementById('app-root'));
serviceWorker.unregister();
