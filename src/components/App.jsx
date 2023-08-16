import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendlist/friendlist';
import { TransactionHistory } from './transactions/transactions';
import user from 'hwdata/user.json';
import data from 'hwdata/data.json';
import friends from 'hwdata/friends.json';
import transactions from 'hwdata/transactions.json';
import PropTypes from 'prop-types';

export const App = () => {
  return (
    <div>
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
