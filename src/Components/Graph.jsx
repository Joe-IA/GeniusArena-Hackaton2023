import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./Graph.css";
  
export function Graph() {
  useEffect(() => {
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Web Application status',
        data: [10, 10, 10, 10, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)'
        ],
        borderWidth: 1
      }]
    };
    const chart = new Chart(
      document.getElementById('Status'),
      {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
    );
    return () => {
      chart.destroy();
    }
  }, []);

  return (
    <div className="grafica">
      <canvas id='Status'></canvas>
    </div>
  );
}  
  
  
  



/*
  useEffect(() => {
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Web Application status',
        data: [10, 10, 10, 10, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)'
        ],
        borderWidth: 1
      }]
    };
    const ctx = document.getElementById('Status').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options:{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
                }]
            }
        }
      })
  }, [])



  return (
    <div className="grafica">
      <canvas id='Status'></canvas>
    </div>
  );
}*/