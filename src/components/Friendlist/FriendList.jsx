import { FriendListItem } from '../Friendlistitem/FriendListItem.jsx';
import css from "./FriendList.module.css";

11111111111111111
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
        </li>
      ))}
    </ul>
  );
};
