import React    from 'react';
import ReactDOM from 'react-dom';

import { Duration } from './Duration.es6.js';

export default class Age extends React.Component {
    constructor(props){
        super(props);
        this.state = { Duration: new Duration(new Date(), this.props.Birthday) };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 300);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        console.log("tick");
        this.setState({ Duration: new Duration(new Date(), this.props.Birthday) });
    }

    render() {
        return <div className="age">
                <span className="years">{this.state.Duration.Years}</span>
                <span className="days">:{this.state.Duration.Days}</span>
                <span className="hours">:{this.state.Duration.Hours}</span>
                <span className="minutes">:{this.state.Duration.Minutes}</span>
                <span className="seconds">:{this.state.Duration.Seconds}</span>
            </div>;
    }
}
