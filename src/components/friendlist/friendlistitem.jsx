export function FriendListItem(data) {
  return (
    <div>
      <span className="status">{data.isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={data.avatar} alt={data.name} width="48" />
      <p className="name">{data.name}</p>
    </div>
  );
}