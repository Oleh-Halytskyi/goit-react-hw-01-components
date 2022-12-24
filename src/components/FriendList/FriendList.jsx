import PropTypes from 'prop-types';
import { ListItem, Name, Avatar, Status } from './FriendList.styled';
import { Box } from '../Box';

export const FriendList = ({ friends }) => {
  return (
    <Box as="section" mb="20px">
      <Box as="ul" width="240px">
        {friends.map(({ id, name, avatar, isOnline }) => (
          <ListItem key={id}>
            <Status selected={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </ListItem>
        ))}
      </Box>
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
