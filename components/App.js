import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {bLength: 12, bWidth: 12, bThickness: 1, boardfeet: 1}
    this.update = this.update.bind(this)
  }
  update(event) {
    this.setState({
      bLength: ReactDOM.findDOMNode(this.refs.bLength).value,
      bWidth: ReactDOM.findDOMNode(this.refs.bWidth).value,
      bThickness: ReactDOM.findDOMNode(this.refs.bThickness).value
    }, function() {
        let bL = parseInt(this.state.bLength, 10),
            bW = parseInt(this.state.bWidth,10),
            bT = parseInt(this.state.bThickness, 10),
            result = Math.round(100 * (bL * bW * bT)/144) /100;
            this.setState({
              boardfeet: result
            });
      });
  }
  render() {
    return (
      <div>

        <header>
        <h4>Board Foot Calculator</h4>
          <Screen weight={this.state.boardfeet} />
        </header>
        <main>
        <label>Width</label>
          <Number default={this.state.bLength} ref="bLength" update={this.update}/><label className="label__unit">in</label>
          <label>Length</label>
          <Number default={this.state.bWidth} ref="bWidth" update={this.update}/><label className="label__unit">in</label>
          <label>Thickness</label>
          <Number default={this.state.bThickness} ref="bThickness" update={this.update}/><label className="label__unit">in</label>
        </main>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  bWidth: React.PropTypes.number,
  bLength: React.PropTypes.number,
  bThickness: React.PropTypes.number,
  boardfeet: React.PropTypes.number
}
App.defaultProps = {
  bWidth: 0,
  bLength: 0,
  bThickness: 0,
  boardfeet: 0
}

class Screen extends React.Component {
  render() {
    return (
      <div className="screen">
        <div className="screen__count">{this.props.weight}</div>
        <label className="label__screen">board feet</label>
      </div>
    )
  }
}
class Number extends React.Component {
  render() {
    return (
      <input className="number" value={this.props.default} type="number" min="0" onChange={this.props.update} />
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>Built with React</footer>
    )
  }
}
class Head extends React.Component {
  render() {
    return (
      <header>Board Foot Calculator</header>
    )
  }
}


export default App
