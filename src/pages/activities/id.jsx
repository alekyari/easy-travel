import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./id.module.scss";
import { Link } from "react-router-dom";
import { GET } from "../../utils/http"

export default function Activity() {
  const [activity, setActivity] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    GET(`activities?$filter=search.ismatch(${id},'tags')`)
       .then((data) => setActivity(data.results));
   }, []);


  return (
    <div className={styles.Activity}>
      {activity.name ? (
        <>
          
          <section className={styles.texts}>
          <h3>{activity.name}</h3>
          <p><b>You can reach it here!</b> {data.url}</p>
          <p><b>Telephone number</b> {data.telephone}</p>
          <p><b>Address:</b> {`${data.address.addressLocality}, ${data.address.addressRegion}, ${data.address.addressCountry}`}</p>
          </section>
        </>
      ) : (
        <h3>Please go back to  <Link to="/activities">Activities</Link> and select another activity</h3>
      )}
    </div>
  );
}
