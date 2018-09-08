import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'js/components/router';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './app.css';

// TODO : Fix issue with material-ui-datatables version
injectTapEventPlugin();

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
