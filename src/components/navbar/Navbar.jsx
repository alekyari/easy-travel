import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  FiSearch  } from 'react-icons/fi';



const Navbar = () =>{
 const [showNavMenu, setShowNavMenu ] = useState(false);

  const onHandleClick=() => setShowNavMenu((prev)=>!prev)
  

    return (
        <div className={styles.Navbar}>
     
     <div onClick={onHandleClick} className={`${styles.hamburger} ${showNavMenu && styles.hamburger__open}`}  >
   
          <div className={styles.center}>
                    <div></div>
          </div>
     </div>
     {showNavMenu && <ul className={styles.main_list_mobile}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/city">City</Link></li>
      </ul>}

      <ul className={styles.main_list}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/city">City</Link></li>
      </ul>
<h3> EASY TRAVEL.COM</h3>
 
      <ul className={styles.search_list}>
        <li><FiSearch/></li>
      </ul>
        </div>
    )
};

export default Navbar;