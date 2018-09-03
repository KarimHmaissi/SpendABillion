import React from 'react';
import Nav from './containers/NavContainer';
import LeftWrapper from './containers/LeftWrapperContainer';
import RightWrapper from './containers/RightWrapperContainer';

const App = function App() {
  return (
    <div>
      <Nav />
      <LeftWrapper />
      <RightWrapper />
    </div>
  );
};

export default App;
