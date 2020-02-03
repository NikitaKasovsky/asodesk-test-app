import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppComponent />, document.getElementById('root'));

serviceWorker.unregister();
