import React from 'react'
import styles from './Button.module.css'
const Button = ({text,logo,onClick}) => {
  return (
    <button  onClick={onClick} className={`${styles.button}`}>
            <span>
            {text}
            </span>
            
            <img src={`/images/${logo}.png`} alt={`${logo}`} className="logo"/>
    </button>
  )
}

export default Button