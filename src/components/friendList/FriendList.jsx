import s from './FrendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(item => (
        <FriendListItem itemArray={item} key={item.id} />
      ))}
    </ul>
  );
};
