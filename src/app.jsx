import React    from 'react';
import ReactDOM from 'react-dom';

import "../styles/main.scss"

import BirthdayPicker   from './BirthdayPicker.jsx';

const ChromeStore = require(`./${__DEV__ ? 'ChromeStoreShim' : 'ChromeStore'}.es6.js`).default;

ChromeStore.GetBirthday((bd) => ReactDOM.render(
    <div className="aligner"> <BirthdayPicker Birthday={bd} /> </div>,
    document.getElementById('content'))
);
