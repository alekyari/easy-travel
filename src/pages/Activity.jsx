import { Link, Outlet } from "react-router-dom";
import styles from "../styles/pages/Activity.module.scss";
import Navbar from "../assets/components/navbar"
import Footer from "../assets/components/footer"
import Content from "../assets/components/content"

export default function Activity() {
  return (
    <div className={styles.Activity}>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}
