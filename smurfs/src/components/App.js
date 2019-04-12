import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions/index';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
    }

    handleDelete = id => {
        this.props.deleteSmurf(id)
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
                                            <li key={smurf.name}> <strong>Name:</strong> {smurf.name} </li>
                                            <li key={smurf.age}> <strong>Age:</strong> {smurf.age} </li>
                                            <li key={smurf.height}> <strong>Height:</strong> {smurf.height} </li>
                                            <button key={smurf.id} onClick={() => this.handleDelete(smurf.id)}>DELETE</button>
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
    { getSmurfs, addSmurf, deleteSmurf }
)(App)