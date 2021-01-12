import React from "react";
import Chart from "chart.js";

function CompterLangues(guests) {
  var data =[0,0,0,0,0];
  if(guests != null){
      guests.forEach(element => {
        var langues = element.spokenLanguages;
        langues.forEach(langue => {
          switch(langue){
            case 'Arabe' : data[0]++; break
            case 'Francais' : data[1]++; break
            case 'Anglais' : data[2]++; break
            case 'Espagnole' : data[3]++; break
          }
        });
      });
    }
    return data;
}

export default function CardLangues(props) {
  var dataDest = CompterLangues(props.guests)
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "Arabe",
          "Francais",
          "Anglais",
          "Espagnole"
        ],
        datasets: [
          {
            label:"Langues",
            backgroundColor: "#24B00A",
            borderColor: "#24B00A",
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
          text: "Langues Chart",
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
                labelString: "Langues",
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
    let ctx = document.getElementById("langue-chart").getContext("2d");
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
                Des Langues
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="langue-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
