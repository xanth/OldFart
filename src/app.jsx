import React    from 'react';
import ReactDOM from 'react-dom';

import "../styles/main.scss"

import BirthdayPicker from "./BirthdayPicker.jsx";

ReactDOM.render(
  <div className="aligner"> <BirthdayPicker /> </div>,
  document.getElementById('content')
);
