import { useState, useEffect } from "react";
import { GET } from "../../utils/http"
import CardList from "../../components/cardList/CardList";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  const [itemActivityList, setItemActivityList] = useState([]);
  const [itemAttractionList, setItemAttractionList] = useState([]);

  useEffect(() => {
   GET("activities")
      .then((data) => setItemActivityList(data.results));
  }, []);
  
  useEffect(() => {
    GET("attractions")
       .then((data) => setItemAttractionList(data.results));
   }, []);

  // const filterList = (list, category) =>
  //   list.filter((item) => item.category === category);

  return (
    <div className={styles.Activities}>
      <section>
        <h2>Activities</h2>
        <CardList data={itemActivityList} />
      </section>
      <section>
        <h2>Attractions</h2>
        <CardList data={itemAttractionList} />
      </section>
      
    </div>
  );
}
