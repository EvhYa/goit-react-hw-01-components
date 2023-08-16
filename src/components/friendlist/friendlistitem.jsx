import { Container, Photo, Status } from './friendlistitem.styled';

export function FriendListItem(data) {
  return (
    <Container>
      <Status className={data.isOnline}></Status>
      <Photo src={data.avatar} alt={data.name} width="48" />
      <p>{data.name}</p>
    </Container>
  );
}
