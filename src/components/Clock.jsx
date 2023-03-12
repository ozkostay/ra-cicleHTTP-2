import React from "react";
import './Clock.css';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.delete2Clock = props.fnDelete;
    this.shift = props.item.shift;
    this.id = props.item.id;
    this.tempDel = props.tempDel;
  }

  componentDidMount() {
    this.setState({
      date: this.selectedZone()
    });

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate', this.timerID);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  selectedZone() {
    const milliseconds = 60 * 60 * 1000;
    const now = new Date();
    const localTimeZone = now.getTimezoneOffset() / 60;
    const dateUTC = new Date(now.getTime() + (localTimeZone * milliseconds));
    const toReturn = new Date(dateUTC.getTime() + (this.shift * milliseconds));
    return toReturn;
  }

  tick() {
    this.setState({
      date: this.selectedZone()
    });
  }

  render() {
    return (
      <div className='cicle-wrrap'>
        <div onClick={() => this.tempDel()}><h5 className='title-cicle'>Зона {this.shift}</h5></div>
        <div className='big-cicle'>
          <h2>{this.state.date.toLocaleTimeString()}.</h2>
          <div className='little-cicle' onClick={() => this.delete2Clock(this.id)}>X</div>
        </div>
      </div>
    );
  }
}