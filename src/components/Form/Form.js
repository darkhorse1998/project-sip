import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Excel from '../Excel/Excel';
import './Form.css';


function Form() {
  const [initialAmount, setInitialAmount] = useState();
  const [sipStartAmount, setSipStartAmount] = useState();
  const [stepUpPercentage, setStepUpPercentage] = useState();
  const [numOfYears, setNumOfYears] = useState();
  const [sipStartYear, setSipStartYear] = useState();
  const [currency, setCurrency] = useState("INR");
  const [excel, setExcel] = useState(false);


  const submitHandler = () => {
    if(initialAmount && sipStartAmount && stepUpPercentage &&
        numOfYears && sipStartYear && currency){
          setExcel(true)
        }
    else{
      alert("Please fill up all the fields")
    }
  }

  return (
    <React.Fragment>
    {excel && <div className="checkAnother"><Button variant="danger" onClick={() => window.location.reload(false)}>Check Another</Button></div>}
    {!excel && <h1 classname="formTitle">INVESTMENT DETAILS</h1>}
    {!excel &&
    <form>
      <span className="mandatory">All Fields Are Mandatory</span>
      <br />
      <label>Initial Amount:</label>
      <input required
        type="number" 
        value={initialAmount}
        onChange={(e) => setInitialAmount(e.target.value)}
      />
      
      <label>SIP Start Amount:</label>
      <input required
        type="number" 
        value={sipStartAmount}
        onChange={(e) => setSipStartAmount(e.target.value)}
      />
      
      <label>Annual Step-Up %:</label>
      <input required
        type="number" 
        value={stepUpPercentage}
        onChange={(e) => setStepUpPercentage(e.target.value)}
      />
      
      <label>Number of Years:</label>
        <input required
          type="number" 
          value={numOfYears}
          onChange={(e) => setNumOfYears(e.target.value)}
        />
      
      <label>SIP Start Year:</label>
        <input required
          type="number" 
          value={sipStartYear}
          onChange={(e) => setSipStartYear(e.target.value)}
        />
      <div className="radioButtons">
      <span>
        <label>INR: </label> <input
          name="currency"
          type="radio"
          value="INR"
          checked
          onChange={(e) => setCurrency("INR")}
        />
        <label>Others: </label> <input
          name="currency"
          type="radio"
          value="INR"
          onChange={(e) => setCurrency("Others")}
        /> 
      </span>
      </div> 
    </form>}
    {!excel &&
    <Button variant="primary" 
            onClick={ () => {
                submitHandler()
            }}>
            Submit
    </Button>}
    {excel && <Excel 
                  initialAmount={initialAmount}
                  sipStartAmount={sipStartAmount}
                  stepUpPercentage={stepUpPercentage}
                  numOfYears={numOfYears}
                  sipStartYear={sipStartYear}
                  currency={currency}
                />}
    
    <div className="Footer">
      <p>&copy; Developed by Hrishikesh Kalita</p>
      <p>Contact Me <a href="https://twitter.com/Hrishik25081162" target="_blank" rel="noreferrer">@Hrishik25081162</a></p>
    </div>
    </React.Fragment>
  )
}

export default Form;