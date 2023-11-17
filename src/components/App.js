import React from 'react';
import Header from './Header';
import BeanControl from './BeanControl';

function App() {
  return (
    <React.Fragment>
      <div id="header">
        <Header />
      </div>
      <div class="container">
          <div class="container-main" id="beans">
            <BeanControl />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App
