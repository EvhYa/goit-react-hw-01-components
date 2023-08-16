import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  margin: 25px auto;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
