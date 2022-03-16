import { Doughnut } from "react-chartjs-2";

function DoughnutChart(props) {

    function getFinalData(initialAmount,sipList){
        var invested = parseFloat(initialAmount)+(12.0*(sipList.reduce((total,current) => total = total+current,0)));
        return invested.toFixed(2);
    }
    const invested = getFinalData(props.initialAmount,props.sipList);
    const state = {
        labels: props.colorLabels,
        datasets: [
          {
            label: props.datasetLabel,
            backgroundColor: props.backgroundColor,
            hoverBackgroundColor: [
            '#FA2A53',
            '#FFC12E'
            ],
            data: [invested,(props.lastCell-invested).toFixed(2)]
          }
        ]
      } 

    return(
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Investment Breakout',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />    
    )


}

export default DoughnutChart;