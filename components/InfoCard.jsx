import styles from "../stylesheets/InfoCard.module.css";
import { useState } from "react";

const InfoCard = ({ userData, handelBGClick }) => {
  const [mouseOverCard, setMouseOverCard] = useState(false);
  return (
    <div
      className={styles.infoCardBG}
      onClick={() => {
        if (mouseOverCard === false) handelBGClick();
      }}
    >
      <div
        className={styles.infoCardContainer}
        onMouseOver={() => setMouseOverCard(true)}
        onMouseOut={() => setMouseOverCard(false)}
      >
        <span className={styles.name}>{userData.name}</span>
        <span className={styles.description}>{userData.description}</span>
      </div>
    </div>
  );
};

export default InfoCard;
