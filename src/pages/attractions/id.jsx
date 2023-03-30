import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./id.module.scss";
import { Link } from "react-router-dom";
import { GET } from "../../utils/http"

export default function Attraction() {
  const [attraction, setAttraction] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    GET(`attractions?$filter=name%20eq%20%27${id}`).then((res) =>
    setAttraction(() => res.results[0])
    );
  }, []);



return (
  <div className={styles.Attraction}>
    {attraction?.name ? (
      <>
        
        <section className={styles.texts}>
          <Link to="/attractions">
            <button>Go Back</button>
          </Link>
  
          <h1>{attraction.name}</h1>
          <p>{attraction.telephone}</p>
          <p><b>You can reach it here!</b> {attraction.url}</p>
          <p><b>Telephone number</b> {attraction.telephone}</p>
          <p><b>Address:</b> {`${attraction.address.addressLocality}, ${attraction.address.addressRegion}, ${attraction.address.addressCountry}`}</p>
          <div className={styles.Graphic}>
          <img src="https://streetviewhub.com/shots?q=nature" alt="ireland" />
          <iframe
            width="400"
            height="350"
            src={`https://maps.google.com/maps/?q=+${attraction.geo.latitude}+,+${attraction.geo.longitude}&output=embed`}>
            </iframe>
            </div>
        </section>
      </>
    ) : (
      <h3>Please go back to  <Link to="/attractions">Attractions</Link> and select another attraction</h3>
    )}
  </div>
);
    }