import ActivityCard from "../activityCard";
import styles from "./index.module.scss";

const CardActivityList = ({ data }) => {
  return (
    <div className={styles.CardActivityList}>
      {data.map((item) => (
        <ActivityCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardActivityList;
