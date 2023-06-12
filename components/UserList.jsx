import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  const [playingUsersLoaded, setPlayingUsersLoaded] = useState(false);

  useEffect(() => {
    if (playingUsersLoaded === false) setPlayingUsersLoaded(true);
  }, [users]);

  if (users === null) {
    return (
      <div>
        <span
          style={{
            animationName: playingUsersLoaded
              ? "loading_fade_out"
              : "loading_users",
            animationDirection: "1s",
            animationTimingFunction: "linear",
            animationIterationCount: playingUsersLoaded ? "1" : "infintite",
          }}
        >
          Loading users ...
        </span>
      </div>
    );
  }
  const calculateFadeinTime = (userId) => userId * 0.3;
  return (
    <ul>
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            fadeInTime={calculateFadeinTime(user.id)}
            userData={user}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
