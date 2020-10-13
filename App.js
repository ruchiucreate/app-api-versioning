import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store'
import Splash from './src/containers/Splash';

const App = () => {
  return (
    <Provider store={store}>
      <Splash />
    </Provider>
  );
};

export default App;
