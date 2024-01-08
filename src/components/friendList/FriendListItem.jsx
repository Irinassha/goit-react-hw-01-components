import clsx from 'clsx';
import s from './FrendList.module.css';
export const FriendListItem = ({ itemArray }) => {
  return (
    <li className={clsx(s.item, itemArray.isOnline ? s.itemGreen : s.itemRed)}>
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
};
