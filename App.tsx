/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// TODO: Init todoapp, call todoapp component in here

import React from 'react';
import TodoPage from './_app/pages/todo';
import {Provider} from 'react-redux';
import store from './_app/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
}

export default App;
