import React from 'react';

// Стили
import './App.css';

// Компоненты
import Table from './table/Table';

const App = () => {
  return (
    <div className="wrapper">
      <div className="header"></div>
      <div className="side-nav"></div>
      <div className="content">
        <Table />
      </div>
    </div>
  );
}

export default App;
