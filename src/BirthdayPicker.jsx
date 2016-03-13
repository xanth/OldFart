import React    from 'react';
import ReactDOM from 'react-dom';
import moment   from 'moment';

import DatePicker from 'react-date-picker';

import "react-date-picker/base.css";
import "react-date-picker/theme/hackerone.css";

import Age from "./Age.jsx";

export default class BirthdayPicker extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <Age Birthday={moment("1992-03-14 09:30:26").toDate()} />;
    }
}
