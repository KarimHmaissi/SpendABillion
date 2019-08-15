import React from 'react';
import IntroModal from './containers/IntroModalContainer';
import Nav from './containers/NavContainer';
import LeftWrapper from './containers/LeftWrapperContainer';
import RightWrapper from './containers/RightWrapperContainer';

const App = function App() {
  return (
    <div>
      <IntroModal />
      <Nav />
      <LeftWrapper />
      <RightWrapper />
    </div>
  );
};

export default App;
