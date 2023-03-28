import { Link } from "react-router-dom";
import styles from "../styles/pages/Home.module.scss";
import Navbar from "../assets/components/navbar"
import Footer from "../assets/components/footer"
import Content from "../assets/components/content"

export default function Home() {
  return (
    <div className={styles.Home}>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}
