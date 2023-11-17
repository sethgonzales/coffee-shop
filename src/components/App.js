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
        <div class="row justify-content-center">
          <div class="col-6 container-main">
            <BeanControl />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App
