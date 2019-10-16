import React, { useState } from "react";
import styled from "styled-components";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  width: 100%;
  max-width: 250px;
  margin: 0 1rem;
  background-color: white;
`;

const Messages = styled.ol`
  list-style: none;
  padding-left: 0;
  overflow: scroll;
  height: 25vh;
  padding: 0.25rem;
  margin: 0;
  background-color: azure;
  display: flex;
  flex-direction: column-reverse;

  li {
    padding: 0 0.25rem;

    &:nth-child(even) {
      background-color: #00ffff2e;
    }
  }
`;

const Bar = styled.div`
  padding: 0.5rem;
  background-color: cyan;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
  }

  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.4rem 0.25rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const Chat = ({ name, show, toggleChat }) => {
  if (!show) return null;

  const [input, changeInputValue] = useState("");
  const [messages, changeMessages] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    changeMessages([input, ...messages]);
    changeInputValue("");
  };

  return (
    <Container>
      <Bar onClick={toggleChat}>
        <h4>{name}</h4>
        <FAIcon icon={faTimes} />
      </Bar>
      <Messages>
        {messages.map(el => (
          <li>{el}</li>
        ))}
      </Messages>
      <form onSubmit={(e) => submitHandler(e)}>
        <Input type="text" value={input} onChange={e => changeInputValue(e.target.value)} />
      </form>
    </Container>
  );
};

export default Chat;
