import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Box } from '../Box';

import { Profile } from '../Profile/Profile';
import { Statistics, title } from '../Statistic/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Box
      as="main"
      pl="5"
      pr="5"
      pt="3"
      pb="3"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="bg_main"
    >
      <Box as="section" mb="20px">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Box>
      <Statistics data={data} title={title} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
