import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  margin: 25px auto;
  background-color: #dcdcdc;
`;

export const Title = styled.h2`
  color: #a9a9a9;
  text-transform: uppercase;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
`;

export const ListItem = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #d3d3d3; */
  &:nth-child(1) {
    background-color: #cdb4db;
  }
  &:nth-child(2) {
    background-color: #ffc8dd;
  }
  &:nth-child(3) {
    background-color: #ffafcc;
  }
  &:nth-child(4) {
    background-color: #bde0fe;
  }
  &:nth-child(5) {
    background-color: #a2d2ff;
  }
`;
