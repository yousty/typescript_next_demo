import React from 'react';
import configureStore from '../redux/rootStore';
import { Provider } from 'react-redux';
import Main from '../components/Main';

const store = configureStore();

const Home = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
)}

export default Home;