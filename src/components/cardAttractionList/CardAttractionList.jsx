import AttractionCard from "../attractionCard";
import styles from "./index.module.scss";

const CardAttractionList = ({ data }) => {
  return (
    <div className={styles.CardAttractionList}>
      {data.map((item) => (
        <AttractionCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardAttractionList;
