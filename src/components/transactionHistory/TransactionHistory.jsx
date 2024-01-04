import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map(data => {
          return (
            <tr key={data.id} className={s.tr}>
              <td className={s.td}>{data.type}</td>
              <td className={s.td}>{data.amount}</td>
              <td className={s.td}>{data.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
