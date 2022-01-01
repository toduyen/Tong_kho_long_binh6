import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment , decrement} from './Couter/counterSlice';
class App extends React.Component {
  render() { 
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={() => this.props.dispatch(increment())}>+</button>
        <button onClick={() => this.props.dispatch(decrement())}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    count: state.couter.couter
  }
}
export default connect(mapStateToProps)(App)