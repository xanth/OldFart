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
        this.Date = new Date();
        this.state = { Birthday: this.props.Birthday }
    }

    onDateChange(dateText, moment, event){
        this.setState({ Birthday: moment.toDate() });
    }

    render() {
        if(this.state.Birthday){
            return <Age Birthday={this.state.Birthday} />;
        }
        else {
            return <DatePicker date={this.Date} onChange={(...args) => this.onDateChange.apply(this, args) } />;
        }

    }
}
