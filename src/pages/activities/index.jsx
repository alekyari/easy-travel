import { useState, useEffect } from "react";
import { GET } from "../../utils/http"
import CardActivityList from "../../components/cardActivityList";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  const [itemActivityList, setItemActivityList] = useState([]);


  useEffect(() => {
   GET("activities")
      .then((data) => setItemActivityList(data.results));
  }, []);
  
  // const filterList = (list, category) =>
  //   list.filter((item) => item.category === category);

  return (
    <div className={styles.Activities}>
      <section>
        <h2>Activities</h2>
        <CardActivityList data={itemActivityList} />
      </section>
      
    </div>
  );
}
