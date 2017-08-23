import React, { Component } from 'react';
import './App.css';
import Counter from '../component/counter.js'
import { connect } from 'react-redux'
import CounterActions from '../store/actions/counterAction.js'

function mapStateToProps(state) {
  console.log(state.increamentCounter.inCounterValue)
  return {
    incCounter: state.increamentCounter.inCounterValue,
    decCounter: state.decreamentCounter.decCounterValue
  }
  console.log(state.increamentCounter)
  
}

function mapDispatchToProps(dispatch) {
  return {
    // decreament: () => dispatch(CounterActions.decreament()),
    increamentWithValue: function (value) {
      dispatch(CounterActions.increamentWithValue(value))
      console.log(value,"in inc func ")
    },
    decreamentWithValue: function (value) {
      dispatch(CounterActions.decreamentWithValue(value))
      console.log(value,"in dec func")
    }
  }


}


class App extends Component {


  increamentUpdate(val) {
this.props.increamentWithValue(val)
  }
  decreamentUpdate(val) {
this.props.decreamentWithValue(val)
  }

  render() {
    console.log(this.props.incCounter,"coiunter in app")
    return (
      <div className="App">
        <div className="App-header">
          <h1>My Counter</h1>
        </div>
        <p className="App-intro">
          <Counter  counter={this.props.incCounter + this.props.decCounter}  increamentUpdate={this.increamentUpdate.bind(this)} decreamentUpdate={this.decreamentUpdate.bind(this)} />
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
