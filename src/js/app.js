import React from 'react';
import Nav from './containers/NavContainer';
import Billions from './containers/BillionsContainer';
import CategoriesItems from './containers/CategoriesItemsContainer';

const App = function App() {
  return (
    <div>
      <Nav />
      <CategoriesItems />
      <Billions />
    </div>
  );
};

export default App;
