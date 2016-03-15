import React    from 'react';
import ReactDOM from 'react-dom';

import "../styles/main.scss"

import BirthdayPicker   from './BirthdayPicker.jsx';
import ChromeStore      from './ChromeStore.es6.js';

ChromeStore.GetBirthday((bd) => ReactDOM.render(
    <div className="aligner"> <BirthdayPicker Birthday={bd} /> </div>,
    document.getElementById('content'))
);
