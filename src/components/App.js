import React from 'react';
import Header from './Header';
import BeanControl from './BeanControl';

function App() {
  return (
    <React.Fragment>
      <div id="header">
        <Header />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 container-main">
            <BeanControl />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App
