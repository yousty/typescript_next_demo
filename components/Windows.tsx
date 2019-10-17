import React from 'react'
import styled from 'styled-components';
import Chat from './Chat';
import uuid4 from 'uuid'

const Container = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

const Windows = ({ chats, toggleChat }) => {
  return (
    <Container>
      {chats.map((el, index) => <Chat key={uuid4()} {...el} toggleChat={() => {toggleChat(index)}} />)}
    </Container>
  )
}

export default Windows
