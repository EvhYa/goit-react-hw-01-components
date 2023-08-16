import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  border: 3px solid grey;
  margin: 25px auto;
  padding: 10px;
  background-color: #dcdcdc;
`;

export const Photo = styled.img`
  border-radius: 50%;
  border: 1px solid grey;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const Info = styled.p`
  color: grey;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
`;

export const ListItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d3d3d3;
  &:nth-child(2) {
    background-color: #c0c0c0;
  }
`;
