import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
      super(props);

      let h = new Date().getHours().toLocaleString()
      let m = new Date().getMinutes().toLocaleString()

      this.state = {
        hours: ("0" + h).slice(-2),
        minutes: ("0" + m).slice(-2)
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      let h = new Date().getHours().toLocaleString()
      let m = new Date().getMinutes().toLocaleString()
      this.setState({
        hours: ("0" + h).slice(-2),
        minutes: ("0" + m).slice(-2)
      });
    }
    render() {
      return (
        <div className="App-clock">
          {this.state.hours}:{this.state.minutes}
        </div>
      );
    }
  }