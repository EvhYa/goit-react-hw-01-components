import { Container, List, ListItem, Title } from './statistics.styled';

export function Statistics(props) {
  const stats = props.stats;
  const title = props.title;
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
