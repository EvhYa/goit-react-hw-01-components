import { Container, Info, List, ListItem, Name, Photo } from './profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, avatar, tag, location, stats }) => (
  <Container>
    <div>
      <Photo src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Info>@{tag}</Info>
      <Info>{location}</Info>
    </div>

    <List>
      <ListItem>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </ListItem>
      <ListItem className="second">
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </ListItem>
      <ListItem>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </ListItem>
    </List>
  </Container>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
