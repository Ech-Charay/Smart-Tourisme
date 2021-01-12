import React from "react";
import Chart from "chart.js";

function CompterNombre(guests) {
  var data =[0,0,0,0,0];
  if(guests != null){
      guests.forEach(element => {
        var residence = element.residence;
          if(residence.indexOf('Maroc') !== -1) data[0]++;
          if(residence.indexOf('USA') !== -1) data[1]++;
          if(residence.indexOf('France') !== -1) data[2]++;
          if(residence.indexOf('Espagne') !== -1) data[3]++;
          })
    }
    return data;
}

export default function CardNombreVisiteur(props) {
  var dataDest = CompterNombre(props.guests)
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "Maroc",
          "USA",
          "France",
          "Espagne"
        ],
        datasets: [
          {
            label:"Langues",
            backgroundColor: "#A90AB0",
            borderColor: "#A90AB0",
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
          text: "Pays Chart",
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
                labelString: "Nombre Visiteurs",
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
    let ctx = document.getElementById("bar-chart").getContext("2d");
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
                Des Pays
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
