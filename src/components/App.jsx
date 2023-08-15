import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendlist/friendlist';
import { TransactionHistory } from './transactions/transactions';
import user from 'hwdata/user.json';
import data from 'hwdata/data.json';
import friends from 'hwdata/friends.json';
import transactions from 'hwdata/transactions.json';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
