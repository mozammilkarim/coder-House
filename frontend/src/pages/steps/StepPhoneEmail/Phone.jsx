import React from 'react'
import { Link } from 'react-router-dom';
import Card from "../../../components/shared/card/Card";
import Button from "../../../components/shared/button/Button";
import styles from "./StepPhoneEmail.module.css";

const Phone = ({ stepIncreaser}) => {
  const inreaseStep = () => {
    stepIncreaser((step)=>step+1)
  }

  const pStyle={
    color:"grey"
  }
  const inputStyle={
    border: "none",
    background: "none",
    color: "rgb(118 112 112 / 11%)",
    fontSize: "1rem",
    paddingLeft: "1rem",
    outline: "none",
  }
  const inputWrapper={
    border:"1px solid grey",
    background:"rgb(227 221 221 / 11%)",
    width:"80%",
    margin:"2rem auto",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:"0.7rem 0.25rem"
  }

  return (
    <>
      <Card title={"Enter Your Phone Number"} icon="phone">
        {/* pushing below things as child component, so that it could be reused */}
        <div style={inputWrapper}>
          <img src={`/images/logo.png`} alt="logo" />
          <input placeholder='+91 7827142330' type="text" style={inputStyle}/>
        </div>

        <Button onClick={inreaseStep} text={"Next"} logo={"arrow-forward"} />

        <p style={pStyle}>By Entering Your Number , you are agreeing to Our Terms and Conditions, Thanks!</p>
      </Card>

    </>
  )
}

export default Phone