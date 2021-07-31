import React, { Component } from 'react';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.height}</td>
    <td>{props.exercise.weight}</td>
  </tr>
)

export default class bmiList extends Component {
  constructor(props) {
    super(props);


    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/get')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h2>Logged BMI's</h2>
        <br/>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Height</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}

