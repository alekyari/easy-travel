import { Link, Outlet } from "react-router-dom";
import styles from "../styles/pages/About.module.scss";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Content from "../components/content"

export default function About() {
  return (
    <div className={styles.About}>
      <h1>About</h1>
      <Content/>
    </div>
  );
}
