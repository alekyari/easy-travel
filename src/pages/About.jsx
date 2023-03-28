import { Link, Outlet } from "react-router-dom";
import styles from "../styles/pages/About.module.scss";
import Navbar from "../assets/components/navbar"
import Footer from "../assets/components/footer"
import Content from "../assets/components/content"

export default function About() {
  return (
    <div className={styles.About}>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}
