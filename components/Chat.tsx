import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import uuid4 from 'uuid'
import { connect } from 'react-redux';
import { toggle, sendMessage } from '../redux/rootActions';
import { ChatInterface } from '../redux/interfaces';

const Container = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 1rem;
  background-color: white;
`;

const Messages = styled.ol`
  list-style: none;
  padding-left: 0;
  padding: 0.25rem;
  margin: 0;
  display: flex;
  flex-direction: column;

  li {
    padding: 0.5rem 0.25rem;
    font-size: 1rem;

    &:nth-child(even) {
      background-color: #00ffff2e;
    }
  }
`;

const Window = styled.div`
  overflow: scroll;
  height: 25vh;
  display: flex;
  flex-direction: column-reverse;
  background-color: azure;
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
  padding: 0.5rem 0.25rem;
  box-sizing: border-box;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

const Chat = ({ name, show, messages, dispatchToggle, dispatchSendMessage }: ChatInterface) => {
  const [input, changeInputValue] = useState("");
  const [localMessages, changeMessages] = useState([]);

  useEffect(() => {
    changeMessages(messages);
  }, [messages]);

  const handleInputChange = (val: string) => {
    changeInputValue(val);
  }

  if (!show) return null;

  const submitHandler = (e) => {
    e.preventDefault();
    changeMessages([input, ...localMessages]);
    changeInputValue("");
    dispatchSendMessage({ name, message: input })
  };

  return (
    <Container>
      <Bar onClick={() => dispatchToggle({ name })}>
        <h4>{name}</h4>
        <FAIcon icon={faTimes} />
      </Bar>
      <Window>
        <Messages>
          {localMessages.map(el => (
            <li key={uuid4()}>{el}</li>
          ))}
        </Messages>
      </Window>
      <form onSubmit={(e) => submitHandler(e)}>
        <Input type="text" value={input} onChange={e => handleInputChange(e.target.value)} />
      </form>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchToggle: (params: {}) => dispatch(toggle(params)),
  dispatchSendMessage: (params: {}) => dispatch(sendMessage(params)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Chat);

