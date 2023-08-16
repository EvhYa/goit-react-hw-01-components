import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  box-shadow: 5px 5px 5px 0px rgba(184, 184, 184, 1);
`;

export const Status = styled.span`
  &:before {
    content: ' ';
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 10px;
    border: 1px solid #c42c3b;
    border-radius: 7px;
    background-color: #c9404d;
  }
  &.true:before {
    background-color: #94e185;
    border-color: #78d965;
  }
`;

export const Photo = styled.img`
  margin-right: 30px;
  margin-left: 15px;
`;
