import s from './FrendList.module.css';
import clsx from 'clsx';

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(itemArray => {
        return (
          <li
            className={clsx(
              s.item,
              itemArray.isOnline ? s.itemGreen : s.itemRed
            )}
            key={itemArray.id}
          >
            <span
              className={clsx(
                s.status,
                itemArray.isOnline ? s.statusGreen : s.statusRed
              )}
            ></span>
            <img
              className={s.avatar}
              src={itemArray.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{itemArray.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
