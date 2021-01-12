import React from "react";
import Chart from "chart.js";

function compterfemme(guests) {
  var femme = 0;
  if(guests!=null){
    guests.forEach(element => {
      if(element.gender === 'Woman')
        femme++;
    });
  }
  return femme;
}

function compterhomme(guests) {
  var homme = 0;
  if(guests!=null){
    guests.forEach(element => {
      if(element.gender === 'Man')
        homme++;
    });
  }
  return homme;
}


export default function CardGender(props) {
  var femme=compterfemme(props.guests);
  var homme=compterhomme(props.guests);
  React.useEffect(() => {
    let config = {
      type: "pie",
      data: {
        datasets: [{
          data: [femme, homme]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Femme',
          'Homme'
      ]
      },
    };
    let ctx = document.getElementById("gender-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="gender-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
