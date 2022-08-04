import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";//module.css helps to control css effecct upto parent component

function Navigation() {

    const brandStyle={
        color:"#fff",
        fontSize:"1.25rem",
        fontWeight:"bold",
        display:"flex",
        alignItems:"center"
    }
    const logoText={
        marginLeft:"0.8rem"
    }

    return (
        <nav className={`${styles.navBar} container`}>

            <Link style={brandStyle} to="/">
                <img src="/images/logo.png" alt="logo" />
                <span style={logoText}>CodersHouse</span>
            </Link>

        </nav>
    )
}

export default Navigation