import { FriendListItem } from "./friendlistitem";

export function FriendList(props) {
  const friends = props.friends;
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}
