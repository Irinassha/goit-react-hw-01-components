import { Profail } from './usercard/UserCard.jsx';
import userData from '../assets/user.json';
import { Statistics } from './statistics/Statistics.jsx';
import data from '../assets/data.json';
import { FriendList } from './friendList/FriendList.jsx';
import friends from '../assets/friends.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory.jsx';
import transactions from '../assets/transactions.json';

function App() {
  return (
    <div
      style={{
        backgroundColor: 'antiquewhite',
        paddingTop: '40px',
        paddingBottom: '50px',
      }}
    >
      <Profail user={userData} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
