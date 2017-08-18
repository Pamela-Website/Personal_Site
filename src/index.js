import App from './components/app';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(<App />, document.getElementById('app'));
