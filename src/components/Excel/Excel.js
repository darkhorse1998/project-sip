import 'chart.js/auto';
import React from "react";
import { Card, Table } from "react-bootstrap";
import DoughnutChart from "../Doughnut/DoughnutChart";


import './Excel.css'

function Excel(props){

    const tableHeaders = [
        "SIP Amount", "Year", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]
    const rate = parseFloat(props.returns)/100.0;
    const rateMultiplier = 1.0 + (rate/12.0);
    var yearCounter = -1;
    const yearsList = getData()[0];
    const sipList = getData()[1];
    var lastCell = parseFloat(props.initialAmount);
    var nextCell = parseFloat(1);

    //Doughnut props
    var colorLabels = ['Invested Amount ', 'Estimated Returns'];
    var datasetLabel = "Investment Breakout";
    var backgroundColor = [
        'rgb(255, 99, 132)',    
        'rgb(255, 205, 86)'
      ];
    
    function getData() {
        var y = [];
        var sip = [];
        var sipAmount = parseFloat(props.sipStartAmount);
        const stepUp = parseFloat(props.stepUpPercentage);
        var i = 0;
        while (i < parseInt(props.numOfYears)) {
            y.push(parseInt(props.sipStartYear) + i);
            sip.push(sipAmount)
            i = i + 1;
            sipAmount = sipAmount*(1+(stepUp/100))
        }
        return [y,sip];
    }

    function getCurrentCellData(lastCell_,currentSip){
        nextCell = (lastCell_+currentSip)*rateMultiplier;
        lastCell = nextCell;
        return nextCell.toFixed(2);
    }
    
    return(
        <React.Fragment>
        <h1>SIP JOURNEY</h1>
        <Table striped borderless hover responsive="sm" variant="dark" size="md" className="table">
            <thead>
                <tr>
                    {tableHeaders.map((header)=>(
                        <th>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>

                {   
                    
                    sipList.map(sip =>(
                        <tr>
                            <td>{sip.toFixed(2)}</td>
                            <td>{yearsList[yearCounter+=1]}</td>
                            {tableHeaders.slice(2,14).map(() => (
                                <td>{getCurrentCellData(lastCell,sip)}</td>
                            ))}
                        </tr>
                        
                    ))
                }

            </tbody>
        </Table>
        <Card className="cardModified">
        <h1>Your Net Estimated Corpus : {props.currency === 'INR' ?
                                            
                                            lastCell.toLocaleString('en-IN', {
                                            maximumFractionDigits: 2,
                                            style: 'currency',
                                            currency: 'INR'})
                                        :
                                        lastCell.toLocaleString()
                                        }
        </h1>
        
        <div className='doughnutchart'>
        <DoughnutChart
            initialAmount={props.initialAmount}
            sipList={sipList}
            lastCell={lastCell}
            colorLabels={colorLabels}
            datasetLabel={datasetLabel}
            backgroundColor={backgroundColor}
        />
        </div>
        
        </Card>
        </React.Fragment>
    );

}

export default Excel;