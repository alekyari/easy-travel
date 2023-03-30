import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const ActivityCard = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activities/${data.name}%27`);
  };

  

  return (
    <div className={styles.ActivityCard} onClick={onHandleClick}>
      <img src="https://streetviewhub.com/shots?q=nature" alt="ireland" />
      <h3>{data.name}</h3>
      <p><b>You can reach it here!</b> {data.url}</p>
      <p><b>Telephone number</b> {data.telephone}</p>
      <p><b>Address:</b> {`${data.address.addressLocality}, ${data.address.addressRegion}, ${data.address.addressCountry}`}</p>
    </div>
  );
};

export default ActivityCard;
