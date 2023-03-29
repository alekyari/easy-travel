import { Link, Outlet } from "react-router-dom";
import styles from "../styles/pages/City.module.scss";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Content from "../components/content"

export default function City() {
  return (
    <div className={styles.City}>
     <h1>City</h1>
     <Content/>
    </div>
  );
}
