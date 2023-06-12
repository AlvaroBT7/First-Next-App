import { useState, useEffect } from "react";
import InfoCard from "../components/InfoCard";
import styles from "../stylesheets/UserCard.module.css";

const UserCard = ({ fadeInTime, userData }) => {
  const [showingInfoCard, setShowingInfoCard] = useState(false);
  const userDataShortDescription = userData.description.substring(0, 30);
  return (
    <>
      {showingInfoCard ? (
        <InfoCard
          userData={userData}
          handelBGClick={() => setShowingInfoCard(false)}
        />
      ) : null}
      <div
        onClick={() => setShowingInfoCard(true)}
        className={styles.UserCard}
        style={{
          animation: `fade_in ${fadeInTime}s ease`,
        }}
      >
        <span className={styles.name}>{userData.name}</span>
        <span className={styles.desc}>{userDataShortDescription}</span>
        <div className={styles.imgContainer}>
          <img src={userData.img} alt={`${userData.name}-img`} />
        </div>
      </div>
    </>
  );
};

export default UserCard;
