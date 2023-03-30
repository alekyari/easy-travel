import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const AttractionCard = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/attractions/${data.name}%27`);
  };

  

  return (
    <div className={styles.AttractionCard} onClick={onHandleClick}>
      <img src="https://streetviewhub.com/shots?q=nature" alt="ireland" />
      <h3>{data.name}</h3>
      <p><b>You can reach it here!</b> {data.url}</p>
      <p><b>Telephone number</b> {data.telephone}</p>
      <p><b>Address:</b> {`${data.address.addressLocality}, ${data.address.addressRegion}, ${data.address.addressCountry}`}</p>
    </div>
  );
};

export default AttractionCard;
