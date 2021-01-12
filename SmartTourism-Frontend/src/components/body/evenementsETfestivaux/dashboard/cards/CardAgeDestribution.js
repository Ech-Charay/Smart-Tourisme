import React from "react";
import Chart from "chart.js";

function CompterAgeDestribution(guests) {
  var data =[0,0,0,0,0,0,0];
  if(guests != null){
    guests.forEach(element => {
      var age = parseInt(element.age)
      if(age <= 10) data[0]++;
      if(10 < age && age <= 20) data[1]++; 
      if(20 < age && age <= 30) data[2]++; 
      if(30 < age && age <= 40) data[3]++; 
      if(40 < age && age <= 50) data[4]++; 
      if(50 < age && age <= 60) data[5]++; 
      if(60 < age) data[6]++; 
    });
    
  }
  return data;
}

export default function CardAgeDestribution(props) {
  var dataDest = CompterAgeDestribution(props.guests)
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "-10",
          "10-20",
          "20-30",
          "30-40",
          "40-50",
          "50-60",
          "60+",
        ],
        datasets: [
          {
            label:"Intervalle des ages",
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: dataDest,
            fill: false,
            barThickness: 30,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Ages Destribution Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Intervalle Age",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("age-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                La destribution
              </h6>
              <h2 className="text-gray-800 text-xl font-semibold">
                Ages des visiteurs
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="age-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
