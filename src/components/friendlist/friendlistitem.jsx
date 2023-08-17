import { Container, Photo, Status } from './friendlistitem.styled';
import PropTypes from 'prop-types';

export function FriendListItem({ isOnline, name, avatar }) {
  return (
    <Container>
      <Status className={isOnline}></Status>
      <Photo src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Container>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
