import React from 'react'
import styled from 'styled-components';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  align-items: center;
  list-style: none;
  padding-left: 0;
  width: 50%;
  margin: 10vh auto;
`;

const Person = styled.li`
  min-height: 150px;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  svg {
    font-size: 4rem;
  }
`;

const Online = ({ list, toggleChat }) => {
  return (
    <Container>
      {list.map((person, index) => <Person onClick={() => toggleChat(index)}>
        <FAIcon icon={faUserTie} />
        {person.name}
      </Person>)}
    </Container>
  )
}

export default Online
