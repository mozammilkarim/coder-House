import React,{useState} from 'react'
import styles from "./StepPhoneEmail.module.css";
import Phone from "./Phone";
import Email from "./Email";

const subComponent={
  phone:Phone,
  email:Email
}

const StepPhoneEmail = ({ stepIncreaser}) => {
  
  const [componentType,setComponentType]=useState("phone")
  const Component=subComponent[componentType]

  
  const options={
    color:"grey",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }

  return (
    <>
      <div style={options}>
        <button className={`${styles.button} ${componentType==="phone"?styles.active:""}`} onClick={()=>setComponentType("phone")}>
          <img src="/images/phone-white.png" alt="phone" />
        </button>
        <button className={`${styles.button} ${componentType==="email"?styles.active:""}`} onClick={()=>setComponentType("email")}>
          <img src="/images/mail-white.png" alt="mail" />
        </button>
      </div>
      <Component  stepIncreaser={ stepIncreaser}/>

    </>
  )
}

export default StepPhoneEmail