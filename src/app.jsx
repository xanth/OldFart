import React    from 'react';
import ReactDOM from 'react-dom';
import moment   from 'moment';

import { Duration } from './Duration.es6.js';

import "../styles/main.scss"

const then = moment('1992-03-14 09:30:26').toDate();

class Age extends React.Component {
    constructor(props){
        super(props);
        this.state = { Duration: new Duration(new Date(), then) };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick.apply(this), 300);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        console.log("tick");
        this.setState({ Duration: new Duration(new Date(), then) });
    }

    render() {
        return <div className="aligner">
                <div className="age">
                    <span className="years">{this.state.Duration.Years}</span>
                    <span className="days">:{this.state.Duration.Days}</span>
                    <span className="hours">:{this.state.Duration.Hours}</span>
                    <span className="minutes">:{this.state.Duration.Minutes}</span>
                    <span className="seconds">:{this.state.Duration.Seconds}</span>
                </div>
            </div>;
    }
}

ReactDOM.render(
  <Age />,
  document.getElementById('content')
);
