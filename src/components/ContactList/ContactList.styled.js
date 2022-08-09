import styled from '@emotion/styled';

export const List = styled.ul`
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ItemText = styled.span`
  color: black;
  font-weight: 600;
  margin-left: 3px;
`;

export const Item = styled.li`
  color: tomato;
  display: flex;
  font-weight: 600;
`;

export const ButtonDelete = styled.button`
  margin-left: auto;
  padding: 2px;
  background-color: #50ceff;
  border-radius: 5px;
  border: none;
  width: 50px;
  font-weight: 600;
  transition-duration: 130ms;
  :hover {
    color: red;
    transform: scale(1.1);
  }
`;
