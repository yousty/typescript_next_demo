import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Online from '../components/OnlineList';
import Windows from '../components/Windows';

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

const Main = () => {
  return (
    <main>
      <MyGlobalStyle />
      <Container>
        <h1>Chat React + Redux + Typescript App</h1>
        <Online />
      </Container>
      <Windows />
    </main>
  )
}

export default Main;