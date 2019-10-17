import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Online from '../components/OnlineList';
import Windows from '../components/Windows';
import { replaceArrayItem } from '../redux/helpers';
import configureStore from '../redux/rootStore';
import { Provider } from 'react-redux';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: teal;

  h1 {
    margin: 0;
    color: white;
    text-align: center;
    padding: 0.5rem 0;
  }
`;

const MyGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const store = configureStore();

const list = [{ name: 'Adrian', show: false }, { name: 'Adam', show: false }, { name: 'Darek', show: false }];

const Home = () => {
  const [chats, changeChats] = useState([...list]);

  const toggleChat = (index: number) => {
    const targetChat = [...chats][index];
    const newChats = replaceArrayItem([...chats], index, {...targetChat, show: !targetChat.show});

    changeChats(newChats);
    return newChats;
  }

  return (
    <Provider store={store}>
      <main>
        <MyGlobalStyle />
        <Container>
          <h1>Chat React + Redux + Typescript App</h1>
            <Online list={chats} toggleChat={toggleChat} />
        </Container>
        <Windows chats={chats} toggleChat={toggleChat} />
      </main>
    </Provider>
)}

export default Home
