import { Link } from "react-router-dom";
import styles from "../styles/pages/Home.module.scss";
import Content from "../components/content"

export default function Home() {
  return (
    <div className={styles.Home}>
      <h1>Wellcome to Easy Travel</h1>
      <Content/>
    </div>
  );
}
