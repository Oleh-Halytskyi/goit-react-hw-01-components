import PropTypes from 'prop-types';
import { ListItem, Name, Avatar, Status } from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <ListItem>
      <Status selected={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
