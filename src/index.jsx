import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import currencies from './currencies';

ReactDOM.render(<App currencies={currencies} />, document.getElementById('app'));
