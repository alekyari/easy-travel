import { Link, Outlet } from "react-router-dom";
import styles from "../styles/pages/City.module.scss";
import Navbar from "../assets/components/navbar"
import Footer from "../assets/components/footer"
import Content from "../assets/components/content"

export default function City() {
  return (
    <div className={styles.City}>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}
