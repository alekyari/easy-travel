import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activities/${data.tags[2]}`);
  };

  

  return (
    <div className={styles.Card} onClick={onHandleClick}>
      <h3>{data.name}</h3>
      <p><b>You can reach it here!</b> {data.url}</p>
      <p><b>Telephone number</b> {data.telephone}</p>
      <p><b>Address:</b> {`${data.address.addressLocality}, ${data.address.addressRegion}, ${data.address.addressCountry}`}</p>
    </div>
  );
};

export default Card;
