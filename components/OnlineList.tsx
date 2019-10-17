import React from "react";
import styled from "styled-components";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import uuid4 from 'uuid'

const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  align-items: center;
  list-style: none;
  padding-left: 0;
  width: 90%;
  max-width: 600px;
  margin: 10vh auto;
`;

const Person = styled.li`
  min-height: 150px;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  svg {
    font-size: 4rem;
  }
`;

const Online = ({ list, toggleChat }: { list: any, toggleChat(index: any): void}) => {
  return (
    <Container>
      {list.map((person: any, index) => (
        <Person key={uuid4()} onClick={() => {toggleChat(index)}}>
          <FAIcon icon={faUserTie} />
          {person.name}
        </Person>
      ))}
    </Container>
  );
};

export default Online;
