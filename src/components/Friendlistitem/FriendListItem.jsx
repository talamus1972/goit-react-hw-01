import css from "./FriendListItem.module.css";


export const FriendListItem = ({ friend }) => {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={friend.avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
      <p
        className={css.online}
        style={{ color: friend.isOnline ? 'green' : 'red' }}
      >
        {friend.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
