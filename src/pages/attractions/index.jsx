import { useState, useEffect } from "react";
import { GET } from "../../utils/http"
import CardAttractionList from "../../components/cardAttractionList";
import styles from "../../styles/pages/Attractions.module.scss";

export default function Attractions() {
  const [itemAttractionList, setItemAttractionList] = useState([]);


  useEffect(() => {
    GET("attractions")
       .then((data) => setItemAttractionList(data.results));
   }, []);

  // const filterList = (list, category) =>
  //   list.filter((item) => item.category === category);

  return (
    <div className={styles.Attractions}>
      <section>
        <h2>Attractions</h2>
        <CardAttractionList data={itemAttractionList} />
      </section>
      
    </div>
  );
}
