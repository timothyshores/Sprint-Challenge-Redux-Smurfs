import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getSmurfs, addSmurf } from '../actions/index'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  state = {
    name: '',
    age: null,
    height: '',
    update: {},
  }
  componentDidMount() {
    this.props.getSmurfs();
  }
  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  }

  render() {
    return (
      <div className="App">
        {this.props.gettingSmurfs ? (<p>Loading smurfs</p>) :
          (
            <div className="form">
              <form onSubmit={this.handleSubmit}>
                <h3>Add a Smurf!</h3>
                <label>Name:</label>
                <input
                  className="addInputs"
                  type="text"
                  id="name"
                  name="name"
                  onChange={this.handleChange}
                />
                <label>Age:</label>
                <input
                  className="addInputs"
                  type="number"
                  id="age"
                  name="age"
                  onChange={this.handleChange}
                />
                <label>Height:</label>
                <input
                  className="addInputs"
                  type="text"
                  id="height"
                  name="height"
                  onChange={this.handleChange}
                />
                <input type="submit" value="submit" />
              </form>
              <ul>
                {this.props.smurfs.map(smurf => {
                  return (
                    <div className="list">
                      <li key={smurf.name}> Name: {smurf.name} </li>
                      <li key={smurf.age}> Age: {smurf.age} </li>
                      <li key={smurf.height}> Height: {smurf.height} </li>
                    </div>
                  )
                })}
              </ul>
            </div>
          )}
        {this.props.error !== '' ? <p>{this.props.error}</p> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    gettingSmurfs: state.gettingSmurfs,
    addingSmurf: state.addingSmurf,
    deletingSmurf: state.deletingSmurf,
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App)