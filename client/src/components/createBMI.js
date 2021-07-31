import React, { Component } from 'react';
import axios from 'axios';


export default class CreateUser extends Component {


  constructor(props) {
    super(props);

    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      height: '',
      weight: '',
      bmi: ''
    }
  }
  
  calculateBMI = () => {
    let bmi = Number(this.state.weight / (this.state.height / 100) ** 2).toFixed(2);
    console.log(bmi);
    document.getElementById("demo").innerText = bmi;
    if (bmi < 18.5) return document.getElementById("demo1").innerText ="Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return document.getElementById("demo1").innerText = "Normal";
    else if (bmi >= 25 && bmi < 29.9) return document.getElementById("demo1").innerText = "Overweight";
    else return document.getElementById("demo1").innerText = "Obese";
    
  }
  

  onChangeHeight(e) {
    this.setState({
      height: e.target.value
    })
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      height: this.state.height,
      weight: this.state.weight
    }

    console.log(user);

    axios.post('http://localhost:5000/add', user)
      .then(res => console.log(res.data));

    this.setState({
        height: '',
        weight: ''

    })
  }

  

  render() {
    return (
      <div>
        <h3>Create new BMI</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Height: </label>
            <input  type="number"
                id="height"
                required
                className="form-control"
                value={this.state.height}
                onChange={this.onChangeHeight}
                />
            <label>Weight: </label>
            <input  type="number"
                id="weight"
                required
                className="form-control"
                value={this.state.weight}
                onChange={this.onChangeWeight}
                />   
          </div>
          <div className="form-group">
            <input type="submit" value="Calculate" onClick={this.calculateBMI} className="btn btn-primary" />
          </div>
          <div>
          <label>BMI:  </label>
            <p id="demo"></p>
            <label>Status:  </label>
            <p id="demo1"></p>
          </div>
        </form>
      </div>
    )
  }
}