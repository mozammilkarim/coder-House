import React from 'react'
import {  Link} from "react-router-dom";
import styles from './Card.module.css'
function Card ({title,icon, children}){
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.headingWrapper}`}>
        <img src={`/images/${icon}.png`} alt="logo" />
        <span>{title}</span>
      </div>
      {children}
    </div>
  )
}

export default Card