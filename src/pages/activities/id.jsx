import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./id.module.scss";
import { Link } from "react-router-dom";
import { GET } from "../../utils/http"

export default function Activity() {
  const [activity, setActivity] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    GET(`activities?$filter=name%20eq%20%27${id}`).then((res) =>
      setActivity(() => res.results[0])
    );
  }, []);


return (
  <div className={styles.Activity}>
    {activity?.name ? (
      <>
        
        <section className={styles.texts}>
          <Link to="/activities">
            <button>Go Back</button>
          </Link>
  
          <h1>{activity.name}</h1>
          <p>{activity.telephone}</p>
          <p><b>You can reach it here!</b> {activity.url}</p>
          <p><b>Telephone number</b> {activity.telephone}</p>
          <p><b>Address:</b> {`${activity.address.addressLocality}, ${activity.address.addressRegion}, ${activity.address.addressCountry}`}</p>
          <div className={styles.Graphic}>
          <img src="https://streetviewhub.com/shots?q=nature" alt="ireland" />
          <iframe
            width="400"
            height="350"
            src={`https://maps.google.com/maps/?q=+${activity.geo.latitude}+,+${activity.geo.longitude}&output=embed`}>
            </iframe>
            </div>
        </section>
      </>
    ) : (
      <h3>Please go back to  <Link to="/activities">Activities</Link> and select another activity</h3>
    )}
  </div>
);
}
