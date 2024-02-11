import { FriendListItem } from '../Friendlistitem/FriendListItem.jsx';
import css from "./FrienList.module.css";


export const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
