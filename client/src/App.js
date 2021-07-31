import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar";
import CreateUser from './components/createBMI';
import bmiList from './components/bmiList';
import LineChart from './components/lineChart';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <hr/>
      <br/>
      <div>
      <Route path="/" exact component={CreateUser} />
      </div>
      <br/>
      <hr/>
      <br/>
      <div>
      <Route path="/" exact component={bmiList} />
      </div>
      <br/>
      <hr/>
      <br/>
      <div>
      <Route path="/" exact component={LineChart} />
      </div>
      
      </div>
    </Router>
  );
}

export default App;