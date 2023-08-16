import { Container, List, ListItem } from './friendlist.styled';
import { FriendListItem } from './friendlistitem';

export function FriendList(props) {
  const friends = props.friends;
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
