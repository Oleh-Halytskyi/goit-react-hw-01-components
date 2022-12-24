import PropTypes from 'prop-types';
import { Box } from '../Box';

export const FriendList = ({ friends }) => {
  return (
    <Box as="section" mb="20px">
      <li class="item">
        <span class="status"></span>
        <img class="avatar" src="" alt="User avatar" width="48" />
        <p class="name"></p>
      </li>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
