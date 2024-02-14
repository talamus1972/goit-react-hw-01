import css from "./FriendListItem.module.css";


export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img
        className={css.image}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
      <p
        className={css.online}
        style={{ color: isOnline ? 'green' : 'red' }}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
