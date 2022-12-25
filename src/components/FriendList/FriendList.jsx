import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Box } from '../Box';

export const FriendList = ({ friends }) => {
  return (
    <Box as="section" mb="20px">
      <Box as="ul" width="240px">
        {friends.map(({ id, name, avatar, isOnline }) => (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        ))}
      </Box>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
