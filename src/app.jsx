import React    from 'react';
import ReactDOM from 'react-dom';
import moment   from 'moment';

import { Duration, Year, Day, Hour, Minute } from './Duration.es6.js';

class Age extends React.Component {
  render() {
    return <p>{this.props.Duration.Years}:{this.props.Duration.Days}:{this.props.Duration.Hours}:{this.props.Duration.Seconds}</p>;
  }
}

const now = new Date();
const then = moment('1992-03-14 09:30:26').toDate();

ReactDOM.render(
  <Age Duration={new Duration(now, then)} />,
  document.getElementById('content')
);
