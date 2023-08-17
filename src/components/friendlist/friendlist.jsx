import { Container, List, ListItem } from './friendlist.styled';
import { FriendListItem } from './friendlistitem';
import PropTypes from 'prop-types';


export function FriendList({friends}) {
  return (
    <Container>
      <List>
        {friends.map(friend => (
          <ListItem key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};