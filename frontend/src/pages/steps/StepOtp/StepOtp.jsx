import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Card from "../../../components/shared/card/Card";
import Button from "../../../components/shared/button/Button";
// import styles from "./StepPhoneEmail.module.css";

const StepOtp = ({ stepIncreaser }) => {
  const navigate=useNavigate()
  const inreaseStep = () => {
    navigate("/fullNmae")
  }

  const pStyle = {
    color: "grey"
  }
  
  const otpWrapper={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.7rem 0.25rem"
  }
  const inputWrapper = {
    border: "1px solid grey",
    background: "rgb(227 221 221 / 11%)",
    width: "10%",
    margin: "0.5rem ",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.7rem 0.25rem"
  }
  const inputStyle = {
    border: "none",
    background: "none",
    color: "rgb(118 112 112 / 11%)",
    fontSize: "1rem",
    paddingLeft: "1rem",
    outline: "none",
    width: "100%"
  }


  return (
    <>
      <Card title={"Enter the OTP Received"} icon="lock-emoji">
        {/* pushing below things as child component, so that it could be reused */}
        {/* <img src={`/images/lock-emoji.png`} alt="logo" /> */}
        <div style={otpWrapper}>
          <div style={inputWrapper}>
            <input maxLength={1} type="text" style={inputStyle} />
          </div>
          <div style={inputWrapper}>
            <input maxLength={1} type="text" style={inputStyle} />
          </div>
          <div style={inputWrapper}>
            <input maxLength={1} type="text" style={inputStyle} />
          </div>
          <div style={inputWrapper}>
            <input maxLength={1} type="text" style={inputStyle} />
          </div>
        </div>


        <Button onClick={inreaseStep} text={"Next"} logo={"arrow-forward"} />

        <p style={pStyle}>By Entering Your Number , you are agreeing to Our Terms and Conditions, Thanks!</p>
      </Card>


    </>
  )
}

export default StepOtp