import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let uHeight = [];
    let uWeight = [];
    axios
      .get("http://localhost:5000/get")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          uHeight.push(parseInt(dataObj.height));
          console.log(uHeight);
          uWeight.push(parseInt(dataObj.weight));
          console.log(uWeight);
        }
        setChartData({
          labels: uHeight,
          datasets: [
            {
              label: "Weight",
              data: uWeight,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(uWeight, uHeight);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h2>Line Chart</h2>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "BMI", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;