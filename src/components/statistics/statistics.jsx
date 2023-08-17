import { Container, List, ListItem, Title } from './statistics.styled';
import PropTypes from 'prop-types';


export function Statistics({stats, title}) {
  return (
    <section>
      <Container>
        {title && <Title>{title}</Title>}
        <List className="stat-list">
          {stats.map(({ id, label, percentage }) => (
            <ListItem className="item" key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </ListItem>
          ))}
        </List>
      </Container>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};