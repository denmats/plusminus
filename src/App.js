import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    res: 5,
    styles: 10
  };



  onClickHandler(bool) {
    bool
      ? this.setState({ res: this.state.res + 10, styles: this.state.styles +10}) 
      : this.setState({ res: this.state.res - 10, styles: this.state.styles -10});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="card text-center mt-4">
            <div className="card-body">
              <h5 className="card-title" style={{fontSize: this.state.styles +'px'}}>Plus&Minus</h5>
              <div className="d-flex">
                <ul className="list-inline mx-auto justify-content-center">
                  <li className="list-inline-item">
                    <button
                      className="btn btn-lg bg-primary"
                      onClick={this.onClickHandler.bind(this, true)}
                    >
                      +
                    </button>
                  </li>
                  <li className=" list-inline-item">
                    <h1>
                      <span className={this.getBadgeClass()}>
                        {this.formatCounter()}
                      </span>
                    </h1>
                  </li>
                  <li className=" list-inline-item">
                    <button
                      className="btn btn-lg bg-danger"
                      onClick={this.onClickHandler.bind(this, false)}
                    >
                      -
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClass() {
    let classes = 'badge badge-';
    classes += this.state.res === 0 || this.state.res < 0 ? 'warning' : 'light';
    return classes;
  }

  formatCounter() {
    let { res } = this.state;
    return (res === 0 || res < 0) ? 'Zero': res;
  }
}

export default App;
