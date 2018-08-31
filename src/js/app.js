import React from 'react';
import Billions from './containers/BillionsContainer';
import CategoriesItems from './containers/CategoriesItemsContainer';

const App = function App() {
  return (
    <div>
      <CategoriesItems />
      <Billions />
    </div>
  );
};

export default App;
