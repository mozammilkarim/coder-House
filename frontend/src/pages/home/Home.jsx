import React from 'react'
import Card from '../../components/shared/card/Card'
import styles from './Home.module.css'
import { useNavigate,useLocation, Link} from "react-router-dom";
import Button from '../../components/shared/button/Button';


function Home() {
  let navigate = useNavigate();

  const startRegistration=()=>{
    console.warn("hi")
    navigate("/authenticate")
  }

  return (
    <>

      <Card title={"Welcome to codersHouse"} icon="logo">
        {/* pushing below things as child component, so that it could be reused */}
        <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Optio aliquam iure quis autem velit repudiandae quo harum
          dolorem accusantium necessitatibus esse id corrupti ipsum
          aliquid, assumenda minima! Numquam, repellat vitae.</p>
        
        <Button onClick={startRegistration} text={"Get your Username"} logo={"arrow-forward"}/>
        
        <div className={`${styles.lastDiv}`}>
          <span className={`${styles.invite}`}>Have an Invite text?</span>
          <Link to="/login">Sign In</Link>
        </div>
      </Card>

    </>

  )
}

export default Home