import React    from 'react';
import ReactDOM from 'react-dom';
import moment   from 'moment';

import DatePicker from 'react-date-picker';

import "react-date-picker/base.css";
import "react-date-picker/theme/hackerone.css";

const ChromeStore = require(`./${__DEV__ ? 'ChromeStoreShim' : 'ChromeStore'}.es6.js`).default;

import Age from "./Age.jsx";

export default class BirthdayPicker extends React.Component {
    constructor(props){
        super(props);
        this.Date = new Date();
        this.state = { Birthday: this.props.Birthday }
    }

    onDateChange(dateText, moment, event){
        const bd = moment.toDate();
        ChromeStore.SetBirthday(bd, () => this.setState({ Birthday: bd }));
    }

    render() {
        return this.state.Birthday
            ? <Age Birthday={this.state.Birthday} />
            : <DatePicker date={this.Date} onChange={(...args) => this.onDateChange(...args) } />;
    }
}
