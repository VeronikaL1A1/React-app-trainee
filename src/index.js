import React from 'react';
import ReactDOM from 'react-dom';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

import './styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
