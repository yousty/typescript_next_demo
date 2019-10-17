import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Chat from './Chat';
import uuid4 from 'uuid'
import { connect } from 'react-redux';

const Container = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

const Windows = ({ chats }: { chats: [] }) => {
  const [localChats, changeChats] = useState([]);
  useEffect(() => {
    changeChats(chats);
  }, [chats]);

  return (
    <Container>
      {localChats.map(el => <Chat key={uuid4()} {...el} />)}
    </Container>
  )
}

const mapStateToProps = state => ({
  chats: state.chatState.chats,
});

export default connect(
  mapStateToProps,
)(Windows);
